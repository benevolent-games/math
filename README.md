
# @benev/math
> benevolent's typescript math library for games

<br/>

## 🍋 CORE
> common numerical structures

### 🍏 conventions for all core classes
- **mutable by default.**  
    operations happen in-place, for efficiency (we're trying to reduce gc churn).  
    ```ts
    // allocate a single vector instance
    const vector = new Vec2(0, 0)
      .add({x: 1, y: 2})
      .multiplyBy(2)
    ```
- **explicit cloning.**  
    use `.clone()` to avoid mutating the original.  
    ```ts
    // modify a clone (not the original)
    const vector2 = vector
      .clone()
      .normalize()
    ```
- **static vs instance methods.**  
  many primitive methods are available as static methods or instance methods.  
  - *static:*
      ```ts
      const sum = Vec2.add(vectorA, vectorB, vectorC)
      ```
  - *instance:*
      ```ts
      const sum = vectorA.clone().add(vectorB, vectorC)
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

## 🍋 HELPERS
> handy utilities

### 🍏 Scalar
### 🍏 Circular

### 🍏 Angles
- **Radians**
- **Degrees**
- **Turns**
- **Arcseconds**

### 🍏 Randy
### 🍏 Noise
### 🍏 Spline

<br/>

## 🍋 SHAPES
> geometric concepts

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

### 🍏 HashMap
### 🍏 HashSet
### 🍏 ZenGrid

<br/>

## 🍋 PHYSICS
> functionality for doing basic physics

### 🍏 collide2d
### 🍏 collide3d
### 🍏 intersect2d
### 🍏 intersect3d

<br/>

## 👼 https://benevolent.games/
star this on github if you use it 👍

