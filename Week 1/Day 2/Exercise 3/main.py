
# Exercise 1: Formula

import math

print("Exercise 1:")

C = 50
H = 30

user_input = input("Enter comma-separated values: ")
values = user_input.split(',')

results = []

for D in values:
    D = int(D)
    Q = math.sqrt((2 * C * D) / H)
    results.append(str(round(Q)))

print(",".join(results))



# Exercise 2: List of integers

print("\nExercise 2:")

numbers = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]

# a. Print list
print("List:", numbers)

# b. Sorted descending
print("Descending:", sorted(numbers, reverse=True))

# c. Sum
print("Sum:", sum(numbers))

# 3. First and last
print("First & Last:", [numbers[0], numbers[-1]])

# 4. Greater than 50
print("Greater than 50:", [n for n in numbers if n > 50])

# 5. Smaller than 10
print("Smaller than 10:", [n for n in numbers if n < 10])

# 6. Squared
print("Squared:", [n**2 for n in numbers])

# 7. No duplicates
unique_numbers = list(set(numbers))
print("Unique:", unique_numbers)
print("Count of unique:", len(unique_numbers))

# 8. Average
average = sum(numbers) / len(numbers)
print("Average:", average)

# 9. Largest
print("Largest:", max(numbers))

# 10. Smallest
print("Smallest:", min(numbers))


# 11. Bonus (no built-ins)
total = 0
largest = numbers[0]
smallest = numbers[0]

for n in numbers:
    total += n
    if n > largest:
        largest = n
    if n < smallest:
        smallest = n

avg = total / len(numbers)

print("\nBonus (manual):")
print("Sum:", total)
print("Average:", avg)
print("Largest:", largest)
print("Smallest:", smallest)


# 12. Bonus: user input
print("\nEnter 10 numbers between -100 and 100:")
user_numbers = []

for i in range(10):
    num = int(input(f"Number {i+1}: "))
    user_numbers.append(num)

print("Your numbers:", user_numbers)


# 13 & 14. Bonus: random numbers
import random

random_count = random.randint(50, 100)
random_numbers = [random.randint(-100, 100) for _ in range(random_count)]

print("\nRandom numbers generated:", random_count)
print(random_numbers)



# Exercise 3: Paragraph analysis

print("\nExercise 3:")

paragraph = """Python is a powerful programming language. It is widely used in web development, data science, and automation. Learning Python can open many opportunities."""

# Characters
print("Characters:", len(paragraph))

# Sentences
sentences = paragraph.split('.')
sentences = [s for s in sentences if s.strip() != ""]
print("Sentences:", len(sentences))

# Words
words = paragraph.split()
print("Words:", len(words))

# Unique words
unique_words = set(words)
print("Unique words:", len(unique_words))

# Non-whitespace characters
non_space = len(paragraph.replace(" ", ""))
print("Non-whitespace characters:", non_space)

# Avg words per sentence
avg_words = len(words) / len(sentences)
print("Avg words per sentence:", avg_words)

# Non-unique words
non_unique = len(words) - len(unique_words)
print("Non-unique words:", non_unique)



# Exercise 4: Word frequency

print("\nExercise 4:")

text = input("Enter a sentence: ")

words = text.split()
frequency = {}

for word in words:
    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1

for word in sorted(frequency):
    print(f"{word}:{frequency[word]}")