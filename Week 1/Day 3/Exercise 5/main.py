# Starter code
REverseinp = input("Enter a sentence: ")

# Split the sentence into words
words = REverseinp.split()

# Reverse the list of words
reversed_words = words[::-1]

# Join the reversed words into a sentence
reversed = " ".join(reversed_words)

# Print the result
print(reversed)