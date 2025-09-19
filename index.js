// var name= "John Doe";    // String
// var age= 30;        // Number 
// var isEmployed= true;       // Boolean
// var number = 45.67;    // Float
// var fruits = ['Apple', 'Banana', 'Orange', 68, true];             // Array
// var information = {                                              // Object
//     name: 'John',
//     age: 30,
//     isEmployed: true
// };
// var x = null;                 // Null
// var salary;                 // Undefined
// // // console.log(salary);
// // // salary = 50000; // valid
// // // console.log(salary);


// // // let var const
// // // const name1 = "John Doe2";    // String
// // // let age1 = 32;        // Number
// // // age1 = 33; // valid
// // // var age2 = 34; // valid
// // // age2 = 35; // valid

// // // console.log(information);
// // // console.log(x);









// // // OPERATORS

// // Arithmetic Operators
// var a = "10";     // String
// var b = 10;       // Number
// console.log("a + b =", a + b); // Addition
// console.log("a - b =", a - b); // subtraction
// console.log("a * b =", a * b); // Multiplication
// console.log("a / b =", a / b); // Division

// //Comparison Operators
// console.log("a === b:", a === b);
// console.log("a == b:", a == b);
// console.log("a != b:", a != b);
// console.log("a !== b:", a !== b);

// // Logical Operators
// var isAdult = true;
// var hasID = true; 
// console.log("Whether the Person is Eligible to drive a Car :", isAdult && hasID);         // AND

// // AND Operator Truth Table
// // true && true = true
// // true && false = false
// // false && true = false
// // false && false = false

// var isAdult = false;
// var ischild = false;

// console.log("Whether the Person is Eligible to enter into Restaurant :", isAdult || ischild);         // OR

// // OR Operator Truth Table
// // true || true = true
// // true || false = true
// // false || true = true
// // false || false = false

// isAdult = true;
// console.log("negative of the isAdult :", !isAdult);         // NOT  

// // NOT Operator Truth Table
// // !true = false
// // !false = true



// // Assignment Operators
// var c = 20;
// console.log("Initial value of c:", c);    //20
// c += 5; // c = c + 5
// console.log("c after c += 5:", c);    //25
// c -= 3; // c = c - 3
// console.log("c after c -= 3:", c);    //22
// c *= 2; // c = c * 2
// console.log("c after c *= 2:", c);    //44
// c /= 4; // c = c / 4
// console.log("c after c /= 4:", c);    //11







// // Control Structures


// var age = 2;
// var hasLicense = true;

// // If-Else Statement
// if (condition) {
//     // code to be executed if condition is true
// }else {
//     // code to be executed if condition is false
// }

// // Nested If-Else Statement

// if (age >= 18) {
//     if (hasLicense) {
//         console.log("You are eligible to drive a car.");
//     } else {
//         console.log("You need a driving license to drive a car.");
//     }
// }else {
//     if (age >= 16) {
//         console.log("You are eligible to learning license.");
//     }else {
//         console.log("You are a minor and Currently not eligible to drive a car.");
//     }
// }




// // Switch Statement

// var day = 10;
// if (day < 1 || day > 7) {
//     console.log("Invalid day! Please enter a number between 1 and 7.");
// }else{
//     switch (day) {
//       case 1:
//           console.log("Monday");
//           console.log("Today we have Theory class!");
//           break;
//       case 2:
//           console.log("Tuesday");
//           console.log("Today we have Review class!");
//           break;
//       case 3:
//           console.log("Wednesday");
//           console.log("Today we have Theory class!");
//           break;
//       case 4:
//           console.log("Thursday");  
//           console.log("Today we have Review class!");
//           break;
//       case 5:
//           console.log("Friday");
//           console.log("Today we have Interview Sessions!");
//           break;

//       default:
//           console.log("It's Weekend! No classes scheduled.");
//           break;
//   }
// }


// Ternary Operator

// condition ? expression_if_true : expression_if_false

// 0 : false
// 1,2,3....n : true    
// "" : false
// "abc" : true
// null : false
// undefined : false
// [] : true
// {} : true

// var hasLicense = {};

// hasLicense ? console.log("You are eligible to drive a car.") : console.log("You need a driving license to drive a car.");


// /* Functions
// A function is a block of code designed to perform a particular task.   
// */


function name(params) {
    // code which needs to be executed
}

// // var a = 10;
// // var b = 20;
// // var sum = a + b;
// // console.log("Sum of a and b is:", sum);

// // var a = 10;
// // var b = 20;
// // var sum = a - b;
// // console.log("Sub of a and b is:", sum);

// // var a = 10;
// // var b = 20;
// // var sum = a * b;
// // console.log("Mul of a and b is:", sum);

// // var a = 10;
// // var b = 20;
// // var sum = a / b;
// // console.log("Div of a and b is:", sum);



// // //syntax of function
// function calculateAndLog(a, b, operation) {
//     if (operation === 'add') console.log("Sum of a and b is:", a + b);
//     else if (operation === 'sub') console.log("Sub of a and b is:", a - b);
//     else if (operation === 'mul') console.log("Mul of a and b is:", a * b);
//     else if (operation === 'div') console.log("Div of a and b is:", a / b);
//     else console.log("Invalid operation");
// }      

// // // Function Calls
// calculateAndLog(10, 20, 'add');
// calculateAndLog(10, 20, 'sub');
// calculateAndLog(10, 20, 'mul');
// calculateAndLog(10, 20, 'div');


//Function expressions

// let greet = function(name) {
//     return "Hello, " + name + "!";
// }

// console.log(greet("Alice"));

// // Arrow Functions

let greetArrow = (name) => {
    return "Hello, " + name + " from Arrow Function!";
}


// //arrow function syntax
// (params)=>{
//     //code to be executed
// }

// Loops

// for loop
// When you know the exact number of iterations in advance

// for (initialization; condition; increment/decrement) {
//     // code to be executed in each iteration
// }

for (let i = 1; i <= 3; i++) {
    var no_of_Rounds_in_race = 3;
    if (i < no_of_Rounds_in_race) {
        console.log("Runner completed round ", i);
    }else{
        if(i == no_of_Rounds_in_race){
            console.log("Runner completed the  laps");
        }
    }
}


// while loop
// When you don’t know the number of iterations, but you know a condition to stop

// while (condition) {
//     // code to be executed in each iteration
// }
var round = 1;
var no_of_Rounds_in_race = 1;
while (round < no_of_Rounds_in_race) {
    console.log("Runner completed round ", round);
    round++;
}
console.log("Runner completed the  laps");


// do-while loop
// When you want the loop to execute at least once, regardless of the condition

// do {
//     // code to be executed in each iteration
// } while (condition);

// example : 
var round1 = 1;
var no_of_Rounds_in_race1 = 1;
do {
    console.log("Runner completed round ", round1);
    round1++;
} while (round1 < no_of_Rounds_in_race1);
console.log("Runner completed the  laps");