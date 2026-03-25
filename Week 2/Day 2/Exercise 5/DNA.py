import random

# ------------------- Gene -------------------
class Gene:
    def __init__(self, value=None):
        self.value = value if value is not None else random.choice([0, 1])

    def mutate(self):
        # Flip the gene
        self.value = 1 - self.value

    def __repr__(self):
        return str(self.value)


# ------------------- Chromosome -------------------
class Chromosome:
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:  # 50% chance
                gene.mutate()

    def is_all_ones(self):
        return all(gene.value == 1 for gene in self.genes)

    def __repr__(self):
        return ''.join(str(gene) for gene in self.genes)


# ------------------- DNA -------------------
class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        for chromosome in self.chromosomes:
            chromosome.mutate()

    def is_all_ones(self):
        return all(chromosome.is_all_ones() for chromosome in self.chromosomes)

    def __repr__(self):
        return '\n'.join(str(chromosome) for chromosome in self.chromosomes)


# ------------------- Organism -------------------
class Organism:
    def __init__(self, mutation_probability):
        self.dna = DNA()
        self.mutation_probability = mutation_probability

    def mutate(self):
        if random.random() < self.mutation_probability:
            self.dna.mutate()

    def is_perfect(self):
        return self.dna.is_all_ones()


# ------------------- Simulation -------------------
def simulate(population_size=10, mutation_probability=0.5):
    organisms = [Organism(mutation_probability) for _ in range(population_size)]
    generations = 0

    while True:
        generations += 1

        for organism in organisms:
            organism.mutate()

            if organism.is_perfect():
                print("🎉 Perfect organism found!")
                print(f"Generations: {generations}")
                print("DNA:")
                print(organism.dna)
                return generations


# ------------------- Run -------------------
simulate(population_size=20, mutation_probability=0.7)
