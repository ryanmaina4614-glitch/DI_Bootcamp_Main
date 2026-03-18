x = int(input('Enter the Number:'))

# Initialize sum of divisors
sum_divisors = 0

# Loop through 1 to x-1 to find divisors
for i in range(1, x):
    if x % i == 0:
        sum_divisors += i

# Check if sum of divisors equals the number
if sum_divisors == x:
    print(True)
else:
    print(False)