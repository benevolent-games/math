
import {Vec2, Vec2Json, Xy} from "../../core/vec2.js"
import {pointVsRect} from "../../physics/2d/collide2d.js"

export type RectJson = [min: Vec2Json, max: Vec2Json]
export type RectLike = {min: Xy, max: Xy}

export class Rect {
	constructor(
		public min: Vec2,
		public max: Vec2,
	) {}

	static from(data: RectJson | RectLike) {
		return Array.isArray(data)
			? new this(Vec2.from(data[0]), Vec2.from(data[1]))
			: new this(Vec2.from(data.min), Vec2.from(data.max))
	}

	static fromCorner(min: Vec2, size: Vec2) {
		const max = min.clone().add(size)
		return new this(min, max)
	}

	static fromCenter(center: Vec2, size: Vec2) {
		const halfSize = size.clone().half()
		const min = center.clone().subtract(halfSize)
		const max = center.clone().add(halfSize)
		return new this(min, max)
	}

	clone() {
		return new Rect(this.min.clone(), this.max.clone())
	}

	toJSON(): RectJson {
		return [this.min.toJSON(), this.max.toJSON()]
	}

	set(rect: RectLike) {
		this.min.set(rect.min)
		this.max.set(rect.max)
	}

	normalize() {
		const {min, max} = this
		this.min.set(Vec2.min(min, max))
		this.max.set(Vec2.max(min, max))
		return this
	}

	size() {
		return this.max.clone().subtract(this.min)
	}

	center() {
		return this.min.clone().add(this.size().half())
	}

	translate(delta: Vec2) {
		this.min.add(delta)
		this.max.add(delta)
		return this
	}

	contains(point: Vec2) {
		return pointVsRect(point, this)
	}

	boundingBox() {
		return this.clone()
	}
}

