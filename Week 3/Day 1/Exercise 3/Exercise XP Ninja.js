
// 🌟 Exercise 1 : Checking the BMI


// Person 1 object
let person1 = {
    fullName: "John Doe",
    mass: 70,
    height: 1.75,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
};

// Person 2 object
let person2 = {
    fullName: "Jane Smith",
    mass: 85,
    height: 1.8,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
};

// Function to compare BMI
function compareBMI(p1, p2) {
    let bmi1 = p1.calcBMI();
    let bmi2 = p2.calcBMI();

    console.log(`${p1.fullName} BMI: ${bmi1.toFixed(2)}`);
    console.log(`${p2.fullName} BMI: ${bmi2.toFixed(2)}`);

    if (bmi1 > bmi2) {
        console.log(`${p1.fullName} has the higher BMI.`);
    } else if (bmi2 > bmi1) {
        console.log(`${p2.fullName} has the higher BMI.`);
    } else {
        console.log("Both have the same BMI.");
    }
}

// Call function
compareBMI(person1, person2);



// 🌟 Exercise 2 : Grade Average


// Function to calculate average
function calculateAverage(gradesList) {
    let sum = 0;

    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }

    return sum / gradesList.length;
}

// Function to check pass/fail
function findAvg(gradesList) {
    let avg = calculateAverage(gradesList);

    console.log("Average:", avg.toFixed(2));

    if (avg > 65) {
        console.log(" You passed!");
    } else {
        console.log(" You failed. Repeat the course.");
    }
}

// Example usage
let grades = [70, 80, 60, 90, 50];
findAvg(grades);