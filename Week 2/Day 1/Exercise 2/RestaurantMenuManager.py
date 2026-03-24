
# 🌟 Exercise 1: Geometry (Circle)


import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * (self.radius ** 2)

    def definition(self):
        print("A circle is a shape consisting of all points in a plane that are at a given distance from a given point (the center).")


# Test Circle
circle1 = Circle(5)
print("=== Circle ===")
print(f"Radius: {circle1.radius}")
print(f"Perimeter: {circle1.perimeter():.2f}")
print(f"Area: {circle1.area():.2f}")
circle1.definition()



# 🌟 Exercise 2: Custom List Class

import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def reversed_list(self):
        return self.letters[::-1]

    def sorted_list(self):
        return sorted(self.letters)

    # BONUS
    def random_numbers(self):
        return [random.randint(0, 100) for _ in range(len(self.letters))]


# Test MyList
my_list = MyList(['b', 'a', 'd', 'c'])

print("\n=== MyList ===")
print("Original:", my_list.letters)
print("Reversed:", my_list.reversed_list())
print("Sorted:", my_list.sorted_list())
print("Random Numbers:", my_list.random_numbers())



# 🌟 Exercise 3: Restaurant Menu Manager


class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]

    def add_item(self, name, price, spice, gluten):
        new_dish = {"name": name, "price": price, "spice": spice, "gluten": gluten}
        self.menu.append(new_dish)
        print(f"{name} added to menu.")

    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish["name"] == name:
                dish["price"] = price
                dish["spice"] = spice
                dish["gluten"] = gluten
                print(f"{name} updated.")
                return
        print(f"{name} not found in menu.")

    def remove_item(self, name):
        for dish in self.menu:
            if dish["name"] == name:
                self.menu.remove(dish)
                print(f"{name} removed.")
                print("Updated Menu:", self.menu)
                return
        print(f"{name} not found in menu.")


# Test MenuManager
manager = MenuManager()

print("\n=== Menu Manager ===")
print("Initial Menu:", manager.menu)

manager.add_item("Pizza", 20, "B", True)
manager.update_item("Salad", 20, "B", False)
manager.remove_item("Soup")
manager.remove_item("Sushi")  # Not in menu