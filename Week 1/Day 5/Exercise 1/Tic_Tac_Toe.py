# Step 1: Create the board
def create_board():
    return [[" " for _ in range(3)] for _ in range(3)]


# Step 2: Display the board
def display_board(board):
    print("\n")
    for i, row in enumerate(board):
        print(" | ".join(row))
        if i < 2:
            print("--+---+--")
    print("\n")


# Step 3: Get player input
def player_input(board, player):
    while True:
        try:
            row = int(input(f"Player {player}, enter row (0-2): "))
            col = int(input(f"Player {player}, enter col (0-2): "))

            # Validate range
            if row not in range(3) or col not in range(3):
                print("Invalid input. Use numbers between 0 and 2.")
                continue

            # Validate empty cell
            if board[row][col] != " ":
                print("That position is already taken.")
                continue

            return row, col

        except ValueError:
            print("Please enter valid numbers.")


# Step 4: Check for winner
def check_win(board, player):
    # Check rows
    for row in board:
        if all(cell == player for cell in row):
            return True

    # Check columns
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True

    # Check diagonals
    if all(board[i][i] == player for i in range(3)):
        return True

    if all(board[i][2 - i] == player for i in range(3)):
        return True

    return False


# Step 5: Check for tie
def check_tie(board):
    for row in board:
        if " " in row:
            return False
    return True


# Step 6: Main game loop
def play():
    board = create_board()
    current_player = "X"

    while True:
        display_board(board)

        row, col = player_input(board, current_player)
        board[row][col] = current_player

        # Check win
        if check_win(board, current_player):
            display_board(board)
            print(f"🎉 Player {current_player} wins!")
            break

        # Check tie
        if check_tie(board):
            display_board(board)
            print("🤝 It's a tie!")
            break

        # Switch player
        current_player = "O" if current_player == "X" else "X"


# Run the game
if __name__ == "__main__":
    play()