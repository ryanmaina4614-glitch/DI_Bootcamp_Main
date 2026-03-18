
# 🌟 Exercise 1: Cars


# Original string of car manufacturers
cars_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# -------------------------------------
# Convert string to list
# -------------------------------------
car_list = [car.strip() for car in cars_str.split(",")]
print("Original list of cars:", car_list)

# Number of manufacturers
print(f"Number of manufacturers: {len(car_list)}")

# List in reverse alphabetical order (Z-A)
cars_desc = sorted(car_list, reverse=True)
print("Manufacturers in reverse alphabetical order:", cars_desc)

# -------------------------------------
# Count manufacturers with 'o'
# -------------------------------------
count_o = sum(1 for car in car_list if 'o' in car.lower())
print(f"Number of manufacturers with letter 'o': {count_o}")

# Count manufacturers without 'i'
count_no_i = sum(1 for car in car_list if 'i' not in car.lower())
print(f"Number of manufacturers without letter 'i': {count_no_i}")

# -------------------------------------
# Bonus 1: Remove duplicates
# -------------------------------------
cars_with_duplicates = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
cars_unique = list(dict.fromkeys(cars_with_duplicates))  # preserves order
print("\nUnique manufacturers:", ", ".join(cars_unique))
print(f"Number of unique manufacturers: {len(cars_unique)}")

# -------------------------------------
# Bonus 2: Reverse letters of each manufacturer, sort ascending
# -------------------------------------
cars_reversed_sorted = sorted([car[::-1] for car in cars_unique])
print("\nManufacturers with letters reversed and sorted A-Z:", cars_reversed_sorted)