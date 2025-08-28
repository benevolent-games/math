
import {Vec3, XyzArray, Xyz} from "../../core/vec3.js"

export type BoxJson = [min: XyzArray, max: XyzArray]
export type BoxLike = {min: Xyz, max: Xyz}

export class Box {
	constructor(
		public min: Vec3,
		public max: Vec3,
	) {}

	static from(data: BoxJson | BoxLike) {
		return Array.isArray(data)
			? new this(Vec3.from(data[0]), Vec3.from(data[1]))
			: new this(Vec3.from(data.min), Vec3.from(data.max))
	}

	static fromCorner(min: Vec3, size: Vec3) {
		return new this(min, min.clone().add(size))
	}

	static fromCenter(center: Vec3, size: Vec3) {
		const halfSize = size.clone().half()
		const min = center.clone().subtract(halfSize)
		const max = center.clone().add(halfSize)
		return new this(min, max)
	}

	toJSON(): BoxJson {
		return [this.min.toJSON(), this.max.toJSON()]
	}

	clone() {
		return new Box(this.min.clone(), this.max.clone())
	}

	set(box: BoxLike) {
		this.min.set(box.min)
		this.max.set(box.max)
	}

	size() {
		return this.max.clone().subtract(this.min)
	}

	center() {
		return this.min.clone().add(this.size().half())
	}

	normalize() {
		const {min, max} = this
		this.min.set(Vec3.min(min, max))
		this.max.set(Vec3.max(min, max))
		return this
	}

	translate_(x: number, y: number, z: number) {
		this.min.add_(x, y, z)
		this.max.add_(x, y, z)
		return this
	}

	translate(delta: Vec3) {
		this.min.add(delta)
		this.max.add(delta)
		return this
	}

	grow(increase: Vec3) {
		const halfIncrease = increase.clone().half()
		this.min.subtract(halfIncrease)
		this.max.add(halfIncrease)
		return this
	}

	growBy(increase: number) {
		const halfIncrease = increase / 2
		this.min.subtractBy(halfIncrease)
		this.max.addBy(halfIncrease)
		return this
	}
}

