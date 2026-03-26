class AnagramChecker:
    def __init__(self, file_path):
        # Load words into a set (faster lookup)
        with open(file_path, "r") as file:
            self.word_list = set(word.strip().lower() for word in file)

    def is_valid_word(self, word):
        return word.lower() in self.word_list

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        word = word.lower()
        anagrams = []

        for candidate in self.word_list:
            if candidate != word and self.is_anagram(word, candidate):
                anagrams.append(candidate)

        return anagrams
