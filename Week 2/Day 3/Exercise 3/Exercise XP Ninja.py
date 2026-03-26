
# 🌟 EXERCISE 1: Temperature


class Temperature:
    def __init__(self, value):
        self.value = value


class Celsius(Temperature):
    def to_fahrenheit(self):
        return (self.value * 9/5) + 32

    def to_kelvin(self):
        return self.value + 273.15

    def __repr__(self):
        return f"{self.value}°C"


class Fahrenheit(Temperature):
    def to_celsius(self):
        return (self.value - 32) * 5/9

    def to_kelvin(self):
        return (self.value - 32) * 5/9 + 273.15

    def __repr__(self):
        return f"{self.value}°F"


class Kelvin(Temperature):
    def to_celsius(self):
        return self.value - 273.15

    def to_fahrenheit(self):
        return (self.value - 273.15) * 9/5 + 32

    def __repr__(self):
        return f"{self.value}K"


#  Test
print("=== Temperature ===")
c = Celsius(25)
print(c, "→", c.to_fahrenheit(), "°F")
print(c, "→", c.to_kelvin(), "K")



# 🌟 EXERCISE 2: Quantum Particle


import random

class QuantumParticle:
    def __init__(self, x=None, y=None, p=None, name="Particle"):
        self.name = name
        self.x = x if x is not None else random.randint(1, 10000)
        self.y = y if y is not None else random.random()
        self.p = p if p is not None else random.choice([0.5, -0.5])
        self.entangled_with = None

    #  Disturbance method
    def disturb(self):
        self.x = random.randint(1, 10000)
        self.y = random.random()
        print("Quantum Interference!!")

    #  Position measurement
    def measure_position(self):
        self.disturb()
        return self.x

    #  Momentum measurement
    def measure_momentum(self):
        self.disturb()
        return self.y

    #  Spin measurement
    def measure_spin(self):
        if self.entangled_with:
            # Opposite spin for entangled particle
            self.p = random.choice([0.5, -0.5])
            self.entangled_with.p = -self.p
            print("Spooky Action at a Distance !!")
        else:
            self.p = random.choice([0.5, -0.5])

        self.disturb()
        return self.p

    #  Entanglement
    def entangle(self, other):
        if not isinstance(other, QuantumParticle):
            raise TypeError("Can only entangle with another QuantumParticle")

        self.entangled_with = other
        other.entangled_with = self

        print(f"{self.name} is now entangled with {other.name}")

    #  Representation
    def __repr__(self):
        return (f"{self.name}(Position={self.x}, "
                f"Momentum={self.y:.3f}, Spin={self.p})")


#  Test
print("\n=== Quantum Particle ===")

p1 = QuantumParticle(name="p1")
p2 = QuantumParticle(name="p2")

p1.entangle(p2)

print(p1)
print(p2)

print("Spin p1:", p1.measure_spin())
print("Spin p2:", p2.measure_spin())