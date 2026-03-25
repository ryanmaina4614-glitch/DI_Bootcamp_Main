import time
import copy
import random

class GameOfLife:
    def __init__(self, rows, cols, initial_state=None):
        self.rows = rows
        self.cols = cols

        if initial_state:
            self.grid = initial_state
        else:
            self.grid = self.create_random_grid()

    def create_random_grid(self):
        return [[random.choice([0, 1]) for _ in range(self.cols)] for _ in range(self.rows)]

    def display(self):
        print("\n" + "-" * (self.cols * 2))
        for row in self.grid:
            print(" ".join("⬛" if cell == 1 else "⬜" for cell in row))
        print("-" * (self.cols * 2))

    def count_neighbors(self, row, col):
        directions = [
            (-1, -1), (-1, 0), (-1, 1),
            (0, -1),          (0, 1),
            (1, -1), (1, 0), (1, 1)
        ]

        count = 0
        for dr, dc in directions:
            r, c = row + dr, col + dc
            if 0 <= r < self.rows and 0 <= c < self.cols:
                count += self.grid[r][c]
        return count

    def next_generation(self):
        new_grid = copy.deepcopy(self.grid)

        for row in range(self.rows):
            for col in range(self.cols):
                live_neighbors = self.count_neighbors(row, col)

                if self.grid[row][col] == 1:
                    # Live cell rules
                    if live_neighbors < 2 or live_neighbors > 3:
                        new_grid[row][col] = 0
                else:
                    # Dead cell rule
                    if live_neighbors == 3:
                        new_grid[row][col] = 1

        self.grid = new_grid

    def run(self, generations=10, delay=0.5):
        for gen in range(generations):
            print(f"\nGeneration {gen + 1}")
            self.display()
            self.next_generation()
            time.sleep(delay)


# 🌟 TESTING DIFFERENT INITIAL STATES


# Example 1: Random grid
game1 = GameOfLife(10, 10)
game1.run(10)


# Example 2: Blinker pattern (oscillator)
blinker = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
]

game2 = GameOfLife(5, 5, blinker)
game2.run(6)


# Example 3: Block (still life)
block = [
    [0,0,0,0],
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0],
]

game3 = GameOfLife(4, 4, block)
game3.run(5)