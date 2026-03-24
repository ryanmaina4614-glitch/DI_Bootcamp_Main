
# 🌟 Old MacDonald's Farm


class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    # Step 3 + Bonus (kwargs version)
    def add_animal(self, animal_type=None, count=1, **kwargs):
        # Handle single animal
        if animal_type:
            if animal_type in self.animals:
                self.animals[animal_type] += count
            else:
                self.animals[animal_type] = count

        # Handle multiple animals (**kwargs)
        for animal, qty in kwargs.items():
            if animal in self.animals:
                self.animals[animal] += qty
            else:
                self.animals[animal] = qty

    # Step 4: Get full info
    def get_info(self):
        output = f"{self.name}'s farm\n\n"

        for animal, count in self.animals.items():
            output += f"{animal:<10}: {count}\n"

        output += "\n\tE-I-E-I-0!"
        return output

    # Step 6: Get sorted animal types
    def get_animal_types(self):
        return sorted(self.animals.keys())

    # Step 7: Short info
    def get_short_info(self):
        animal_list = []

        for animal in self.get_animal_types():
            if self.animals[animal] > 1:
                animal_list.append(animal + "s")
            else:
                animal_list.append(animal)

        # Format sentence nicely
        if len(animal_list) > 1:
            animals_str = ", ".join(animal_list[:-1]) + " and " + animal_list[-1]
        else:
            animals_str = animal_list[0]

        return f"{self.name}'s farm has {animals_str}."



# 🧪 Testing the Farm Class


macdonald = Farm("McDonald")

# Add animals (normal way)
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

# Add animals (BONUS kwargs way)
macdonald.add_animal(chicken=4, duck=2)

print("=== FULL FARM INFO ===")
print(macdonald.get_info())

print("\n=== SORTED ANIMAL TYPES ===")
print(macdonald.get_animal_types())

print("\n=== SHORT INFO ===")
print(macdonald.get_short_info())