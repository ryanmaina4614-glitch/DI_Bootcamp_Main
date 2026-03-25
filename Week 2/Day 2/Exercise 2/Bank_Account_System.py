
# 🌟 EXERCISE: BANK ACCOUNT SYSTEM



# PART I: BASIC BANK ACCOUNT

class BankAccount:
    def __init__(self, balance, username, password):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            print("✅ Authentication successful")
        else:
            print("❌ Authentication failed")

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")

        if amount <= 0:
            raise Exception("Deposit amount must be positive")

        self.balance += amount
        print(f"💰 Deposited {amount}. New balance: {self.balance}")

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")

        if amount <= 0:
            raise Exception("Withdrawal amount must be positive")

        if amount > self.balance:
            raise Exception("Insufficient funds")

        self.balance -= amount
        print(f"💸 Withdrew {amount}. New balance: {self.balance}")



# PART II: MINIMUM BALANCE ACCOUNT


class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, username, password, minimum_balance=0):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")

        if amount <= 0:
            raise Exception("Withdrawal amount must be positive")

        if (self.balance - amount) < self.minimum_balance:
            raise Exception("Cannot go below minimum balance")

        self.balance -= amount
        print(f"💸 Withdrew {amount}. New balance: {self.balance}")


# PART IV: ATM SYSTEM

class ATM:
    def __init__(self, account_list, try_limit):
        # Validate account list
        if not all(isinstance(acc, BankAccount) for acc in account_list):
            raise Exception("Invalid account list")

        self.account_list = account_list

        # Validate try_limit
        if isinstance(try_limit, int) and try_limit > 0:
            self.try_limit = try_limit
        else:
            print("Invalid try_limit. Setting to default (2).")
            self.try_limit = 2

        self.current_tries = 0

        # Start ATM
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n=== ATM MENU ===")
            print("1. Log in")
            print("2. Exit")

            choice = input("Select option: ")

            if choice == "1":
                username = input("Username: ")
                password = input("Password: ")
                self.log_in(username, password)

            elif choice == "2":
                print("👋 Goodbye!")
                break

            else:
                print("Invalid choice")

    def log_in(self, username, password):
        for account in self.account_list:
            if account.username == username and account.password == password:
                account.authenticate(username, password)
                self.show_account_menu(account)
                return

        self.current_tries += 1
        print(f"❌ Incorrect credentials ({self.current_tries}/{self.try_limit})")

        if self.current_tries >= self.try_limit:
            print("🚫 Maximum login attempts reached. Shutting down.")
            exit()

    def show_account_menu(self, account):
        while True:
            print("\n=== ACCOUNT MENU ===")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")

            choice = input("Select option: ")

            try:
                if choice == "1":
                    amount = int(input("Enter amount: "))
                    account.deposit(amount)

                elif choice == "2":
                    amount = int(input("Enter amount: "))
                    account.withdraw(amount)

                elif choice == "3":
                    print("Logging out...")
                    account.authenticated = False
                    break

                else:
                    print("Invalid choice")

            except Exception as e:
                print(f"⚠️ Error: {e}")



# TESTING THE SYSTEM


# Create accounts
acc1 = BankAccount(1000, "ryan", "1234")
acc2 = MinimumBalanceAccount(500, "maina", "abcd", minimum_balance=200)

accounts = [acc1, acc2]

# Start ATM
atm = ATM(accounts, try_limit=3)