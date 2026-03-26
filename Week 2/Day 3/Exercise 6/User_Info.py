
# INPUT COLLECTION

data = []

for _ in range(5):
    name = input("Enter name: ")
    age = input("Enter age: ")
    score = input("Enter score: ")

    data.append((name, age, score))


# SORT USING LAMBDA (Name > Age > Score)


sorted_data = sorted(
    data,
    key=lambda x: (x[0], int(x[1]), int(x[2]))
)


# OUTPUT


print(sorted_data)