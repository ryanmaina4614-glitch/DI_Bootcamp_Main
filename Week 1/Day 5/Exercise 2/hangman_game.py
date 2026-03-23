import random

wordslist = [
    'correction', 'childish', 'beach', 'python',
    'assertive', 'interference', 'complete',
    'share', 'credit card', 'rush', 'south'
]

word = random.choice(wordslist).lower()

# Create display (replace letters with *)
display = []
for char in word:
    if char == " ":
        display.append(" ")  # keep spaces visible
    else:
        display.append("*")

guessed_letters = []
wrong_guesses = 0
max_wrong = 6

body_parts = [
    "Head",
    "Body",
    "Left Arm",
    "Right Arm",
    "Left Leg",
    "Right Leg"
]

print("🎮 Welcome to Hangman!")
print("Word:", "".join(display))

while wrong_guesses < max_wrong and "*" in display:
    guess = input("\nGuess a letter: ").lower()

    # Check if already guessed
    if guess in guessed_letters:
        print("⚠️ You already guessed that letter!")
        continue

    guessed_letters.append(guess)

    # If guess is correct
    if guess in word:
        print("✅ Good guess!")

        for i in range(len(word)):
            if word[i] == guess:
                display[i] = guess

    else:
        print("❌ Wrong guess!")
        print("Added:", body_parts[wrong_guesses])
        wrong_guesses += 1

    print("Word:", "".join(display))
    print("Guessed letters:", guessed_letters)
    print(f"Remaining lives: {max_wrong - wrong_guesses}")

# Game result
if "*" not in display:
    print("\n🎉 Congratulations! You won!")
    print("The word was:", word)
else:
    print("\n💀 Game Over!")
    print("The word was:", word)