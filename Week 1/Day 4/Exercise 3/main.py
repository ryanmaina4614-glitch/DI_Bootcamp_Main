
# 🌟 Count Character Occurrences


# Take input from user
text = input("Enter a string: ")
char = input("Enter a character: ")

# Count occurrences
count = 0
for c in text:
    if c == char:
        count += 1

# Print result
print(count)