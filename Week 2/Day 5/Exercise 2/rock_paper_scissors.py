from game import Game


def get_user_menu_choice():
    while True:
        print("\n--- MENU ---")
        print("1. Play a new game")
        print("2. Show scores")
        print("3. Quit")

        choice = input("Enter your choice: ").strip()

        if choice in ["1", "2", "3"]:
            return choice
        else:
            print(" Invalid choice. Try again.")


def print_results(results):
    print("\n--- GAME RESULTS ---")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("\nThanks for playing! 🎮")


def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()

        if choice == "1":
            game = Game()
            result = game.play()
            results[result] += 1

        elif choice == "2":
            print_results(results)

        elif choice == "3":
            print_results(results)
            break


if __name__ == "__main__":
    main()
