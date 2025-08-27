
export class HashSet<Value> {
	#map = new Map<string, Value>

	constructor(
			private hash: (value: Value) => string,
			values: Value[] = [],
		) {
		this.add(...values)
	}

	get size() {
		return this.#map.size
	}

	get(value: Value) {
		return this.#map.get(this.hash(value))
	}

	has(value: Value) {
		return this.#map.has(this.hash(value))
	}

	add(...values: Value[]) {
		for (const value of values) {
			const key = this.hash(value)
			this.#map.set(key, value)
		}
		return this
	}

	delete(...values: Value[]) {
		for (const value of values)
			this.#map.delete(this.hash(value))
		return this
	}

	array() {
		return [...this.#map.values()]
	}

	values() {
		return this.#map.values()
	}

	[Symbol.iterator]() {
		return this.values()
	}
}

