//Comments in JavaScript
//this prints hello world
/*this prints hello
world in the console*/
// console.log("hello world!")

//Arthimetic Operators
// let a = 5;
// let b = 2;
// console.log("a = ",a , "& b = ",b);
// console.log("a + b = ", a + b);
// console.log("a - b = ",a - b);
// console.log("a * b = ",a * b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a % b);
// console.log("a ** b = ",a**b);

//Unary Operators
// let a = 5;
// let b = 2;
// // a--;
// console.log("a = ",a , "& b = ",b);
// console.log("a = ", a);

// pre increment and decrement => ++a and --a
// console.log("++a = ",++a);
// console.log("++a = ", a);

// console.log("--a = ",--a)

// post increment and decrement => a++ and a-- 
// post increment (a++) => first prints the value and then changes the value in next line.
// console.log("a++ = ",a++); //prints 5
// console.log("a++ ", a); //and then chagnes the value to 6 in next line

//Assignment Operators
// let a = 5;
// let b = 2;
// a **= 4;
// console.log("a = ",a);

//Comparison Operators
// let a=5;
// let b=5;
// console.log(a==b);

//Not equals to
// let a=5;
// let b=2;
// console.log(a!=2);

// let a=5;
// let b="5";
// console.log(a==b);  //true because JS implicitly converts string of 5 to number and compares

//Triple === (checks value as well as datatype of variables)
// let a=5;
// let b="5"
// console.log(a===b);

// let a=5;
// let b="5"
// console.log(a!==b);

// let a = 5;
// let b = 3;
// console.log(a>=b);

// //Logical Operators
// let a = 8;
// let b = 7;

//LOGICAL AND (&&)
// console.log(a>b && a===8); //true
// console.log(a<b && a===8) //false
// console.log(a>b && a===7); //false
// console.log(a<b && a===7); //false

//LOGICAL OR (||) (Except F F == F it returns true for other three cdn)
// console.log(a<b || a===8) //true

//NOT Operator (converts T to F and F to T)
// console.log(!(a>b)) //false
// console.log(!(a===7)); //true

//Conditional Statements

//1. If statement
// let age = 17;
// if(age >= 18){
//     console.log("You can vote.")
// }

// if(age <18){
//     console.log("You cannot vote.")
// }

// let mode = "light"
// let color;
// if (mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color = "white";
// }

// console.log(color);

//2. IF-else statement
// let mode ="light";
// let color;
// if (mode == "dark"){
//     color = "black";
// }else{
//     color = "white";
// }

// console.log(color);

// let age = 17;
// if (age >= 18){
//     console.log("You can vote.")
// }else{
//     console.log("You cannot vote.")
// }

//odd or even
// let val = 7;
// if(val % 2 === 0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

//else-if statement

// let mode ="dark";
// if (mode === "dark"){
//     color = "black";
// }else if (mode === "blue"){
//     color = "blue";
// }else if (mode === "pink"){
//     color = "pink";
// }else {
//     color = "white";
// }
// console.log(color);

//Ternary Operators (simpler if-else)
//condition? true output : false output

// let age =17;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

//OR
// let age = 15;
// age >= 18 ? console.log("Adult") : console.log("Not Adult");

//MDN Docs (switch case)
// let exp = 'Oranges';
// switch (exp) {
//     case 'Oranges':
//         console.log('Oranges are Rs. 100 per kg.');
//         break;
//     case "Papayas":
//         console.log("Papayas are 200 per kg.");
//         break;
//     case "Apples":
//         console.log("Apples are 250 per kg.s");
//         break;
//     default:
//         console.log(`Sorry, we are out of ${exp}`);
// }

//Let's Pratice
//QN. 1 Get user to input a number using prompt ("Enter a number:"). Check if the number is a multiple of 5 or not.
// let num = prompt("Enter a number: ");
// if (num % 5 === 0){252
//     console.log(num, "is a multiple of 5");
// }else{
//     console.log(num, "is not multiple of 5");
// }

//QN. 2 Write a code which can give grades to students according to their scores:
// let scroes = prompt("Enter your scrore (0-100): ")
// let grade;
// if(scroes >= 90 && scroes <=100){
//     grade = 'A';
// }
// else if(scroes>=70 && scroes <=89){
//     grade = 'B';
// }
// else if(scroes>=60 && scroes <=69){
//     grade = 'C'
// }
// else if(scroes>=50 && scroes <=59){
//     grade = 'D'
// }
// else if(scroes>=0 && scroes <=49){
//     grade = 'F'
// }
// console.log(grade);

//Loops & Strings
