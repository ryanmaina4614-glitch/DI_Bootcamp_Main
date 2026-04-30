// =====================================
// IMPORT DATA (ES6 IMPORT)
// =====================================

import people from './data.js';

// =====================================
// FUNCTION: CALCULATE AVERAGE AGE
// =====================================

function calculateAverageAge(personArray) {
    const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / personArray.length;

    console.log("Average Age:", average);
}

// =====================================
// RUN FUNCTION
// =====================================

calculateAverageAge(people);