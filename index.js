// 1. 
const birthYear = 2005;
let currentage = 20;

console.log("I will be ", 2030 - 2005, " years old in 2030");

// the line below creates the error: TypeError: Assignment to constant variable.
// birthYear = 0;

// 2.
let string = "word";
console.log(typeof(string));
let int = 1;
console.log(typeof(int));
let boolean = true; 
console.log(typeof(boolean));
let nullVal = null;
console.log(typeof(nullVal));
let undef;
console.log(typeof(undef));

// typeof(nullVal) should not return Object, because null is a primitave data type and not an Object.

// 3.

// Array of 5 favorite foods:
let favoriteFoods = ["Fried Eggs", "Sweet and Sour", 
    "Soy Sauce Braised Pork", "Bananas", "Spinach Steeped in Garlic"];

// Adding another favorite food:
favoriteFoods.push("Mapo Tofu");

// Removing a favorite food:
favoriteFoods.shift();

// Finding index of specific food:
const indexOfAFood = favoriteFoods.indexOf("Bananas");

// Making all of the foods uppercase:
favoriteFoods = favoriteFoods.map(foods => foods.toUpperCase());
console.log(favoriteFoods);