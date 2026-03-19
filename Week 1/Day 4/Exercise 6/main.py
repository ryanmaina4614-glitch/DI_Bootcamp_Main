MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%'''

# Step 1: Convert to 2D list
matrix = [list(row) for row in MATRIX_STR.strip().split('\n')]

# Step 2: Read column-wise
rows = len(matrix)
cols = len(matrix[0])

decoded = ""

for col in range(cols):
    for row in range(rows):
        decoded += matrix[row][col]

# Step 3 & 4: Build final message manually
result = ""
prev_was_letter = False

for char in decoded:
    if char.isalpha():
        result += char
        prev_was_letter = True
    else:
        # If it's not a letter, we only add ONE space
        # and only if the last added character was a letter
        if prev_was_letter:
            result += " "
            prev_was_letter = False

# Remove trailing space if it exists
result = result.strip()

# Step 5: Print result
print(result)
