
const scale = 2 ** 53
const ints = new Uint32Array(2)

export function cryptoRandom() {
	crypto.getRandomValues(ints)
	const hi = ints[0] & 0x001fffff
	const lo = ints[1]
	return ((hi * 0x100000000) + lo) / scale
}

