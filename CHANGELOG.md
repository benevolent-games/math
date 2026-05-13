
# @benev/math changelog
- 🟥 breaking change
- 🔶 deprecation or possible breaking change
- 🍏 harmless addition, fix, or enhancement



<br/>

## v0.3

### v0.3.5
- 🔶 deprecate `Randy` in favor of new `Rand`
- 🍏 add `Rand` class
- 🍏 add `seed` fn
- 🍏 add `cryptoRandom` fn
- 🍏 add `u32ify` fn

### v0.3.4
- 🍏 improve rect ergos

### v0.3.3
- 🍏 export lattice (oops, forgot it last version)

### v0.3.2
- 🍏 add `Lattice` spatial optimizer for rect queries
- 🍏 loosen collide2d types to use Xy, RectLike, CircleLike

### v0.3.1
- 🍏 add vector instance `.from` method

### v0.3.0
- 🟥 renamed vector `.clone()` to `.dup()`
- 🟥 renamed vector subtract/multiply/divide to sub/mul/div
- 🟥 renamed `Radians` to `radians`, also lowercased degrees/turns/arcseconds
- 🟥 replaced `degrees.toRadians(120)` with `degrees(120)`
- 🟥 rename `spline.ez.linear` to `spine.ezLinear`
- 🟥 rename `Randy.randomSeed` to `Randy.seed`
- 🟥 rename `Randy.makeRandom` to `Randy.random`
- 🟥 replaec `Noise` class with `makeNoiseSampler` fn
- 🟥 reworked a lot of exports



<br/>

## v0.2

### v0.2.0
- 🟥 remove old deprecated methods and crap
- 🍏 add shapes2d, collide2d, intersect2d, and optimizers like HashGrid, HashSet, ZenGrid



<br/>

## v0.1

### v0.1.0
- 🍏 initial cool version

