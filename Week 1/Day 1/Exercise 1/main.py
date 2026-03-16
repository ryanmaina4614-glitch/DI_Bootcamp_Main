#Exercise 1 Hello world
print("Hello world\n" * 4)

#Exercise 2 Some math
print((99**3) * 8)

#Exercise 3 What is the output?
print(5 < 3)        # False
print(3 == 3)       # True
print(3 == "3")     # False
print("3" > "2")    # True
print("Hello" == "hello")  # False

#Exercise 4 My computer brand
computer_brand = "HP"
print("I have a", computer_brand, "computer.")

#Exercise 5 My info
name = "Ryan"
age = 20
shoe_size = 42

info = f"My name is {name}, I am {age} years old and my shoe size is {shoe_size}."
print(info)

#Exercise 6 A and B
a = 10
b = 5

if a > b: 
    print("Hello World")

#Exercise 7 Even or Odd
number = int(input("Enter a number: "))

if number % 2 == 0:
    print("Even number")
else:
    print("Odd number")

# Exercise 8 What's your name?
my_name = "Ryan"
user_name = input("What is your name? ")

if user_name == my_name:
    print("Wow! We have the same awesome name!")
else:
    print("Nice to meet you", user_name)

# Exercise 9 Height Check
height = int(input("Enter your height in cm: "))

if height > 145:
    print("You are tall enough to ride!")
else:
    print("Sorry, you need to grow some more to ride.")



