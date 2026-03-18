
# 🌟 Exercise 1: Converting Lists into Dictionaries


# Using zip()
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result_zip = dict(zip(keys, values))
print("Exercise 1 (zip):", result_zip)

# Using dictionary comprehension
result_comp = {keys[i]: values[i] for i in range(len(keys))}
print("Exercise 1 (comprehension):", result_comp)



# 🌟 Exercise 2: Cinemax #2


family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0

print("\nExercise 2:")

for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    print(f"{name}'s ticket costs ${price}")
    total_cost += price

print(f"Total cost: ${total_cost}")



# ⭐ Bonus: User Input Version 


family_input = {}
total_cost_input = 0

while True:
    name = input("Enter family member name (or 'done' to finish): ")
    if name.lower() == 'done':
        break
    age = int(input(f"Enter {name}'s age: "))
    family_input[name] = age

for name, age in family_input.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    print(f"{name}'s ticket costs ${price}")
    total_cost_input += price

print(f"Total cost: ${total_cost_input}")



# 🌟 Exercise 3: Zara


brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

print("\nExercise 3:")

# Modify number of stores
brand["number_stores"] = 2

# Print sentence about clients
print("Zara's clients include:", ", ".join(brand["type_of_clothes"]))

# Add country_creation
brand["country_creation"] = "Spain"

# Add competitor
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# Delete creation_date
brand.pop("creation_date")

# Print last competitor
print("Last competitor:", brand["international_competitors"][-1])

# Print US colors
print("US colors:", brand["major_color"]["US"])

# Print number of keys
print("Number of keys:", len(brand))

# Print all keys
print("Keys:", list(brand.keys()))

# Bonus: Merge dictionaries
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)
print("Updated brand:", brand)


# 🌟 Exercise 4: Disney Characters


users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

print("\nExercise 4:")

# 1. Characters → Indices
dict1 = {user: index for index, user in enumerate(users)}
print("Characters to indices:", dict1)

# 2. Indices → Characters
dict2 = {index: user for index, user in enumerate(users)}
print("Indices to characters:", dict2)

# 3. Sorted Characters → Indices
sorted_users = sorted(users)
dict3 = {user: index for index, user in enumerate(sorted_users)}
print("Sorted characters to indices:", dict3)