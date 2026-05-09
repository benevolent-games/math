
import {Random} from "./types.js"
import {u32ify} from "./u32ify.js"

export class Rando {
	constructor(public random: Random = Math.random) {}

	/** obtain a random positive u32 integer. */
	u32() {
		return u32ify(this.random())
	}

	/** return true or false, given a 0 to 1 probability fraction. */
	roll(chance = 0.5) {
		return this.random() < chance
	}

	/** generate a random number between two numbers. */
	range(min: number, max: number) {
		return min + (this.random() * (max - min))
	}

	/** generate a random integer between two numbers (inclusive). */
	intRange(min: number, max: number) {
		return min + Math.floor(this.random() * (max - min + 1))
	}

	/** randomly choose an index given an array length. */
	index(length: number) {
		return Math.floor(this.random() * length)
	}

	/** return a random item from the given array. */
	pick<T>(array: T[]) {
		return array[this.index(array.length)]
	}

	/** remove and return a random item from the given array. */
	yoink<T>(array: T[]) {
		const index = this.index(array.length)
		const [item] = array.splice(index, 1)
		return item
	}

	/** randomly select a number of array items. */
	select<T>(count: number, array: T[]) {
		const copy = [...array]
		if (count >= array.length)
			return copy

		const selection: T[] = []
		for (let i = 0; i < count; i++)
			selection.push(this.yoink(copy))
		return selection
	}

	/** remove and return a number of items from the given array. */
	extract<T>(count: number, array: T[]) {
		const selection: T[] = []
		for (let i = 0; i < count; i++) {
			if (array.length === 0)
				return selection
			selection.push(this.yoink(array))
		}
		return selection
	}

	/** shuffle an array in-place using (fisher-yates). */
	shuffle<T>(array: T[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(this.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}
		return array
	}
}

