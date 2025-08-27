
import {Vec2} from "../../primitives/vec2.js"
import {pointVsRect} from "../../physics/2d/collide2d.js"

export class Rect {
	constructor(
			public center: Vec2,
			public extent: Vec2,
		) {
		if (extent.x < 0 || extent.y < 0)
			throw new Error(`invalid negative extent, ${extent.toString()}`)
	}

	static fromCorner(min: Vec2, extent: Vec2) {
		return new this(min.clone().add(extent.clone().half()), extent)
	}

	get min() {
		return this.center.clone()
			.subtract(this.extent.clone().half())
	}

	get max() {
		return this.center.clone()
			.add(this.extent.clone().half())
	}

	offset(delta: Vec2) {
		this.center.add(delta)
		return this
	}

	boundingBox() {
		return this
	}

	contains(point: Vec2) {
		return pointVsRect(point, this)
	}

	clone() {
		return new Rect(this.center.clone(), this.extent.clone())
	}
}

