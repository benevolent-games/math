
import {science, test, expect} from "@e280/science"
import lattice from "./optimizers/lattice.test.js"

await science.run({
	lattice,

	"the science is settled": test(async() => {
		expect(2 + 2).is(4)
	}),
})

