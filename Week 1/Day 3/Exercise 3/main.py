
# 🌟 Exercise 1, 2 & 3: Birthday Look-up System


# Dictionary with birthdays
birthdays = {
    "Alice": "1995/06/15",
    "Bob": "1990/03/22",
    "Charlie": "2000/11/05",
    "Diana": "1998/01/30",
    "Eli": "1993/09/12"
}

print("=== Birthday Look-up System ===")

# -------------------------------------
# Exercise 3: Add a new birthday
# -------------------------------------
new_name = input("\nEnter a name to add: ")
new_birthday = input("Enter their birthday (YYYY/MM/DD): ")

birthdays[new_name] = new_birthday
print(f"{new_name}'s birthday has been added!")

# -------------------------------------
# Exercise 2: Show all names
# -------------------------------------
print("\nYou can look up the birthdays of the following people:")
for name in birthdays.keys():
    print("-", name)

# -------------------------------------
# Exercise 1 & 2: Look up a birthday
# -------------------------------------
search_name = input("\nEnter a name to look up: ")

if search_name in birthdays:
    print(f"{search_name}'s birthday is {birthdays[search_name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {search_name}")



# 🌟 Exercise 4: Fruit Shop


print("\n=== Fruit Shop ===")

# -------------------------------------
# Part 1: Print items and prices
# -------------------------------------
items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

print("\nAvailable items and prices:")
for item, price in items.items():
    print(f"The price of {item} is ${price}")

# -------------------------------------
# Part 2: Calculate total stock value
# -------------------------------------
items = {
    "banana": {"price": 4, "stock": 10},
    "apple": {"price": 2, "stock": 5},
    "orange": {"price": 1.5, "stock": 24},
    "pear": {"price": 3, "stock": 1}
}

total_value = 0

for item, details in items.items():
    item_total = details["price"] * details["stock"]
    total_value += item_total

print(f"\nTotal cost to buy everything in stock: ${total_value}")