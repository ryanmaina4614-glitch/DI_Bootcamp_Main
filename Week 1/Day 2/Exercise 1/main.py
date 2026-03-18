#Exercise 1: Sets

# Create a set
my_fav_numbers = {1, 3, 5, 7}

# Add two numbers
my_fav_numbers.add(9)
my_fav_numbers.add(11)

# Remove the last number added (sets are unordered, so just remove one)
my_fav_numbers.remove(11)

# Friend's set
friend_fav_numbers = {2, 4, 6, 8}

# Union of sets
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)



#Exercise 2: 
my_tuple = (1, 2, 3)

# This will cause an error:
# my_tuple.append(4)

# Correct way: create a new tuple
my_tuple = my_tuple + (4, 5)

print(my_tuple)


#Exercise 3: 
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Remove items
basket.remove("Banana")
basket.remove("Blueberries")

# Add items
basket.append("Kiwi")
basket.insert(0, "Apples")

# Count Apples
print(basket.count("Apples"))

# Empty the list
basket.clear()

# Final state
print(basket)


#Exercise 4: 
numbers = []

for i in range(1, 6):
    numbers.append(i)        # integer
    numbers.append(i + 0.5)  # float

print(numbers)

#Exercise 5: 

# 1 to 20
for i in range(1, 21):
    print(i)

# Even index numbers
for i in range(1, 21):
    if i % 2 == 0:
        print(i)


# Exercise 6:
while True:
    name = input("Enter your name: ")

    if not name.isdigit() and len(name) >= 3:
        print("Thank you")
        break
    else:
        print("Invalid name, try again.")

# Exercise 7:
fruits = input("Enter your favorite fruits (space-separated): ").split()

fruit = input("Enter a fruit: ")

if fruit in fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")


# Exercise 8:
toppings = []
total = 10  # base price

while True:
    topping = input("Enter a topping (or 'quit'): ")

    if topping == 'quit':
        break

    print(f"Adding {topping} to your pizza.")
    toppings.append(topping)
    total += 2.5

print("Toppings:", toppings)
print("Total cost: $", total)

# Exercise 9: 

total_cost = 0
family = [2, 5, 13, 25]  # example ages

for age in family:
    if age < 3:
        cost = 0
    elif age <= 12:
        cost = 10
    else:
        cost = 15

    total_cost += cost

print("Total cost:", total_cost)

# Bonus
group = [15, 17, 20, 22, 18]

allowed = []

for age in group:
    if 16 <= age <= 21:
        allowed.append(age)

print("Allowed viewers:", allowed)