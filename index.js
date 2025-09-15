var name= "John Doe";    // String
var age= 30;        // Number 
var isEmployed= true;       // Boolean
var number = 45.67;    // Float
var fruits = ['Apple', 'Banana', 'Orange', 68, true];             // Array
var information = {                                              // Object
    name: 'John',
    age: 30,
    isEmployed: true
};
var x = null;                 // Null
var salary;                 // Undefined
// // console.log(salary);
// // salary = 50000; // valid
// // console.log(salary);


// // let var const
// // const name1 = "John Doe2";    // String
// // let age1 = 32;        // Number
// // age1 = 33; // valid
// // var age2 = 34; // valid
// // age2 = 35; // valid

// // console.log(information);
// // console.log(x);









// // OPERATORS

// Arithmetic Operators
var a = "10";     // String
var b = 10;       // Number
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division

//Comparison Operators
console.log("a === b:", a === b);
console.log("a == b:", a == b);
console.log("a != b:", a != b);
console.log("a !== b:", a !== b);

// Logical Operators
var isAdult = true;
var hasID = true; 
console.log("Whether the Person is Eligible to drive a Car :", isAdult && hasID);         // AND

// AND Operator Truth Table
// true && true = true
// true && false = false
// false && true = false
// false && false = false

var isAdult = false;
var ischild = false;

console.log("Whether the Person is Eligible to enter into Restaurant :", isAdult || ischild);         // OR

// OR Operator Truth Table
// true || true = true
// true || false = true
// false || true = true
// false || false = false

isAdult = true;
console.log("negative of the isAdult :", !isAdult);         // NOT  

// NOT Operator Truth Table
// !true = false
// !false = true



// Assignment Operators
var c = 20;
console.log("Initial value of c:", c);    //20
c += 5; // c = c + 5
console.log("c after c += 5:", c);    //25
c -= 3; // c = c - 3
console.log("c after c -= 3:", c);    //22
c *= 2; // c = c * 2
console.log("c after c *= 2:", c);    //44
c /= 4; // c = c / 4
console.log("c after c /= 4:", c);    //11







// Control Structures


var age = 2;
var hasLicense = true;

// If-Else Statement
if (condition) {
    // code to be executed if condition is true
}else {
    // code to be executed if condition is false
}

// Nested If-Else Statement

if (age >= 18) {
    if (hasLicense) {
        console.log("You are eligible to drive a car.");
    } else {
        console.log("You need a driving license to drive a car.");
    }
}else {
    if (age >= 16) {
        console.log("You are eligible to learning license.");
    }else {
        console.log("You are a minor and Currently not eligible to drive a car.");
    }
}




// Switch Statement

var day = 10;
if (day < 1 || day > 7) {
    console.log("Invalid day! Please enter a number between 1 and 7.");
}else{
    switch (day) {
      case 1:
          console.log("Monday");
          console.log("Today we have Theory class!");
          break;
      case 2:
          console.log("Tuesday");
          console.log("Today we have Review class!");
          break;
      case 3:
          console.log("Wednesday");
          console.log("Today we have Theory class!");
          break;
      case 4:
          console.log("Thursday");  
          console.log("Today we have Review class!");
          break;
      case 5:
          console.log("Friday");
          console.log("Today we have Interview Sessions!");
          break;

      default:
          console.log("It's Weekend! No classes scheduled.");
          break;
  }
}



