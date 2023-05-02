// You have just been hired at a famous coffee chain as a web developer. Your first assignment is to clean up the menu data and filter it through specific guidelines (prompts two through seven). 
// Complete the following coding challenges using what you know about debugging and higher-order functions. Some of the questions rely on previous answers, so do your best to complete prompts two through seven in order.



// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },

    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },

    {
        name: "latte",
        price: 5,
        seasonal: false,
    },

    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 

    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },

    {
        name: "americano",
        price: 7,
        seasonal: false,
    },

    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },

    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]

module.exports = coffeeMenu