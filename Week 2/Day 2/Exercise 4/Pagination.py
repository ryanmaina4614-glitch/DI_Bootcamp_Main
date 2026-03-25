import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0  # internal index (0-based)

        self.total_pages = math.ceil(len(self.items) / self.page_size)

   
    # Get items for current page
    
    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    # Navigation Methods
    
    def go_to_page(self, page_num):
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("Page number out of range")

        self.current_idx = page_num - 1
        return self  # for chaining

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    # =========================================
    # String representation (Bonus)
    # =========================================
    def __str__(self):
        return "\n".join(str(item) for item in self.get_visible_items())


# 🌟 TESTING


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print("\n--- Initial Page ---")
print(p.get_visible_items())  # ['a', 'b', 'c', 'd']

print("\n--- Next Page ---")
p.next_page()
print(p.get_visible_items())  # ['e', 'f', 'g', 'h']

print("\n--- Last Page ---")
p.last_page()
print(p.get_visible_items())  # ['y', 'z']

print("\n--- Method Chaining ---")
print(p.first_page().next_page().next_page().get_visible_items())
# ['i', 'j', 'k', 'l']

print("\n--- __str__ Output ---")
print(p.first_page())  
# a
# b
# c
# d



# 🌟 ERROR TESTING


try:
    p.go_to_page(10)
except ValueError as e:
    print("\nError:", e)

try:
    p.go_to_page(0)
except ValueError as e:
    print("Error:", e)