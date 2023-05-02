// 2. Create a file named index.js and improt the coffee_data.js file into it using the require syntax.
const coffeeMenu = require('./coffee_data');
// 3. Print an array of all the drinks on the menu.
console.log(coffeeMenu.map(drink => drink.name));
// 4. Print an array of drinks that cost 5 and under.
console.log(coffeeMenu.filter(drink => drink.price <= 5));
// 5. Print an array of drinks that are priced at an even number.
console.log(coffeeMenu.filter(drink => drink.price % 2 === 0));
// 6. Print the total if you were to order one of every drink.
const total = coffeeMenu.reduce((acc, drink) => acc + drink.price, 0);
console.log(`Total price for one of every drink: $${total.toFixed(2)}`);
// 7. Print an array with all the drinks that are seasonal.
console.log(coffeeMenu.filter(drink => drink.seasonal));
// 8. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
console.log(coffeeMenu.filter(drink => drink.seasonal).map(drink => `${drink.name} with imported beans`));


