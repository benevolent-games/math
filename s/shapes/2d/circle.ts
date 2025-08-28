
import {Rect} from "./rect.js"
import {Vec2, XyArray, Xy} from "../../core/vec2.js"

export type CircleJson = [center: XyArray, radius: number]
export type CircleLike = {center: Xy, radius: number}

export class Circle {
	constructor(
		public center: Vec2,
		public radius: number,
	) {}

	static from(data: CircleJson | CircleLike) {
		return Array.isArray(data)
			? new this(Vec2.from(data[0]), data[1])
			: new this(Vec2.from(data.center), data.radius)
	}

	toJSON(): CircleJson {
		return [this.center.clone().toJSON(), this.radius]
	}

	clone() {
		return new Circle(this.center.clone(), this.radius)
	}

	set(circle: CircleLike) {
		this.center.set(circle.center)
		this.radius = circle.radius
	}

	translate(delta: Vec2) {
		this.center.add(delta)
		return this
	}

	boundingBox() {
		const size = Vec2.all(this.radius * 2)
		return Rect.fromCenter(this.center.clone(), size)
	}
}

