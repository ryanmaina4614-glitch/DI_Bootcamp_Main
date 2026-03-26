
# 🌟 CIRCLE CLASS (ALL-IN-ONE FILE)


import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self._radius = radius
        elif diameter is not None:
            self._radius = diameter / 2
        else:
            raise ValueError("You must provide either radius or diameter")

    #  Radius property
    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        self._radius = value

    #  Diameter property
    @property
    def diameter(self):
        return self._radius * 2

    @diameter.setter
    def diameter(self, value):
        self._radius = value / 2

    #  Area
    def area(self):
        return math.pi * (self._radius ** 2)

    #  Representation
    def __repr__(self):
        return f"Circle(radius={self._radius:.2f})"

    # Add two circles
    def __add__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only add Circle to Circle")
        return Circle(radius=self.radius + other.radius)

    #  Greater than
    def __gt__(self, other):
        return self.radius > other.radius

    #  Equal
    def __eq__(self, other):
        return self.radius == other.radius

    #  Less than (for sorting)
    def __lt__(self, other):
        return self.radius < other.radius



#  TESTING SECTION


def test_circles():
    print("=== Circle Tests ===")

    # Create circles
    c1 = Circle(radius=5)
    c2 = Circle(diameter=10)  # same as radius 5
    c3 = Circle(radius=7)
    c4 = Circle(radius=3)

    # Print circles
    print("\nCircles:")
    print(c1)
    print(c2)
    print(c3)
    print(c4)

    # Area
    print("\nAreas:")
    print(f"{c1} → Area = {c1.area():.2f}")
    print(f"{c3} → Area = {c3.area():.2f}")

    # Addition
    print("\nAddition:")
    new_circle = c1 + c3
    print(f"{c1} + {c3} = {new_circle}")

    # Comparisons
    print("\nComparisons:")
    print(f"{c1} > {c3} → {c1 > c3}")
    print(f"{c1} == {c2} → {c1 == c2}")
    print(f"{c4} < {c1} → {c4 < c1}")

    # Sorting
    circles = [c1, c2, c3, c4, new_circle]
    circles.sort()

    print("\nSorted Circles:")
    for c in circles:
        print(c)

    return circles



#  BONUS: TURTLE DRAWING


def draw_circles(circles):
    try:
        import turtle

        t = turtle.Turtle()
        t.speed(1)

        for c in circles:
            t.circle(c.radius * 10)  # scale up for visibility
            t.penup()
            t.forward(50)
            t.pendown()

        turtle.done()

    except ImportError:
        print("Turtle module not available.")



#  RUN PROGRAM


if __name__ == "__main__":
    circles = test_circles()

    # Uncomment to draw circles visually
    # draw_circles(circles)