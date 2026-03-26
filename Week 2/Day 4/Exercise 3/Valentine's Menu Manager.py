import json
import re

class ValentineMenuManager:
    def __init__(self, filename='restaurant_menu.json'):
        self.filename = filename
        try:
            with open(self.filename, 'r') as file:
                self.data = json.load(file)
        except (FileNotFoundError, json.JSONDecodeError):
            self.data = {"items": [], "valentine_items": []}
        
        if "valentine_items" not in self.data:
            self.data["valentine_items"] = []

    def validate_valentine_item(self, name, price):
        # Rule 1: Starts with 'V', words capitalized (except 'of', 'and', 'the'), no numbers
        # Regex: Starts with V, then allows words starting with caps or specific lowercase connectors
        name_pattern = r"^V[a-z]*(\s(of|and|the|[A-Z][a-z]*))*\s?$"
        # Rule 2: At least two 'e's
        has_two_ees = len(re.findall(r'e', name, re.IGNORECASE)) >= 2
        # Rule 3: No numbers in name
        no_numbers = not bool(re.search(r'\d', name))
        # Rule 4: Price format XX,14
        price_pattern = r"^\d{2},14$"

        if re.match(name_pattern, name) and has_two_ees and no_numbers and re.match(price_pattern, str(price)):
            return True
        return False

    def add_valentine_item(self, name, price):
        if self.validate_valentine_item(name, price):
            self.data["valentine_items"].append({"name": name, "price": price})
            self.save()
            return True
        return False

    def save(self):
        with open(self.filename, 'w') as file:
            json.dump(self.data, file, indent=4)

    def display_heart_menu(self):
        heart = [
            "  *** *** ",
            " ***** ***** ",
            "*************",
            " *********** ",
            "  ********* ",
            "   ******* ",
            "    ***** ",
            "     *** ",
            "      * "
        ]
        for line in heart:
            print(line.center(40))
        print("\n" + " VALENTINE'S SPECIALS ".center(40, "-"))
        for item in self.data["valentine_items"]:
            print(f"{item['name']} .... ${item['price']}".center(40))

# Quick usage for Exercise 1:
# mgr = ValentineMenuManager()
# mgr.add_valentine_item("Vegetable Soup of Valentines-day", "30,14")
# mgr.display_heart_menu()