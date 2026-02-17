console.log("start");
// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).
// let num1 =+prompt("Enter your number")
// let num2 =+prompt("Enter your number")
// if(isNaN(num1)||isNaN(num2)){
//    console.log("Write a number")
// }
// let addition = num1 +num2;
// let subtraction = num1 -num2;
// let multiplication = num1 *num2;
// let division = num1 /num2;

// console.log(`addition: ${addition},\n subtraction: ${subtraction},\n multiplication: ${multiplication},\n division: ${division}`)


// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

// let num = 10;
// let num2 = 20;

// num = num2;
// console.log(num);

// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.
// let num1 = 9;
// let num2 =3;
// console.log(num1==num2);
// console.log(num1>num2);
// console.log(num1<num2);



// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

// let a = 10;
// let b = true;
// let c = false;

// if (a == 10 && b) {
// console.log("true");
// } else {
// console.log("false");
// }

// if (a == 10 || c) {
// console.log("true");
// } else {
// console.log("false");
// }

// //for me NOT ! is not easy to understand so easy method is to just reverse the result
// if (!b) {
// console.log("true");
// } else {
// console.log("false");
// }
// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.

//Bitwise AND - compare 2 bit and return 1 if both one
// let a = 13; //1101
// let b = 11; // 1011

// console.log(a & b); //output 1001 = 9

// //Bitwise OR - compare 2 bit and return 1 if either one
// let c = 13; //1101
// let d = 11; // 1011

// console.log(c | d); //output 1111 = 15

// //Bitwise XOR - compare 2 bit and return 1 if bit are different

// let x = 13; //1101
// let y = 11; // 1011

// console.log(x ^ y); //output 0110 = 6

// //Bitwise NOT - this work on one decimal value and change its bits to 0 to 1 and 1 to 0
// let m = 12; //1100
// console.log(~ m); //output 0011

// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.
// let x = 2;
// let y = 5;

// let compare = x > y ? x : y;

// console.log(y);

// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.

// let num = 2;
// let st = "hi!"
// let bool = true
// let nullValue = null
// let undefinedVal = undefined;
// let obJect = {name:"bird"};

// console.log(typeof(num));
// console.log(typeof(st));
// console.log(typeof(bool));
// console.log(typeof(nullValue));
// console.log(typeof(undefinedVal));
// console.log(typeof(obJect));





// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.

// let name = "Tirthbas";
// let surName = "Mishra";
// let number = 72156
// console.log("1.", name + surName);
// console.log("2.", name + " " + surName);
// console.log("3.", name + " " + number);
// console.log("4.", name + " " + surName); 

// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.
// let a;
// console.log(typeof(a));
// //output undefined

// let x = 1;
// console.log(typeof(x));
// //output number

// let y = "1";
// console.log(typeof(y));
// //output string

// let z = "TEXT"
// console.log(typeof(z));
// //output string

// const pi = 3.14;
// console.log(typeof(pi));
// //output number

// let m = {};
// console.log(typeof(m));
// //output object

// let n = Function
// console.log(typeof(n));
// //output function

// let o = [];
// console.log(typeof(o));
// //output object

// let p = null;
// console.log(typeof(p));
// //output object

// let q = undefined;
// console.log(typeof(q));
// //output undefined

// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.

// let myAddress = {
//    house:"PlatinumPg",
//    pin:700088,
//    floor:5,
//    room:"504"
// }

// console.log(typeof myAddress);
// console.log("house" in myAddress);

// if("house" in myAddress){
//    console.log("yes it exists");
// }
// else{
//    console.log("no not exists");
// }