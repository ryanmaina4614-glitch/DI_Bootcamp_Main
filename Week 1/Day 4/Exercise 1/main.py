
# 🌟 Exercise 1: What Are You Learning?


def display_message():
    print("I am learning about functions in Python.")

display_message()


# 🌟 Exercise 2: What’s Your Favorite Book?


def favorite_book(title):
    print(f"One of my favorite books is {title}")

favorite_book("Alice in Wonderland")


# 🌟 Exercise 3: Some Geography


def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")

describe_city("Reykjavik", "Iceland")
describe_city("Paris")


# 🌟 Exercise 4: Random

import random

def compare_number(user_number):
    random_number = random.randint(1, 100)

    if user_number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")

compare_number(50)  # Change this number to test


# 🌟 Exercise 5: Personalized Shirts


def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

# Calls
make_shirt()
make_shirt(size="medium")
make_shirt(size="small", text="Custom message")
make_shirt(text="Hello!", size="small")  # Keyword arguments



# 🌟 Exercise 6: Magicians


magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(names):
    for name in names:
        print(name)

def make_great(names):
    for i in range(len(names)):
        names[i] = names[i] + " the Great"

make_great(magician_names)
show_magicians(magician_names)

# 🌟 Exercise 7: Temperature Advice


def get_random_temp():
    return random.randint(-10, 40)

def main():
    temp = get_random_temp()
    print(f"\nThe temperature right now is {temp}°C.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 17 <= temp <= 23:
        print("Nice weather.")
    elif 24 <= temp <= 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")

main()


# ⭐ Bonus: Floating Temperature


def get_random_temp_float():
    return round(random.uniform(-10, 40), 2)

print("\nBonus Temperature:", get_random_temp_float())


# ⭐ Bonus: Season-Based Temperature


def get_temp_by_season(month):
    if month in [12, 1, 2]:  # Winter
        return random.randint(-10, 10)
    elif month in [3, 4, 5]:  # Spring
        return random.randint(5, 20)
    elif month in [6, 7, 8]:  # Summer
        return random.randint(20, 40)
    elif month in [9, 10, 11]:  # Autumn
        return random.randint(5, 25)

# Example usage
month = int(input("\nEnter a month (1-12): "))
season_temp = get_temp_by_season(month)
print(f"Seasonal temperature: {season_temp}°C")