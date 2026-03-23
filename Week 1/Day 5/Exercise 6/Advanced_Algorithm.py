import random

# Generate list
list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728


def find_pairs(numbers, target):
    seen = set()
    pairs = set()

    for num in numbers:
        complement = target - num

        # Check if complement already exists
        if complement in seen:
            # Store pairs in sorted order to avoid duplicates
            pair = tuple(sorted((num, complement)))
            pairs.add(pair)

        seen.add(num)

    return pairs


# Run function
result = find_pairs(list_of_numbers, target_number)

# Print results
print(f"Pairs that sum to {target_number}:")
for pair in result:
    print(pair)

print(f"\nTotal pairs found: {len(result)}")
