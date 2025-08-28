
import {Vec3} from "../../core/vec3.js"

export class Segment {
	constructor(
		public start: Vec3,
		public end: Vec3,
	) {}

	vector() {
		return this.end.clone().subtract(this.start)
	}

	length() {
		return this.start.distance(this.end)
	}

	center() {
		return this.start.clone()
			.add(this.end)
			.half()
	}

	clone() {
		return new Segment(
			this.start.clone(),
			this.end.clone(),
		)
	}

	fromStart(length: number) {
		const direction = this.vector().normalize()
		return this.start.clone().add(direction.multiplyBy(length))
	}

	point(fraction: number) {
		return this.start.clone().add(this.vector().multiplyBy(fraction))
	}

	scale(fraction: number) {
		const {center} = this
		const newHalfVector = this.vector().multiplyBy(fraction / 2)
		this.start.set(center().subtract(newHalfVector))
		this.end.set(center().add(newHalfVector))
		return this
	}
}

