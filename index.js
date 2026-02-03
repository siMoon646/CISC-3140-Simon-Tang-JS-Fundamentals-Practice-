// 1.
console.log("Question 1: =========================="); 
const birthYear = 2005;
let currentage = 20;

console.log("Simon will be", 2030 - 2005, "years old in 2030");

// the line below creates the error: TypeError: Assignment to constant variable.
// birthYear = 0;

// 2.
console.log("Question 2: ==========================");
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
console.log("Question 3: ==========================");
// Array of 5 favorite foods:
let favoriteFoods = ["Fried Eggs", "Sweet and Sour", 
    "Soy Sauce Braised Pork", "Bananas", "Spinach Steeped in Garlic"];
console.log("An array of 5 favorite foods is as follows:\n", favoriteFoods);

// Adding another favorite food:
favoriteFoods.push("Mapo Tofu");
console.log("Mapo Tofu was added to the array:\n", favoriteFoods);

// Removing first favorite food:
console.log("the first element,", favoriteFoods.shift(), "was removed from the array. The array now appears:\n", favoriteFoods);

// Finding index of specific food:
console.log("The index of \"bananas\" is:", favoriteFoods.indexOf("Bananas"));

// Making all of the foods uppercase:
favoriteFoods = favoriteFoods.map(foods => foods.toUpperCase());
console.log(favoriteFoods);

// 4.
console.log("Question 4: ==========================");
// Creating student object:

const Student = {
    name: "Simon Tang",
    age: 20,
    courses: ["CISC3142", "CISC3140", "MUSC1400", "CISC3320", "CISC 3620"],
    isEnrolled: true,
    GPA: 3.98,
}

// Accessing the second course:
console.log(Student.courses[1], "is the second course");


// Destructuring the Student object:
const {name, age} = Student;
console.log(name, "is", age, "years old");

// 5.
console.log("Question 5: ==========================");
function sum(num1, num2){
    return num1 + num2;
}

console.log("The sum of 1 and 1 is:", sum(1,1));

//Learned: arrow functions using '{' and '}' require return statement.
const sumOfNums = (num1, num2) => num1 + num2;

console.log("The sum of 2 and 2 is:", sumOfNums(2, 2));

// max function
function max(arr){
    let maximum = arr[0];
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > maximum){
            maximum = arr[i];
        }
    }
    return maximum;
}

console.log("The greatest number in the array", [10,12,25,89,2], "is:", max([10,12,25,89,2]));

// reverse string function:
function reverseString(str){
    return String(str).split("").reverse();
}

console.log(reverseString("octocat"));

// 6. 
console.log("Question 6: ==========================");
