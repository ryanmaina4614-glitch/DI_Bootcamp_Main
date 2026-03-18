
# 🌟 Exercise 1: Student Grade Summary


student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

# Dictionaries to store results
student_averages = {}
student_letter_grades = {}

# Function to assign letter grades
def get_letter_grade(avg):
    if avg >= 90:
        return "A"
    elif avg >= 80:
        return "B"
    elif avg >= 70:
        return "C"
    elif avg >= 60:
        return "D"
    else:
        return "F"

# Calculate averages and letter grades
for student, grades in student_grades.items():
    average = sum(grades) / len(grades)
    student_averages[student] = average
    student_letter_grades[student] = get_letter_grade(average)

# Calculate class average
class_average = sum(student_averages.values()) / len(student_averages)

# Print results
print("=== Exercise 1: Student Grade Summary ===")
for student in student_grades:
    print(f"{student}: Average = {student_averages[student]:.2f}, Grade = {student_letter_grades[student]}")

print(f"Class Average: {class_average:.2f}")



# 🌟 Exercise 2: Advanced Data Manipulation and Analysis


sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

print("\n=== Exercise 2: Sales Analysis ===")

# -------------------------------------
# Total Sales per Product
# -------------------------------------
product_sales = {}

for sale in sales_data:
    total_price = sale["price"] * sale["quantity"]
    product = sale["product"]

    product_sales[product] = product_sales.get(product, 0) + total_price

print("Total Sales per Product:", product_sales)


# -------------------------------------
# Customer Spending Profile
# -------------------------------------
customer_spending = {}

for sale in sales_data:
    total_price = sale["price"] * sale["quantity"]
    customer = sale["customer_id"]

    customer_spending[customer] = customer_spending.get(customer, 0) + total_price

print("Customer Spending:", customer_spending)


# -------------------------------------
# Add total_price to each transaction
# -------------------------------------
for sale in sales_data:
    sale["total_price"] = sale["price"] * sale["quantity"]

print("Updated Sales Data:", sales_data)


# -------------------------------------
# High-Value Transactions (> 500)
# -------------------------------------
high_value = [sale for sale in sales_data if sale["total_price"] > 500]
high_value_sorted = sorted(high_value, key=lambda x: x["total_price"], reverse=True)

print("High-Value Transactions:", high_value_sorted)


# -------------------------------------
# Customer Loyalty (more than 1 purchase)
# -------------------------------------
purchase_count = {}

for sale in sales_data:
    customer = sale["customer_id"]
    purchase_count[customer] = purchase_count.get(customer, 0) + 1

loyal_customers = [cust for cust, count in purchase_count.items() if count > 1]
print("Loyal Customers:", loyal_customers)


# -------------------------------------
# Bonus: Average Transaction per Product
# -------------------------------------
product_totals = {}
product_counts = {}

for sale in sales_data:
    product = sale["product"]
    total_price = sale["total_price"]

    product_totals[product] = product_totals.get(product, 0) + total_price
    product_counts[product] = product_counts.get(product, 0) + 1

product_avg = {p: product_totals[p] / product_counts[p] for p in product_totals}
print("Average Transaction Value per Product:", product_avg)


# -------------------------------------
# Bonus: Most Popular Product (by quantity)
# -------------------------------------
product_quantity = {}

for sale in sales_data:
    product = sale["product"]
    quantity = sale["quantity"]

    product_quantity[product] = product_quantity.get(product, 0) + quantity

most_popular = max(product_quantity, key=product_quantity.get)
print("Most Popular Product:", most_popular)


# -------------------------------------
# Insights (Printed as comments)
# -------------------------------------
print("\nInsights:")
print("- Smartphones and laptops generate high revenue, suggesting strong demand.")
print("- Loyal customers (repeat buyers) can be targeted with promotions.")
print("- High-value transactions indicate premium buyers worth targeting.")
print("- Most popular products can be promoted further to maximize sales.")