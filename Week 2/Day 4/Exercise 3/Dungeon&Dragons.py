import random
import json

class Character:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.stats = {
            "Strength": self.roll_stat(),
            "Dexterity": self.roll_stat(),
            "Constitution": self.roll_stat(),
            "Intelligence": self.roll_stat(),
            "Wisdom": self.roll_stat(),
            "Charisma": self.roll_stat()
        }

    def roll_stat(self):
        """Rolls 4 six-sided dice, drops the lowest, returns the sum."""
        rolls = [random.randint(1, 6) for _ in range(4)]
        rolls.remove(min(rolls))
        return sum(rolls)

    def to_dict(self):
        return {
            "name": self.name,
            "age": self.age,
            "stats": self.stats
        }

class Game:
    def __init__(self):
        self.players = []

    def start(self):
        try:
            num_players = int(input("How many players are joining the quest? "))
            for i in range(num_players):
                print(f"\nCreating character for Player {i+1}:")
                name = input("Enter Name: ")
                age = input("Enter Age: ")
                self.players.append(Character(name, age))
            
            self.export_json()
            self.export_txt()
            print("\nCharacters saved to 'party.json' and 'party.txt'!")
        except ValueError:
            print("Please enter a valid number.")

    def export_json(self):
        data = [p.to_dict() for p in self.players]
        with open('party.json', 'w') as f:
            json.dump(data, f, indent=4)

    def export_txt(self):
        with open('party.txt', 'w') as f:
            f.write("=== DUNGEONS & DRAGONS PARTY ===\n\n")
            for p in self.players:
                f.write(f"NAME: {p.name} (Age: {p.age})\n")
                for stat, value in p.stats.items():
                    f.write(f" - {stat}: {value}\n")
                f.write("-" * 30 + "\n")

# To run the D&D Game:
# game = Game()
# game.start()