import random
import json



# 🌟 EXERCISE 1: RANDOM SENTENCE GENERATOR


def get_words_from_file(file_path):
    try:
        with open(file_path, "r") as file:
            content = file.read()
            words = content.split()
            return words
    except FileNotFoundError:
        print(" Error: word list file not found.")
        return []


def get_random_sentence(length):
    words = get_words_from_file("word_list.txt")

    if not words:
        return "No words available."

    sentence = [random.choice(words) for _ in range(length)]
    return " ".join(sentence).lower()


def run_sentence_generator():
    print("\n Random Sentence Generator")

    user_input = input("Enter sentence length (2–20): ").strip()

    try:
        length = int(user_input)

        if length < 2 or length > 20:
            print(" Error: Number must be between 2 and 20.")
            return

    except ValueError:
        print(" Error: Please enter a valid number.")
        return

    sentence = get_random_sentence(length)

    print("\n Generated Sentence:")
    print(sentence)



# 🌟 EXERCISE 2: JSON HANDLING


def run_json_task():
    print("\n JSON Processing Task")

    sampleJson = """{ 
       "company":{ 
          "employee":{ 
             "name":"emma",
             "payable":{ 
                "salary":7000,
                "bonus":800
             }
          }
       }
    }"""

    # Step 1: Load JSON
    data = json.loads(sampleJson)

    # Step 2: Access salary
    salary = data["company"]["employee"]["payable"]["salary"]
    print(" Salary:", salary)

    # Step 3: Add birth_date
    data["company"]["employee"]["birth_date"] = "1995-06-15"

    # Step 4: Save to file
    with open("modified_data.json", "w") as file:
        json.dump(data, file, indent=4)

    print(" JSON updated and saved to 'modified_data.json'")



#  MAIN MENU


def main():
    while True:
        print("\n--- MAIN MENU ---")
        print("1. Random Sentence Generator")
        print("2. JSON Processing Task")
        print("3. Exit")

        choice = input("Choose an option: ").strip()

        if choice == "1":
            run_sentence_generator()

        elif choice == "2":
            run_json_task()

        elif choice == "3":
            print(" Goodbye!")
            break

        else:
            print(" Invalid choice. Try again.")


if __name__ == "__main__":
    main()
