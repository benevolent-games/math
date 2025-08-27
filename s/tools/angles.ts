
import {Scalar} from "./scalar.js"

const pi = Math.PI

export const Radians = {
	circle: 2 * pi,
	halfcircle: pi,

	toDegrees(r: number) {
		return r * (180 / pi)
	},
	toArcseconds(r: number) {
		return Radians.toDegrees(r) * 3600
	},
	toTurns(r: number) {
		return r / Radians.circle
	},

	circleDistance(radiansA: number, radiansB: number): number {
		const diff = Math.abs(Scalar.wrap(radiansA - radiansB, 0, Radians.circle))
		return Math.min(diff, Radians.circle - diff)
	},
}

export const Turns = {
	toRadians(t: number) {
		return t * Radians.circle
	},
	toDegrees(t: number) {
		return Radians.toDegrees(Turns.toRadians(t))
	},
}

export const Arcseconds = {
	toRadians(a: number) {
		return Degrees.toRadians(a / 3600)
	},
}

export const Degrees = {
	toRadians(d: number) {
		return d * (pi / 180)
	},
	toTurns(d: number) {
		return Radians.toTurns(Degrees.toRadians(d))
	},
}

