
import {Rect} from "./rect.js"
import {Vec2} from "../../core/vec2.js"

export class Circle {
	constructor(
		public center: Vec2,
		public radius: number,
	) {}

	offset(delta: Vec2) {
		this.center.add(delta)
		return this
	}

	boundingBox() {
		const extent = Vec2.all(this.radius * 2)
		return new Rect(this.center, extent)
	}

	clone() {
		return new Circle(this.center.clone(), this.radius)
	}
}

