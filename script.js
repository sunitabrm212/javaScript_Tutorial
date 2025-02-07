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

// let a = Number(prompt("Enter first number: "));
// let b = Number(prompt("Enter second number: "));
// let exp = prompt("Enter your expression (+, -, *, /): ");
// switch (exp){
//     case '-':
//         console.log(a - b);
//         break;
//     case '*':
//         console.log(a * b);
//         break;
//     case '/':
//         console.log(a / b);
//         break;
//     case '+':
//         console.log(a + b);
//         break;
//     default:
//         console.log("Invalid operator. Please enter '+', '-', '*', '/'");
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
// for (let i = 1; i<=5; i++){
//     console.log("Apna College");
// }

//Calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <=5; i++){
//     sum += i;
// }
// console.log(sum);

//Calculate sum of 1 to n
// let sum = 0;
// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i<=n; i++){
//     sum += i;
// }
// console.log("sum = ",sum);

//Infinite Loop
//loop that never ends

//while loop
// let i = 1;
// while (i<=5){
//     console.log("i = ",i);
//     i++;
// }

//do-while loop -> even though the condition is false it runs once.
// let i = 11;
// do{
//     console.log("i = ",i);
// }while(i<=10);

//for-of loop -> helps to iterate in string and arrays
// let str = "ApnaTimeAyega";
// let len = 0;
// for (let i of str){
//     console.log("i = ",i);
//     len++;
// }
// console.log("lenght of string is ",len);

//for-in loop => works in objects and arrays only
// let student = {
//     name : "Sunita Baram",
//     age : 24,
//     cgpa : 7.5,
//     isPass : true,
//     country : "America"
// };

// for (let key in student){
//     console.log("key = ",key, "val = ", student[key]);
// }

//Let's pratice
//QN. 1 Print all even numbers from 0 to 100.
// for (let i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

//QN 2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
// let a =174
// let b ="9"
// console.log(a + b);

// let gameNumber = 36;
// let userNumber = Number(prompt("Guess the game number:"));
// while (userNumber !== gameNumber){
//     if (userNumber > gameNumber){
//         userNumber = Number(prompt("Your guess number is greater than game number. Try lesser number"));
//     }else{
//         userNumber = Number(prompt("Your guess is lesser than game number. Try greater number"));
//     }

// }
// console.log("Congratulations! You have guessed the correct number",gameNumber);

//WAP to check if a number given by user is prime or not
// num = Number(prompt("Enter a number: "));
// count = 0;
// for (let i = 1; i <= num; i++){
//     if (num % i === 0){
//         count++;
//     }
// }
// if (count === 2){
//     console.log("Prime Number");
// }else{
//     console.log("Not Prime");
// }

//Strings: sequence of characters 
// let str = "ApnaCollege";
// console.log(str[9]);

//Template Literals
// let specialString = `This is a template literal`;
// console.log(specialString);

// let obj = {
//     item : 'pen',
//     price : 10
// };
// ``-> back tick
// console.log("The cost of", obj.item, "is", obj.price, "rupees");
//printing by using template literals
// console.log(`The cost of ${obj.item} is ${obj.price} rupees`);

//Escape characters [\n, \t]
// let str = "Apna\nCollege"; //prints college in next line
// console.log(str.length); //prints 12 becoz it takes escape characters as a single char
// let str = "Apna\tCollege";
// console.log(str.length);

//String Methods in JS
//str.toUpperCase()
// let str = "ApnaCollege";
// str = str.toUpperCase();
// console.log(str);

// let str = "ApnaCollege";
// str = str.toLowerCase();
// console.log(str);

// let str = "     Apna College  JS       ";
// console.log(str.trim()); //removes whitespaces from before and after string

//str.slice(start, end) => returns part of string
// let str = "ApnaCollege";
// console.log(str.slice(1,-1));

//str1.concat(str2) //joins str2 with str1
// let str1 = "apna";
// let str2 = "college";
// let res = str1.concat(str2);
// console.log(res);
//OR
// console.log(str1 + str2);
// console.log("hello"+123); //JS implicitly converts number to string

//str.replace(searcVal, newVal)
// let str = "hello";
// console.log(str.replace('lo','p'));

//str.charAt(index)
// let str = "hello";
// console.log(str.charAt(4));

//QN1. Propmt the user to enter their full name. Generate a username for them based on the imput. Start username with @, followed by thier full name and ending with the fullname length.
// userName = prompt("Enter your full name: ");
// // userName_len = userName.length;
// // console.log(`Your username name is @${userName}${userName_len}`);

// //or 
// username = '@'+userName+userName.length;
// console.log(username);

//Arrays => collections of items. Arrays are mutable
// let marks = [97, 82, 73, 45, 33];
// console.log(marks);
// console.log(marks.length);

// let heros = ["ironman", "thor", "hulk", "spiderman"];
// console.log(heros);
// console.log(heros.length);

//for loop
// let heros = ["ironman", "thor", "hulk", "spiderman", "perman", "antman", "shaktiman"];
// for (let i = 0; i < heros.length; i++){
//     console.log(heros[i]);
// }

//for of
// for (let el of heros){
//     console.log(el);
// }

// let cities = ["ktm", "bkt", "lalitpur", "pokhara", "gorkha"];
// for (let city of cities){
//     console.log(city.toUpperCase());
// }

//Let's Pratice
//QN1. Average marks
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let i = 0; i < marks.length; i++){
//     sum += marks[i];
// }
// let average = sum/marks.length;
// console.log(`Average marks is ${average}`);

//QN2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% off on them. Change the array to store final price after applying offer.
// let price = [250, 645, 300, 900, 50]
// for (let i = 0; i < price.length; i++){
//     price[i] = price[i] - (0.1 * price[i]);
//     console.log(`Value after discount is ${price[i]}`);
// }

//Arrays Method
//push() => adds from the end array
let fruits = ["apple", "banana", "orange", "litchi"]
// fruits.push("papaya","mango");
// console.log(fruits);

//pop() => removes item from the end
// delItem = fruits.pop();
// console.log(fruits);
// console.log("deleted ",delItem);

//Converting array to String
// console.log(fruits.toString());
// console.log(fruits);

// let marks = [10, 20, 30, 40];
// console.log(marks.toString());

//Concat()
// let marvelHeros = ["ironman", "hulk", "spiderman"];
// let dcHeros = ["superman", "batman"];
// let indianHeros = ["shaktiman", "krish"];
// let heroes = marvelHeros.concat(dcHeros, indianHeros);
// console.log(heroes);

//unshift / shift
// let marvelHeros = ["ironman", "hulk", "spiderman"];
// // marvelHeros.unshift("thor"); //adds at first index
// marvelHeros.shift(); // del first index value 
// console.log(marvelHeros);

//Slice() : returns a piece of array
// let marvelHeros = ["ironman", "hulk", "spiderman", "antman", "hanuman", "Dr.Strange"];
// console.log(marvelHeros.slice(1,3)); //doesn't change in original array
// console.log(marvelHeros);

//Splice() : change original array(add, removeCount, replace)
let arr = [1, 2,3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);
// console.log(arr);

//Add Element
// arr.splice(2, 0, 101);

//Delete Element
// arr.splice(3, 1);

//Replace Element
// arr.splice(3, 1, 101);

//Let's Practice
//QN. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//Remove the first company from the array
// companies.splice(0, 1);
// console.log(companies);

//Remove Uber & Add Ola in its place
// companies.splice(2, 1, "Ola");
// console.log(companies);

//Add Amazon at the end
// companies.push("Amazon");
// console.log(companies);

arr = [1,2,4,0]
arr_copy = arr.slice();
console.log(arr_copy);