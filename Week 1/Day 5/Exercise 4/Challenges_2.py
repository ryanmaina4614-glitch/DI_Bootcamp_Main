
# EXERCISE 1: PATTERNS


print("Pattern 1:")
#   *
#  ***
# *****
for i in range(1, 4):
    spaces = 3 - i
    stars = 2 * i - 1
    print(" " * spaces + "*" * stars)


print("\nPattern 2:")
#     *
#    **
#   ***
#  ****
# *****
for i in range(1, 6):
    spaces = 5 - i
    stars = i
    print(" " * spaces + "*" * stars)


print("\nPattern 3:")
# *
# **
# ***
# ****
# *****
# *****
#  ****
#   ***
#    **
#     *

# Increasing part
for i in range(1, 6):
    print("*" * i)

# Decreasing part
for i in range(5, 0, -1):
    spaces = 5 - i
    print(" " * spaces + "*" * i)



# EXERCISE 2: CODE ANALYSIS


print("\nExercise 2: Selection Sort Process")

my_list = [2, 24, 12, 354, 233]  # Initial list
print("Initial list:", my_list)

for i in range(len(my_list) - 1):
    print(f"\n--- Iteration {i} ---")

    minimum = i  # Assume current index is minimum
    print(f"Start with index {i}, value {my_list[i]} as minimum")

    for j in range(i + 1, len(my_list)):
        print(f"Comparing {my_list[j]} with current minimum {my_list[minimum]}")

        if my_list[j] < my_list[minimum]:
            minimum = j
            print(f"New minimum found: {my_list[minimum]} at index {minimum}")

            if minimum != i:
                # Swap
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
                print("Swapped:", my_list)

print("\nFinal sorted list:", my_list)
