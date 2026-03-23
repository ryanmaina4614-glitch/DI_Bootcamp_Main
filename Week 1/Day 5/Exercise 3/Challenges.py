# Exercise 1
def insert_at_index(lst, index, item):
    lst.insert(index, item)
    return lst


# Exercise 2
def count_spaces(string):
    count = 0
    for char in string:
        if char == " ":
            count += 1
    return count


# Exercise 3
def count_case(string):
    upper = 0
    lower = 0

    for char in string:
        if char.isupper():
            upper += 1
        elif char.islower():
            lower += 1

    return upper, lower


# Exercise 4
def my_sum(arr):
    total = 0
    for num in arr:
        total += num
    return total


# Exercise 5
def find_max(lst):
    maximum = lst[0]
    for num in lst:
        if num > maximum:
            maximum = num
    return maximum


# Exercise 6
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result


# Exercise 7
def list_count(lst, element):
    count = 0
    for item in lst:
        if item == element:
            count += 1
    return count


# Exercise 8
import math

def norm(lst):
    total = 0
    for num in lst:
        total += num ** 2
    return math.sqrt(total)


# Exercise 9
def is_mono(lst):
    increasing = True
    decreasing = True

    for i in range(len(lst) - 1):
        if lst[i] > lst[i + 1]:
            increasing = False
        if lst[i] < lst[i + 1]:
            decreasing = False

    return increasing or decreasing


# Exercise 10
def longest_word(lst):
    longest = ""
    for word in lst:
        if len(word) > len(longest):
            longest = word
    return longest


# Exercise 11
def separate_types(lst):
    ints = []
    strings = []

    for item in lst:
        if isinstance(item, int):
            ints.append(item)
        elif isinstance(item, str):
            strings.append(item)

    return ints, strings


# Exercise 12
def is_palindrome(string):
    return string == string[::-1]


# Exercise 13
def sum_over_k(sentence, k):
    words = sentence.split()
    count = 0

    for word in words:
        if len(word) > k:
            count += 1

    return count


# Exercise 14
def dict_avg(d):
    total = 0
    count = 0

    for value in d.values():
        total += value
        count += 1

    return total / count


# Exercise 15
def common_div(a, b):
    divisors = []
    for i in range(1, min(a, b) + 1):
        if a % i == 0 and b % i == 0:
            divisors.append(i)
    return divisors


# Exercise 16
def is_prime(n):
    if n < 2:
        return False

    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False

    return True


# Exercise 17
def weird_print(lst):
    result = []
    for i in range(len(lst)):
        if i % 2 == 0 and lst[i] % 2 == 0:
            result.append(lst[i])
    return result


# Exercise 18
def type_count(**kwargs):
    types = {}

    for value in kwargs.values():
        t = type(value).__name__
        if t in types:
            types[t] += 1
        else:
            types[t] = 1

    return types


# Exercise 19
def my_split(string, delimiter=" "):
    result = []
    word = ""

    for char in string:
        if char == delimiter:
            if word:
                result.append(word)
                word = ""
        else:
            word += char

    if word:
        result.append(word)

    return result


# Exercise 20
def to_password(string):
    return "*" * len(string)


# Optional: Quick test section
if __name__ == "__main__":
    print(insert_at_index([1, 2, 3], 1, 99))
    print(count_spaces("Hello world test"))
    print(count_case("Hello World"))
    print(my_sum([1, 5, 4, 2]))
    print(find_max([0, 1, 3, 50]))
    print(factorial(4))
    print(list_count(['a', 'a', 't', 'o'], 'a'))
    print(norm([1, 2, 2]))
    print(is_mono([7, 6, 5, 5, 2, 0]))
    print(longest_word(["apple", "banana", "kiwi"]))
    print(separate_types([1, "a", 2, "b"]))
    print(is_palindrome("radar"))
    print(sum_over_k("Do or do not there is no try", 2))
    print(dict_avg({'a': 1, 'b': 2, 'c': 8, 'd': 1}))
    print(common_div(10, 20))
    print(is_prime(11))
    print(weird_print([1, 2, 2, 3, 4, 5]))
    print(type_count(a=1, b='string', c=1.0, d=True, e=False))
    print(my_split("Hello world example"))
    print(to_password("mypassword"))
