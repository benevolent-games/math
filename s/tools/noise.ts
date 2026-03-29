
import {createNoise2D} from "simplex-noise"
import {Random} from "./randy.js"

export function makeNoiseSampler(random: Random) {
	const noise2d = createNoise2D(random)

	return (x: number, y = 0, scale = 1) => {
		const s = noise2d(x * scale, y * scale)
		return (s + 1) / 2
	}
}

