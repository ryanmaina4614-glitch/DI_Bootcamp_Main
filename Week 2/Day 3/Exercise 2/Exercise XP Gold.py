
# 🌟 EXERCISE 1: Upcoming Holiday


from datetime import datetime
import holiday

def upcoming_holiday():
    today = datetime.now()
    current_year = today.year

    # Use country holidays (example: Kenya)
    kenya_holidays = holiday.country_holidays("KE", years=current_year)

    next_holiday = None
    min_days = float("inf")

    for date, name in kenya_holidays.items():
        diff = (date - today.date()).days
        if 0 <= diff < min_days:
            min_days = diff
            next_holiday = (date, name)

    print(f"Today's date: {today}")
    
    if next_holiday:
        print(f"The next holiday is {next_holiday[1]} in {min_days} days.")
    else:
        print("No upcoming holidays found.")



# 🌟 EXERCISE 2: Age on Planets


def age_on_planets(seconds):
    earth_year = 31557600

    planets = {
        "Earth": 1,
        "Mercury": 0.2408467,
        "Venus": 0.61519726,
        "Mars": 1.8808158,
        "Jupiter": 11.862615,
        "Saturn": 29.447498,
        "Uranus": 84.016846,
        "Neptune": 164.79132
    }

    for planet, factor in planets.items():
        age = seconds / (earth_year * factor)
        print(f"{planet}: {age:.2f} years")


# 🌟 EXERCISE 3: Extract Numbers (Regex)


import re

def return_numbers(string):
    numbers = re.findall(r'\d', string)
    return "".join(numbers)



# 🌟 EXERCISE 4: Name Validation (Regex)


def validate_name():
    name = input("Enter your full name (e.g. John Doe): ")

    pattern = r'^[A-Z][a-z]+ [A-Z][a-z]+$'

    if re.match(pattern, name):
        print("Valid name ✅")
    else:
        print("Invalid name ❌")


# 🌟 EXERCISE 5: Password Generator


import random
import string

def generate_password(length):
    lower = string.ascii_lowercase
    upper = string.ascii_uppercase
    digits = string.digits
    special = "!@#$%^&_"

    # Ensure at least one of each
    password = [
        random.choice(lower),
        random.choice(upper),
        random.choice(digits),
        random.choice(special)
    ]

    all_chars = lower + upper + digits + special

    for _ in range(length - 4):
        password.append(random.choice(all_chars))

    random.shuffle(password)
    return "".join(password)


def is_valid_password(password):
    return (
        any(c.islower() for c in password) and
        any(c.isupper() for c in password) and
        any(c.isdigit() for c in password) and
        any(c in "!@#$%^&_" for c in password)
    )


def password_program():
    while True:
        try:
            length = int(input("Enter password length (6-30): "))
            if 6 <= length <= 30:
                break
            else:
                print("Invalid range.")
        except:
            print("Enter a valid number.")

    password = generate_password(length)
    print(f"Your password: {password}")
    print("⚠️ Keep it safe!")

    # Test 100 times
    print("\nRunning tests...")
    for _ in range(100):
        test_pass = generate_password(length)
        assert len(test_pass) == length
        assert is_valid_password(test_pass)

    print("All tests passed ✅")


# ▶️ RUN ALL EXERCISES

print("\n=== Exercise 1 ===")
upcoming_holiday()

print("\n=== Exercise 2 ===")
age_on_planets(1000000000)

print("\n=== Exercise 3 ===")
print(return_numbers('k5k3q2g5z6x9bn'))

print("\n=== Exercise 4 ===")
# validate_name()   # Uncomment to test user input

print("\n=== Exercise 5 ===")
# password_program()   # Uncomment to run