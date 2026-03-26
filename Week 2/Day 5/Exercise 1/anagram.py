from anagram_checker import AnagramChecker


def main():
    checker = AnagramChecker("word_list.txt")

    while True:
        print("\n--- ANAGRAM CHECKER ---")
        print("1. Enter a word")
        print("2. Exit")

        choice = input("Choose an option: ").strip()

        if choice == "2":
            print("Goodbye!")
            break

        elif choice == "1":
            user_input = input("Enter a word: ").strip()

            # Validation
            if len(user_input.split()) > 1:
                print(" Error: Only one word allowed.")
                continue

            if not user_input.isalpha():
                print(" Error: Only alphabetic characters allowed.")
                continue

            word = user_input.lower()

            # Check validity
            is_valid = checker.is_valid_word(word)

            # Get anagrams
            anagrams = checker.get_anagrams(word)

            # Display results
            print("\nYOUR WORD:", word.upper())

            if is_valid:
                print("This is a valid English word.")
            else:
                print("This is NOT a valid English word.")

            if anagrams:
                print("Anagrams for your word:", ", ".join(anagrams))
            else:
                print("No anagrams found.")

        else:
            print(" Invalid choice. Try again.")


if __name__ == "__main__":
    main()
