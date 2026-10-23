# Polygon Area Calculator

A lightweight Python object-oriented program that models and calculates properties for 2D polygons (`Rectangle` and `Square`), featuring a simple interactive web visualizer.

## Features

- **Inheritance & Polymorphism:** `Square` inherits from `Rectangle` and synchronizes dimension changes via overridden methods.
- **Geometric Calculations:**
  - `get_area()`: Calculates $width \times height$.
  - `get_perimeter()`: Calculates $2 \times (width + height)$.
  - `get_diagonal()`: Calculates $\sqrt{width^2 + height^2}$.
- **Fitting Shapes:** `get_amount_inside(shape)` computes how many times another shape fits inside without rotations.
- **ASCII Art Output:** `get_picture()` visualizes shapes with asterisks (`*`) up to 50x50 dimensions.

---

## Python Usage

```python
from shape_calculator import Rectangle, Square

rect = Rectangle(10, 5)
print(rect.get_area())        # 50
rect.set_height(3)
print(rect.get_perimeter())   # 26
print(rect)                   # Rectangle(width=10, height=3)

sq = Square(4)
print(sq.get_area())          # 16
print(sq.get_diagonal())      # ~5.65
print(rect.get_amount_inside(sq))
```

---

## Web Demo

Simply open `index.html` in any browser to interact with the shape dimensions, view computed metrics, and see real-time ASCII previews.