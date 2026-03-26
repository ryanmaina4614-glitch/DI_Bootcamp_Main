
# 🌟 EXERCISE 1: Currency Class

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __repr__(self):
        return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other

        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return self.amount + other.amount

        raise TypeError("Unsupported type")

    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other

        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount

        else:
            raise TypeError("Unsupported type")

        return self


# Test Exercise 1
print("=== Exercise 1 ===")
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)

print(c1)
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)

c1 += 5
print(c1)

c1 += c2
print(c1)

# print(c1 + c3)  # Uncomment to test error



# 🌟 EXERCISE 2: Import Simulation
# (Function defined in same file)


def add_numbers(a, b):
    print(a + b)

print("\n=== Exercise 2 ===")
add_numbers(5, 7)



# 🌟 EXERCISE 3: Random String


import string
import random

def random_string():
    letters = string.ascii_letters
    result = ""

    for _ in range(5):
        result += random.choice(letters)

    return result

print("\n=== Exercise 3 ===")
print(random_string())



# 🌟 EXERCISE 4: Current Date


from datetime import datetime

def current_date():
    return datetime.now()

print("\n=== Exercise 4 ===")
print(current_date())


# 🌟 EXERCISE 5: Time Until January 1st


def time_until_new_year():
    now = datetime.now()
    next_year = datetime(now.year + 1, 1, 1)
    return next_year - now

print("\n=== Exercise 5 ===")
print(time_until_new_year())


# 🌟 EXERCISE 6: Minutes Lived


def minutes_lived(birthdate_str):
    birthdate = datetime.strptime(birthdate_str, "%Y-%m-%d")
    now = datetime.now()
    difference = now - birthdate
    minutes = int(difference.total_seconds() / 60)
    return f"You have lived approximately {minutes} minutes."

print("\n=== Exercise 6 ===")
print(minutes_lived("2000-01-01"))



# 🌟 EXERCISE 7: Faker Users


from faker import Faker

fake = Faker()
users = []

def generate_users(n):
    for _ in range(n):
        user = {
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code()
        }
        users.append(user)

print("\n=== Exercise 7 ===")
generate_users(5)

for user in users:
    print(user)