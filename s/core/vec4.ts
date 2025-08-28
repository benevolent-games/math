
import {Xyzw, XyzwArray} from "./quat.js"

export class Vec4 {
	constructor(
		public x: number,
		public y: number,
		public z: number,
		public w: number,
	) {}

	static new(x: number, y: number, z: number, w: number) {
		return new this(x, y, z, w)
	}

	static zero() {
		return new this(0, 0, 0, 0)
	}

	static from(v: XyzwArray | Xyzw) {
		return Array.isArray(v)
			? new this(...v)
			: new this(v.x, v.y, v.z, v.w)
	}

	clone() {
		return new Vec4(this.x, this.y, this.z, this.w)
	}

	*[Symbol.iterator]() {
		yield this.x
		yield this.y
		yield this.z
		yield this.w
	}

	toJSON(): XyzwArray {
		const {x, y, z, w} = this
		return [x, y, z, w]
	}

	toString() {
		return `(Vec4 x${this.x.toFixed(2)}, y${this.y.toFixed(2)}, z${this.z.toFixed(2)}, w${this.w.toFixed(2)})`
	}

	set_(x: number, y: number, z: number, w: number) {
		this.x = x
		this.y = y
		this.z = z
		this.w = w
		return this
	}

	set({x, y, z, w}: Xyzw) {
		this.x = x
		this.y = y
		this.z = z
		this.w = w
		return this
	}

	/** mutator */
	map(fn: (a: number, index: number) => number) {
		this.x = fn(this.x, 0)
		this.y = fn(this.y, 1)
		this.z = fn(this.z, 2)
		this.w = fn(this.w, 3)
		return this
	}
}

