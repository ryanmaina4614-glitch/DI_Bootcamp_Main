import json
import requests


# EXERCISE 1: RESTAURANT MENU MANAGER

class MenuManager:
    """Handles the data logic for the restaurant menu."""
    def __init__(self, filename='restaurant_menu.json'):
        self.filename = filename
        try:
            with open(self.filename, 'r') as file:
                self.menu = json.load(file)
        except (FileNotFoundError, json.JSONDecodeError):
            # Default menu if file doesn't exist
            self.menu = {"items": []}

    def add_item(self, name, price):
        self.menu["items"].append({"name": name, "price": price})

    def remove_item(self, name):
        for index, item in enumerate(self.menu["items"]):
            if item["name"].lower() == name.lower():
                del self.menu["items"][index]
                return True
        return False

    def save_to_file(self):
        with open(self.filename, 'w') as file:
            json.dump(self.menu, file, indent=4)

def show_user_menu():
    """Handles the UI and user interaction."""
    manager = MenuManager()
    
    while True:
        print("\n--- Restaurant Manager ---")
        print("v: View Menu")
        print("a: Add Item")
        print("d: Delete Item")
        print("x: Save & Exit")
        
        choice = input("Select an option: ").lower()

        if choice == 'v':
            print("\n--- Current Menu ---")
            for item in manager.menu["items"]:
                print(f"- {item['name']}: ${item['price']}")
        
        elif choice == 'a':
            name = input("Item name: ")
            try:
                price = float(input("Item price: "))
                manager.add_item(name, price)
                print("Item added successfully!")
            except ValueError:
                print("Invalid price.")

        elif choice == 'd':
            name = input("Item to delete: ")
            if manager.remove_item(name):
                print("Item deleted successfully.")
            else:
                print("Error: Item not found.")

        elif choice == 'x':
            manager.save_to_file()
            print("Menu saved to JSON. Exiting...")
            break

# EXERCISE 2 & 3: GIPHY API


API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

def giphy_search_exercise():
    """Exercise 2: Fetch specific 'hilarious' gifs."""
    query = "hilarious"
    url = f"https://api.giphy.com/v1/gifs/search?api_key={API_KEY}&q={query}&rating=g&limit=10"
    
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()['data']
        # Filter: Height > 100
        filtered = [g for g in data if int(g['images']['original']['height']) > 100]
        print(f"\nFound {len(filtered)} hilarious GIFs taller than 100px.")
        return filtered

def giphy_user_search():
    """Exercise 3: User-defined search with trending fallback."""
    term = input("\nSearch Giphy for: ")
    url = f"https://api.giphy.com/v1/gifs/search?api_key={API_KEY}&q={term}"
    
    data = requests.get(url).json().get('data', [])
    
    if not term.strip() or not data:
        print(f"No results for '{term}'. Showing trending instead:")
        url = f"https://api.giphy.com/v1/gifs/trending?api_key={API_KEY}"
        data = requests.get(url).json().get('data', [])

    for gif in data[:5]: # Showing top 5 for brevity
        print(f"GIF: {gif['title']} -> {gif['bitly_url']}")


# MAIN EXECUTION


if __name__ == "__main__":
    # Uncomment the part you want to test:
    
    show_user_menu()        # Run Exercise 1
    # giphy_search_exercise() # Run Exercise 2
    # giphy_user_search()     # Run Exercise 3