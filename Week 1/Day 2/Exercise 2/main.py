
# Exercise 1: Concatenate lists

list1 = [1, 2, 3]
list2 = [4, 5, 6]

list1.extend(list2)
print("Exercise 1:", list1)



# Exercise 2: Range of numbers

print("\nExercise 2:")
for num in range(1500, 2501):
    if num % 5 == 0 and num % 7 == 0:
        print(num)

# Exercise 3: Check the index

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("\nExercise 3 - Enter your name: ")

if user_name in names:
    print("Index:", names.index(user_name))
else:
    print("Name not found.")


# Exercise 4: Greatest Number

print("\nExercise 4:")
num1 = int(input("Input the 1st number: "))
num2 = int(input("Input the 2nd number: "))
num3 = int(input("Input the 3rd number: "))

print("The greatest number is:", max(num1, num2, num3))



# Exercise 5: The Alphabet

import string

print("\nExercise 5:")
alphabet = string.ascii_lowercase
vowels = "aeiou"

for letter in alphabet:
    if letter in vowels:
        print(letter, "is a vowel")
    else:
        print(letter, "is a consonant")



# Exercise 6: Words and letters

print("\nExercise 6:")
words = []

for i in range(7):
    word = input(f"Enter word {i+1}: ")
    words.append(word)

letter = input("Enter a single character: ")

for word in words:
    if letter in word:
        print(f"{word}: index {word.index(letter)}")
    else:
        print(f"{word}: '{letter}' not found")



# Exercise 7: Min, Max, Sum

print("\nExercise 7:")
numbers = list(range(1, 1000001))

print("Min:", min(numbers))
print("Max:", max(numbers))
print("Sum:", sum(numbers))


# Exercise 8: List and Tuple

print("\nExercise 8:")
user_input = input("Enter numbers separated by commas: ")

numbers_list = user_input.split(',')
numbers_tuple = tuple(numbers_list)

print(numbers_list)
print(numbers_tuple)



# Exercise 9: Random number

import random

print("\nExercise 9:")
wins = 0
losses = 0

while True:
    user_input = input("Enter a number from 1 to 9 (or 'q' to quit): ")

    if user_input.lower() == 'q':
        break

    user_guess = int(user_input)
    random_number = random.randint(1, 9)

    if user_guess == random_number:
        print("Winner!")
        wins += 1
    else:
        print(f"Better luck next time. Number was {random_number}")
        losses += 1

print("\nGame Over")
print("Wins:", wins)
print("Losses:", losses)