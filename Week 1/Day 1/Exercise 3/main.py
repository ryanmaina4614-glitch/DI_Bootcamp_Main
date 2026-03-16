#Exercise 3

3 <= 3 < 9
3 == 3 == 3
bool(0)
bool(4 == 4) == bool("4" == "4")
bool(5 == "5")
bool(bool(None))
x = (1 == True)      # True
y = (1 == False)     # False
a = True + 4         # True is 1, so 1 + 4 = 5
b = False + 10       # False is 0, so 0 + 10 = 10
print("x is", x)   # x is True
print("y is", y)   # y is False
print("a:", a)     # a: 5
print("b:", b)     # b: 10

#Exercise 4

my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum."""

# Single line to count characters
print(len(my_text))


#Exercise 5
longest_sentence = ""

while True:
    sentence = input("Enter your sentence without the letter 'A': ")
    
    if "A" in sentence.upper():  # Check for 'A' or 'a'
        print("Oops! Your sentence contains 'A'. Try again.")
        continue

    if len(sentence) > len(longest_sentence):
        longest_sentence = sentence
        print("Congratulations! This is the new longest sentence!")
    
    print("Current longest sentence:", longest_sentence)