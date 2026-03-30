
// 🌟 Original Array


const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];



//  Convert to String


// Using toString()
console.log("toString():", numbers.toString());

// Using join()
console.log("join(+):", numbers.join("+"));
console.log("join(space):", numbers.join(" "));
console.log("join(empty):", numbers.join(""));



// 🌟 Bonus: Bubble Sort (Descending)


let arr = [...numbers]; // copy array

// Outer loop (passes)
for (let i = 0; i < arr.length; i++) {
    console.log(`\nPass ${i + 1}:`);

    // Inner loop (comparisons)
    for (let j = 0; j < arr.length - 1; j++) {

        console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);

        // Swap if left is smaller than right (for descending)
        if (arr[j] < arr[j + 1]) {
            console.log(`Swapping ${arr[j]} and ${arr[j + 1]}`);

            // Temporary variable for swapping
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }

        console.log("Current array:", arr);
    }
}

// Final result
console.log("\nSorted Array (Descending):", arr);