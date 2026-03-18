
# 🌟 Challenge 1: Letter Index Dictionary


# Ask user for input
word = input("Enter a word: ")

# Dictionary to store letters and their indices
letter_indices = {}

# Iterate through each character and store indices
for index, char in enumerate(word):
    if char in letter_indices:
        letter_indices[char].append(index)
    else:
        letter_indices[char] = [index]

print("\nLetter Index Dictionary:")
print(letter_indices)


# 🌟 Challenge 2: Affordable Items


# Example data
items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
wallet = "$100"

# -------------------------------------
# Clean wallet amount
# -------------------------------------
wallet_amount = int(wallet.replace("$", "").replace(",", ""))

# List to store items that can be bought
basket = []

# Iterate through items
for item, price_str in items_purchase.items():
    price = int(price_str.replace("$", "").replace(",", ""))
    if wallet_amount >= price:
        basket.append(item)
        wallet_amount -= price  # Update wallet

# Print results
if basket:
    print("\nAffordable items you can buy (alphabetical order):")
    print(sorted(basket))
else:
    print("\nAffordable items you can buy:")
    print("Nothing")