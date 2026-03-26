
from googletrans import Translator

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

translator = Translator()

translated_dict = {}

for word in french_words:
    translation = translator.translate(word, src='fr', dest='en')
    translated_dict[word] = translation.text

print(translated_dict)