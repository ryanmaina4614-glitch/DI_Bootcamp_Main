import random

# Card class
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"


# Deck class (does NOT inherit from Card)
class Deck:
    def __init__(self):
        self.cards = []

    def shuffle(self):
        # Create full deck of 52 cards
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

        self.cards = [Card(suit, value) for suit in suits for value in values]

        # Shuffle the deck
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            return "No cards left in the deck!"
        return self.cards.pop()
