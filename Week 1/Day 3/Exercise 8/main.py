
# 🌟 Caesar Cipher Program


import string

# Function to encrypt a message
def encrypt(message, shift):
    result = ""
    for char in message:
        if char.isalpha():  # Only encrypt letters
            # Preserve uppercase and lowercase
            if char.isupper():
                result += chr((ord(char) - 65 + shift) % 26 + 65)
            else:
                result += chr((ord(char) - 97 + shift) % 26 + 97)
        else:
            result += char  # Non-letters stay the same
    return result

# Function to decrypt a message
def decrypt(message, shift):
    return encrypt(message, -shift)  # Decrypting is just shifting backwards

# -------------------------------------
# User Interface
# -------------------------------------
print("Welcome to the Caesar Cipher Program!")

# Ask for action
action = input("Do you want to encrypt or decrypt? (type 'encrypt' or 'decrypt'): ").lower()

# Ask for message and shift
message = input("Enter your message: ")
while True:
    try:
        shift = int(input("Enter shift number (positive integer): "))
        break
    except ValueError:
        print("Please enter a valid integer.")

# Perform action
if action == "encrypt":
    result = encrypt(message, shift)
    print("\nEncrypted message:", result)
elif action == "decrypt":
    result = decrypt(message, shift)
    print("\nDecrypted message:", result)
else:
    print("Invalid action! Please type 'encrypt' or 'decrypt'.")