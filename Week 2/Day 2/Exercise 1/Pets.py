
# 🌟 EXERCISE 1: PETS


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Siamese(Cat):
    pass


# Create cat instances
cat1 = Bengal("Leo", 3)
cat2 = Chartreux("Milo", 2)
cat3 = Siamese("Luna", 1)

all_cats = [cat1, cat2, cat3]

# Pets instance
sara_pets = Pets(all_cats)

print("\n--- Exercise 1 Output ---")
sara_pets.walk()


# 🌟 EXERCISE 2: DOGS


class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} wins the fight"
        elif self_power < other_power:
            return f"{other_dog.name} wins the fight"
        else:
            return "It's a tie"


# Dog instances
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 25)
dog3 = Dog("Max", 4, 18)

print("\n--- Exercise 2 Output ---")
print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))



# 🌟 EXERCISE 3: PETDOG (INHERITANCE)


import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = [self.name]
        for dog in args:
            names.append(dog.name)
        print(f"{', '.join(names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            print(f"{self.name} {random.choice(tricks)}")


# PetDog instances
pet1 = PetDog("Fido", 2, 10)
pet2 = PetDog("Buddy", 3, 15)

print("\n--- Exercise 3 Output ---")
pet1.train()
pet1.play(pet2)
pet1.do_a_trick()


# 🌟 EXERCISE 4: FAMILY & PERSON


class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        person = Person(first_name, age)
        person.last_name = self.last_name
        self.members.append(person)

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print("Person not found")

    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        for person in self.members:
            print(f"{person.first_name}, Age: {person.age}")


# Family test
my_family = Family("Smith")

my_family.born("John", 40)
my_family.born("Jane", 38)
my_family.born("Chris", 17)

print("\n--- Exercise 4 Output ---")
my_family.family_presentation()
my_family.check_majority("Chris")
my_family.check_majority("John")