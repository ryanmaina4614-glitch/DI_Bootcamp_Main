
# 🌟 Exercise 1: When Will I Retire?


# Hard-coded current date
CURRENT_YEAR = 2026
CURRENT_MONTH = 3
CURRENT_DAY = 19

def get_age(year, month, day):
    """Calculate age based on birth date"""
    age = CURRENT_YEAR - year

    # Adjust if birthday hasn't happened yet this year
    if (month, day) > (CURRENT_MONTH, CURRENT_DAY):
        age -= 1

    return age


def can_retire(gender, date_of_birth):
    """Determine if a person can retire"""
    year, month, day = map(int, date_of_birth.split("/"))
    age = get_age(year, month, day)

    if gender.lower() == "m":
        return age >= 67
    elif gender.lower() == "f":
        return age >= 62
    else:
        return False


# ---- User interaction ----
print("=== Retirement Checker ===")
gender = input("Enter your gender (m/f): ")
dob = input("Enter your birth date (yyyy/mm/dd): ")

if can_retire(gender, dob):
    print("You can retire! 🎉")
else:
    print("You cannot retire yet.")

# 🌟 Exercise 2: Sum (X + XX + XXX + XXXX)


def special_sum(x):
    """Return X + XX + XXX + XXXX"""
    x_str = str(x)

    term1 = int(x_str)
    term2 = int(x_str * 2)
    term3 = int(x_str * 3)
    term4 = int(x_str * 4)

    return term1 + term2 + term3 + term4


# Example
print("\n=== Special Sum ===")
print("Result for X=3:", special_sum(3))  # Expected: 3702


# 🌟 Exercise 3: Double Dice


import random

def throw_dice():
    """Simulate rolling one dice"""
    return random.randint(1, 6)


def throw_until_doubles():
    """Keep rolling two dice until both are equal"""
    count = 0

    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        count += 1

        if dice1 == dice2:
            break

    return count


def main():
    """Run 100 simulations and calculate stats"""
    results = []

    # Run 100 times
    for _ in range(100):
        throws = throw_until_doubles()
        results.append(throws)

    total_throws = sum(results)
    average = total_throws / len(results)

    print("\n=== Double Dice Results ===")
    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average:.2f}")


# Run the simulation
main()