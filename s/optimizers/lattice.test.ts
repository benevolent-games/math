
import {hex} from "@e280/stz"
import {Lattice} from "./lattice.js"
import {Vec2} from "../core/vec2.js"
import {Rect} from "../shapes/2d/rect.js"
import {suite, test, expect} from "@e280/science"

const random = () => hex.random()

export default suite({
	"upsert and query an item": test(async() => {
		const alpha = random()
		const lattice = new Lattice(new Vec2(8, 8))
		expect(lattice.count).is(0)
		lattice.upsert(alpha, new Rect(new Vec2(1, 1), new Vec2(2, 2)))
		expect(lattice.count).is(1)
		expect(lattice.cellCount).is(1)
		const results = new Set(lattice.query(new Rect(new Vec2(0, 0), new Vec2(8, 8))))
		expect(results.has(alpha)).is(true)
	}),

	"remove an item": test(async() => {
		const alpha = random()
		const lattice = new Lattice(new Vec2(8, 8))
		lattice.upsert(alpha, new Rect(new Vec2(1, 1), new Vec2(2, 2)))
		lattice.remove(alpha)
		const results = new Set(lattice.query(new Rect(new Vec2(0, 0), new Vec2(8, 8))))
		expect(results.has(alpha)).is(false)
		expect(lattice.count).is(0)
		expect(lattice.cellCount).is(0)
	}),

	"upsert to move an item": test(async() => {
		const alpha = random()
		const lattice = new Lattice(new Vec2(8, 8))

		lattice.upsert(alpha, new Rect(new Vec2(1, 1), new Vec2(2, 2)))
		expect(
			new Set(lattice.query(new Rect(new Vec2(0, 0), new Vec2(8, 8)))).has(alpha)
		).is(true)
		expect(
			new Set(lattice.query(new Rect(new Vec2(8, 8), new Vec2(16, 16)))).has(alpha)
		).is(false)

		lattice.upsert(alpha, new Rect(new Vec2(11, 11), new Vec2(12, 12)))
		expect(
			new Set(lattice.query(new Rect(new Vec2(0, 0), new Vec2(8, 8)))).has(alpha)
		).is(false)
		expect(
			new Set(lattice.query(new Rect(new Vec2(8, 8), new Vec2(16, 16)))).has(alpha)
		).is(true)

		expect(lattice.count).is(1)
		expect(lattice.cellCount).is(1)
	}),

	"no false positive": test(async() => {
		const alpha = random()
		const lattice = new Lattice(new Vec2(8, 8))
		lattice.upsert(alpha, new Rect(new Vec2(1, 1), new Vec2(2, 2)))
		const results = new Set(lattice.query(new Rect(new Vec2(3, 3), new Vec2(4, 4))))
		expect(results.has(alpha)).is(false)
		expect(results.size).is(0)
	}),

	"item spans multiple cells": test(async() => {
		const alpha = random()
		const lattice = new Lattice(new Vec2(8, 8))
		lattice.upsert(alpha, new Rect(new Vec2(0, 0), new Vec2(12, 4)))
		const resultsA = new Set(lattice.query(new Rect(new Vec2(1, 0), new Vec2(3, 2))))
		expect(resultsA.has(alpha)).is(true)
		const resultsB = new Set(lattice.query(new Rect(new Vec2(9, 0), new Vec2(10, 2))))
		expect(resultsB.has(alpha)).is(true)
		expect(lattice.cellCount).is(2)
	}),

	"non overlapping": test(async() => {
		const alpha = random()
		const lattice = new Lattice(new Vec2(8, 8))
		lattice.upsert(alpha, new Rect(new Vec2(0, 0), new Vec2(8, 8)))
		const results = new Set(lattice.query(new Rect(new Vec2(8, 8), new Vec2(16, 16))))
		expect(results.size).is(0)
	}),

	"negatives": test(async() => {
		const alpha = random()
		const lattice = new Lattice(new Vec2(8, 8))
		lattice.upsert(alpha, new Rect(new Vec2(-6, -6), new Vec2(-4, -4)))
		const results = new Set(lattice.query(new Rect(new Vec2(-8, -8), new Vec2(-5, -5))))
		expect(results.size).is(1)
		expect(results.has(alpha)).is(true)
	}),

	"query a point-like rect": test(async() => {
		const alpha = random()
		const lattice = new Lattice(new Vec2(8, 8))
		lattice.upsert(alpha, Rect.point(new Vec2(4, 4)))
		const results = new Set(lattice.query(new Rect(new Vec2(0, 0), new Vec2(8, 8))))
		expect(results.has(alpha)).is(true)
	}),

	"perfect cell fitting": test(async() => {
		const lattice = new Lattice(new Vec2(8, 8))
		lattice.upsert("a", new Rect(new Vec2(0, 0), new Vec2(8, 8)))
		expect(lattice.cellCount).is(1)
	}),
})

