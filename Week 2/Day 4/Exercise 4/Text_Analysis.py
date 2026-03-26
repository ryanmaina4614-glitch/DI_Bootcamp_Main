import json
import re
import string
from collections import Counter

# PART I & II: THE TEXT CLASS


class Text:
    """A class to analyze text data from a string or file."""
    
    def __init__(self, text):
        self.text = text

    def _get_words(self):
        """Helper to return a list of lowercase words without extra whitespace."""
        return self.text.lower().split()

    def word_frequency(self, word):
        """Counts occurrences of a specific word."""
        words = self._get_words()
        count = words.count(word.lower())
        return count if count > 0 else f"Word '{word}' not found."

    def most_common_word(self):
        """Finds the word that appears most frequently."""
        words = self._get_words()
        if not words:
            return None
        counts = Counter(words)
        # most_common(1) returns [('word', count)]
        return counts.most_common(1)[0][0]

    def unique_words(self):
        """Returns a list of all unique words in the text."""
        words = self._get_words()
        return list(set(words))

    @classmethod
    def from_file(cls, file_path):
        """Class method to instantiate Text from a local file."""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            print(f"--- File '{file_path}' loaded successfully ---")
            return cls(content)
        except FileNotFoundError:
            print(f"Error: The file '{file_path}' was not found.")
            return cls("")


# BONUS: THE TEXT MODIFICATION CLASS


class TextModification(Text):
    """Inherits from Text and provides cleaning/modification methods."""

    def remove_punctuation(self):
        """Removes all standard punctuation from the text attribute."""
        translator = str.maketrans('', '', string.punctuation)
        self.text = self.text.translate(translator)
        return self.text

    def remove_stop_words(self):
        """Filters out common English stop words."""
        # A basic list of common stop words
        stop_words = {
            "a", "an", "the", "and", "or", "but", "if", "because", "as", "what",
            "is", "am", "are", "was", "were", "be", "been", "being", "have", "has", 
            "had", "do", "does", "did", "to", "from", "in", "out", "on", "off", "with"
        }
        words = self.text.split()
        filtered_words = [w for w in words if w.lower() not in stop_words]
        self.text = " ".join(filtered_words)
        return self.text

    def remove_special_characters(self):
        """Uses Regex to remove anything that isn't a letter, number, or space."""
        # [^...] means "not", so we replace anything NOT in the set with an empty string
        self.text = re.sub(r'[^a-zA-Z0-9\s]', '', self.text)
        return self.text

# MAIN EXECUTION (FOR TESTING)


if __name__ == "__main__":
    # 1. Testing simple string analysis
    sample_text = "A good book would sometimes cost as much as a good house! A house, a house!"
    analyzer = Text(sample_text)
    
    print("--- Analysis Results ---")
    print(f"Frequency of 'house': {analyzer.word_frequency('house')}")
    print(f"Most common word: {analyzer.most_common_word()}")
    print(f"Unique words: {analyzer.unique_words()}")
    
    print("\n" + "="*40 + "\n")

    # 2. Testing Text Modification (Inheritance)
    messy_text = "Hello!!! This is a @special string, isn't it? It has 123 symbols."
    modifier = TextModification(messy_text)
    
    print(f"Original Text: {modifier.text}")
    
    modifier.remove_punctuation()
    print(f"After Punctuation Removal: {modifier.text}")
    
    modifier.remove_stop_words()
    print(f"After Stop Word Removal: {modifier.text}")
    
    modifier.remove_special_characters()
    print(f"Final Cleaned Version: {modifier.text}")

    # 3. Example of loading from file (if file exists)
    # analyzer_from_file = Text.from_file('my_document.txt')