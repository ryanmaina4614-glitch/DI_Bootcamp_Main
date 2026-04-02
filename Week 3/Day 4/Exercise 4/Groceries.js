
// 🌟 Daily Challenge: Groceries


let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};



//  displayGroceries


const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

displayGroceries();



//  cloneGroceries


const cloneGroceries = () => {

    // Copy primitive (string)
    let user = client;

    // Change original
    client = "Betty";

    console.log("client:", client); // Betty
    console.log("user:", user);     // John

    //  Explanation:
    // Strings are passed by VALUE → user keeps original value


    // Copy object (reference)
    let shopping = groceries;

    // Modify original object
    groceries.totalPrice = "35$";

    console.log("groceries totalPrice:", groceries.totalPrice); // 35$
    console.log("shopping totalPrice:", shopping.totalPrice);   // 35$

    //  Explanation:
    // Objects are passed by REFERENCE → both point to same object


    // Modify nested object
    groceries.other.paid = false;

    console.log("groceries paid:", groceries.other.paid); // false
    console.log("shopping paid:", shopping.other.paid);   // false

    //  Explanation:
    // Nested objects are ALSO references → change affects both
};


// Invoke function
cloneGroceries();