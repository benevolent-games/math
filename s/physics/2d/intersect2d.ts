
import {Vec2} from "../../core/vec2.js"
import {Rect} from "../../shapes/2d/rect.js"
import {Scalar} from "../../helpers/scalar.js"
import {Circle} from "../../shapes/2d/circle.js"
import {rectVsCircle, rectVsRect} from "./collide2d.js"

export class Intersection {
	constructor(
		public contactPoint: Vec2,
		public depth: number,
		public normalA: Vec2,
		public normalB: Vec2,
	) {}
}

export function intersectRectVsRect(a: Rect, b: Rect) {
	if (!rectVsRect(a, b)) return null

	const overlapX = Math.min(a.max.x - b.min.x, b.max.x - a.min.x)
	const overlapY = Math.min(a.max.y - b.min.y, b.max.y - a.min.y)
	const depth = Math.min(overlapX, overlapY)

	const contactPoint = new Vec2(
		Scalar.clamp((a.center.x + b.center.x) / 2, b.min.x, b.max.x),
		Scalar.clamp((a.center.y + b.center.y) / 2, b.min.y, b.max.y)
	)

	const normalA = depth === overlapX
		? new Vec2(b.center.x > a.center.x ? -1 : 1, 0)
		: new Vec2(0, b.center.y > a.center.y ? -1 : 1)

	const normalB = normalA.clone().multiplyBy(-1)

	return new Intersection(contactPoint, depth, normalA, normalB)
}

export function intersectRectVsCircle(rect: Rect, circle: Circle) {
	if (!rectVsCircle(rect, circle)) return null

	const clamped = new Vec2(
		Scalar.clamp(circle.center.x, rect.min.x, rect.max.x),
		Scalar.clamp(circle.center.y, rect.min.y, rect.max.y),
	)
	const difference = circle.center.clone().subtract(clamped)
	const distance = difference.magnitude()
	const depth = circle.radius - distance

	const contactPoint = clamped
	const normalA = difference.normalize()
	const normalB = normalA.clone().multiplyBy(-1)

	return new Intersection(contactPoint, depth, normalA, normalB)
}

export function intersectCircleVsCircle(a: Circle, b: Circle) {
	const dx = b.center.x - a.center.x
	const dy = b.center.y - a.center.y
	const distance = Math.sqrt(dx ** 2 + dy ** 2)
	if (distance >= a.radius + b.radius) return null

	const depth = Math.max(0, a.radius + b.radius - distance)

	const normalA = distance === 0
		? new Vec2(1, 0) // fallback for perfectly overlapping circles
		: new Vec2(dx / distance, dy / distance)

	const normalB = normalA.clone().multiplyBy(-1)

	const contactPoint = new Vec2(
		(a.center.x + b.center.x) / 2,
		(a.center.y + b.center.y) / 2
	)

	return new Intersection(contactPoint, depth, normalA, normalB)
}

