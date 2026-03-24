
# 🌟 Exercise: Call History

class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    # Call method
    def call(self, other_phone):
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)

        # Add to both phones' history
        self.call_history.append(call_record)
        other_phone.call_history.append(call_record)

    # Show call history
    def show_call_history(self):
        print(f"\nCall history for {self.phone_number}:")
        for call in self.call_history:
            print(call)

    # Send message
    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }

        # Store message in BOTH phones
        self.messages.append(message)
        other_phone.messages.append(message)

        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}")

    # Show outgoing messages
    def show_outgoing_messages(self):
        print(f"\nOutgoing messages from {self.phone_number}:")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(msg)

    # Show incoming messages
    def show_incoming_messages(self):
        print(f"\nIncoming messages to {self.phone_number}:")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(msg)

    # Show messages from a specific number
    def show_messages_from(self, number):
        print(f"\nMessages from {number} to {self.phone_number}:")
        for msg in self.messages:
            if msg["from"] == number and msg["to"] == self.phone_number:
                print(msg)


# 🧪 Testing the Phone Class


phone1 = Phone("0712345678")
phone2 = Phone("0798765432")
phone3 = Phone("0700000000")

# Calls
phone1.call(phone2)
phone2.call(phone3)
phone3.call(phone1)

# Show call history
phone1.show_call_history()
phone2.show_call_history()
phone3.show_call_history()

# Messages
phone1.send_message(phone2, "Hey, how are you?")
phone2.send_message(phone1, "I'm good, thanks!")
phone3.send_message(phone1, "Hello there!")

# Show messages
phone1.show_outgoing_messages()
phone1.show_incoming_messages()

# Show messages from specific number
phone1.show_messages_from("0798765432")