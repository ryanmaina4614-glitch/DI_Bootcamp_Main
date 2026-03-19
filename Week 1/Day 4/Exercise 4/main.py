
# EXERCISE 1: GET FULL NAME


def get_full_name(first_name, last_name, middle_name=None):
    """
    Returns a properly formatted full name.
    Middle name is optional.
    """
    if middle_name:
        full_name = f"{first_name} {middle_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"

    return full_name.title()


# Example usage
print("Exercise 1 Output:")
print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
print(get_full_name(first_name="bruce", last_name="lee"))


# EXERCISE 2: MORSE CODE CONVERTER


MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..',
    'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.'
}


def text_to_morse(text):
    result = []
    for word in text.upper().split():
        encoded_word = []
        for char in word:
            if char in MORSE_CODE_DICT:
                encoded_word.append(MORSE_CODE_DICT[char])
        result.append(" ".join(encoded_word))
    return " / ".join(result)


def morse_to_text(morse):
    reverse_dict = {v: k for k, v in MORSE_CODE_DICT.items()}
    result = []

    words = morse.split(" / ")
    for word in words:
        letters = word.split()
        decoded_word = ""
        for code in letters:
            decoded_word += reverse_dict.get(code, "")
        result.append(decoded_word)

    return " ".join(result).lower()


# Example usage
print("\nExercise 2 Output:")
print(text_to_morse("Hello World"))
print(morse_to_text(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."))


# EXERCISE 3: BOX PRINTER



def box_printer(*args):
    max_length = max(len(word) for word in args)
    border = "*" * (max_length + 4)

    print(border)
    for word in args:
        print(f"* {word.ljust(max_length)} *")
    print(border)


# Example usage
print("\nExercise 3 Output:")
box_printer("Hello", "World", "in", "reallylongword", "a", "frame")


# EXERCISE 4: INSERTION SORT EXPLANATION


def insertion_sort(alist):
    """
    Sorts a list in ascending order using insertion sort.
    """
    for index in range(1, len(alist)):
        currentvalue = alist[index]
        position = index

        while position > 0 and alist[position - 1] > currentvalue:
            alist[position] = alist[position - 1]
            position -= 1

        alist[position] = currentvalue


# Example usage
print("\nExercise 4 Output:")
alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
insertion_sort(alist)
print(alist)

# Expected output:
# [17, 20, 26, 31, 44, 54, 55, 77, 93]
