
import {Rect} from "./rect.js"
import {Vec2, Vec2Array, Xy} from "../../core/vec2.js"

export type CircleJson = [center: Vec2Array, radius: number]
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
		return [this.center.clone().array(), this.radius]
	}

	translate(delta: Vec2) {
		this.center.add(delta)
		return this
	}

	boundingBox() {
		const size = Vec2.all(this.radius * 2)
		return Rect.fromCenter(this.center.clone(), size)
	}

	clone() {
		return new Circle(this.center.clone(), this.radius)
	}
}

