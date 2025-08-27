
import {Vec3} from "../../primitives/vec3.js"

export class Segment {
	constructor(
		public start: Vec3,
		public end: Vec3,
	) {}

	get vector() {
		return this.end.clone().subtract(this.start)
	}

	get length() {
		return this.start.distance(this.end)
	}

	get center() {
		return this.start.clone()
			.add(this.end)
			.divideBy(2)
	}

	clone() {
		return new Segment(
			this.start.clone(),
			this.end.clone(),
		)
	}

	fromStart(length: number) {
		const direction = this.vector.normalize()
		return this.start.clone().add(direction.multiplyBy(length))
	}

	point(fraction: number) {
		return this.start.clone().add(this.vector.multiplyBy(fraction))
	}

	scale(fraction: number) {
		const {center} = this
		const newHalfVector = this.vector.multiplyBy(fraction / 2)
		this.start.set(center.clone().subtract(newHalfVector))
		this.end.set(center.clone().add(newHalfVector))
		return this
	}
}

