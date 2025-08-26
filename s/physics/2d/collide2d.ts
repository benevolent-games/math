
import {Vec2} from "../../primitives/vec2.js"
import {Rect} from "../../shapes/2d/rect.js"
import {Scalar} from "../../primitives/scalar.js"
import {Circle} from "../../shapes/2d/circle.js"

export function pointVsRect(point: Vec2, box: Rect) {
	const {min, max} = box
	return (
		point.x >= min.x &&
		point.x <= max.x &&
		point.y >= min.y &&
		point.y <= max.y
	)
}

export function pointVsCircle(point: Vec2, circle: Circle) {
	const dx = point.x - circle.center.x
	const dy = point.y - circle.center.y
	const distanceSquared = (dx ** 2) + (dy ** 2)
	return distanceSquared <= (circle.radius ** 2)
}

export function rectVsRect(a: Rect, b: Rect) {
	return !(
		a.max.x <= b.min.x ||
		a.min.x >= b.max.x ||
		a.max.y <= b.min.y ||
		a.min.y >= b.max.y
	)
}

export function rectVsCircle(rect: Rect, circle: Circle) {
	const clamped = new Vec2(
		Scalar.clamp(circle.center.x, rect.min.x, rect.max.x),
		Scalar.clamp(circle.center.y, rect.min.y, rect.max.y),
	)
	const difference = circle.center.clone().subtract(clamped)
	const distanceSquared = (difference.x ** 2) + (difference.y ** 2)
	const radiusSquared = circle.radius ** 2
	return distanceSquared <= radiusSquared
}

export function circleVsCircle(circleA: Circle, circleB: Circle) {
	const dx = circleB.center.x - circleA.center.x
	const dy = circleB.center.y - circleA.center.y
	const distanceSquared = (dx ** 2) + (dy ** 2)
	const radiusSum = circleA.radius + circleB.radius
	return distanceSquared <= (radiusSum ** 2)
}

