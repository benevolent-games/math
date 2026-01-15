
# @benev/math
> benevolent's typescript math library for games

<br/>

## 🍋 CORE
> common numerical structures

> [!TIP]
> until real docs are written, see the relevant sourcecode in [s/core/](./s/core/)

### 🍏 conventions for all core classes
- **mutable by default.**  
    operations happen in-place, for efficiency (we're trying to reduce gc churn).  
    ```ts
    // allocate a single vector instance
    const vector = new Vec2(0, 0)
      .add({x: 1, y: 2})
      .mulBy(2)
    ```
- **explicit cloning.**  
    use `.dup()` to avoid mutating the original.  
    ```ts
    // modify a clone (not the original)
    const vector2 = vector
      .dup()
      .normalize()
    ```
- **underscore-suffixed methods take direct args.**  
  - methods normally take in other class instances:
      ```ts
      vectorA.add(vectorB)
      ```
  - but underscore-suffixed methods take raw naked args (helping you avoid making instances)
      ```ts
      vectorA.add_(x, y)
      ```

### 🍏 Vec2
### 🍏 Vec3
### 🍏 Vec4
### 🍏 Quat

<br/>

## 🍋 TOOLS
> handy utilities

> [!TIP]
> until real docs are written, see the relevant sourcecode in [s/tools/](./s/tools/)

### 🍏 Scalar
### 🍏 Circular
### 🍏 Randy
### 🍏 Noise
### 🍏 Spline
### 🍏 Angles
- **Radians**
- **Degrees**
- **Turns**
- **Arcseconds**

<br/>

## 🍋 SHAPES
> geometric concepts

> [!TIP]
> until real docs are written, see the relevant sourcecode in [s/shapes/](./s/shapes/)

### 🍏 2d shapes
- **Edge** — a line segment
- **Pill** — a fat line segment (like a sausage)
- **Rect** — a rectangle
- **Circle** — a point with a radius

### 🍏 3d shapes
- **Segment** — a line segment
- **Capsule** — a fat line segment (like a hoagie)
- **Box** — a cuboid
- **Sphere** — a point with a radius

<br/>

## 🍋 OPTIMIZERS
> spatial optimization data structures

> [!TIP]
> until real docs are written, see the relevant sourcecode in [s/optimizers/](./s/optimizers/)

### 🍏 HashMap
### 🍏 HashSet
### 🍏 ZenGrid

<br/>

## 🍋 PHYSICS
> functionality for doing basic physics

> [!TIP]
> until real docs are written, see the relevant sourcecode in [s/physics/](./s/physics/)

### 🍏 collide2d
### 🍏 collide3d
### 🍏 intersect2d
### 🍏 intersect3d

<br/>

## 👼 https://benevolent.games/
star this on github if you use it 👍

