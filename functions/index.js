// Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".
// function showName(name){
//    console.log(`Hello, ${name}!`)
// }
// let Name = prompt("Write your Name");
// showName(Name);
// Question-2:  Write a function that takes two parameters, adds them together, and returns the result.

// Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.
// function NoonTime(hour){
// if(hour>=0&&hour<=12){
//    console.log("morning")
// }else if(hour>=13&&hour<=17){
//    console.log("afternoon")
// }else if(hour>=18&&hour<=24){
//    console.log("night");
// }
// }
// NoonTime(2);
// NoonTime(13);
// NoonTime(21);

// Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

// Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.
// function raisingExpo(base,exponent){
// console.log(base**exponent);
// }
// raisingExpo(2,3);
// raisingExpo(3,3);


// Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.

// Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.
// // Global variable
// let globalVar = "I am a Global Variable";

// function showGlobal() {
//     console.log("Inside showGlobal():", globalVar);
// }

// function showLocal() {
//     // Local variable
//     let localVar = "I am a Local Variable";
//     console.log("Inside showLocal():", localVar);
// }

// // Calling functions
// showGlobal();  // Accessible
// showLocal();   // Accessible

// // Accessing outside function
// console.log("Outside function:", globalVar);  // ✅ Works

// console.log(localVar); // ❌ Error: localVar is not defined




// Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.
// function outerFunction(){
//    let outerVal = 23
//    return function(){
//       console.log(outerVal)
//    }
// }
// outerFunction()();
// Question-9:  Write a recursive function to calculate the factorial of a given number.

// function factorial(n){
//    if(n < 0){
//       return "Factorial not defined for negative numbers";
//    }

//    if(n === 0 || n === 1){
//       return 1;
//    }

//    return n * factorial(n - 1);
// }

// Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).
// function f(x){
//    return x+2;
// }
// function g(x){
//    return 2*x;
// }

// function compose(f, g){
//    return function(x){
//       return f(g(x));
//    }
// }

// let h = compose(f, g);

// console.log(h(2)); // 6

// *** If you know Array and async JS , attempt these Problems *** 

// Question-1:  Write a function that takes an array and a callback function. Apply the callback function to each element of the array and return a new array with the modified elements.

// Question-2:  Write a function that takes an array of numbers and returns a new array containing only the odd numbers.

// Question-3:  Write a function that takes an array of numbers and returns a new array where each element is doubled.

// Question-4:  Write a function that takes an array of strings and returns a new array where each string is transformed to uppercase.

// Question-5:  Write a function that uses setTimeout to simulate an asynchronous operation. The function should print a message to the console after a specified delay.

// Question-6:  WAP to perform read and write operation in a text file in JS.



// let arr = [10,11,14,120,-1];
// for(const val of arr){
//    console.log(val);
// }