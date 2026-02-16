// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.
// ----------------------------Answer-------------------------
// let val = prompt("Enter the distance in kilometer");
// console.log(`the given val in meter is ${val*1000} m and in centimeter is ${val*100000} cm`);

// Question-2:    WAP to input radius of a circle and log the area of circle.
// ----------------------------Answer-------------------------
// let val = prompt("Enter the radius of circle");
// console.log(`Area of a circle ${val*val*Math.PI}`)

// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.
// ----------------------------Answer-------------------------

// let val = +prompt("Enter 1st number");
// let val2 = +prompt("Enter 2nd number");

// console.log(`sum : ${val+val2} \n sub: ${val-val2} \n mul: ${val*val2} \n div: ${val/val2} `)

// Question-4:    WAP to calculate total marks in two subject and then calculate percentage.
// ----------------------------Answer-------------------------

// let markInEnglish = +prompt("Enter Marks in English");
// let markInMath = +prompt("Enter Marks in Math");
// if (
//    isNaN(markInEnglish) || 
//    isNaN(markInMath) ||
//    markInEnglish < 0 || 
//    markInEnglish > 100 ||
//    markInMath < 0 || 
//    markInMath > 100
// ) {
//    alert("Write a valid mark between 0 and 100");
// } else {
//    let total = markInEnglish + markInMath;
//    console.log(`percentage: ${(total / 200) * 100}%`);
// }

// ----------------------------Answer-------------------------

// let markInEnglish = +prompt("Enter Marks in English");
// let markInMath = +prompt("Enter Marks in Math");

// function isValidMark(mark) {
//    return !isNaN(mark) && mark >= 0 && mark <= 100;
// }

// if (!isValidMark(markInEnglish) || !isValidMark(markInMath)) {
//    alert("Enter valid marks between 0 and 100");
// } else {
//    let total = markInEnglish + markInMath;
//    let percentage = (total / 200) * 100;
//    console.log(`Percentage: ${percentage}%`);
// }






// Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.
// ----------------------------Answer-------------------------


// let length =+prompt("Enter length in rectangle");
// let breath =+prompt("Enter breath in rectangle");

// console.log(`the rectangle area is ${length*breath} metersquare perimeter is ${2*(length + breath)} meter `)


// Question-6:    WAP to input n numbers and log the average of those number.
// ----------------------------Answer-------------------------
// let val = +prompt("enter how many numbers you want to take input");

// if (isNaN(val) || val <= 0) {
//    console.log("Enter a valid count");
// } else {

//    let sum = 0;

//    for (let i = 1; i <= val; i++) {
//       let number = +prompt(`enter number ${i}:`);

//       if (isNaN(number)) {
//          console.log("Invalid number entered");
//          break;
//       }

//       sum += number;
//    }

//    console.log(`average: ${sum / val}`);
// }


// Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.
// ----------------------------Answer-------------------------

// let km = +prompt("Enter distance between two cities (in km):");

// if (isNaN(km) || km < 0) {
//    console.log("Enter a valid distance");
// } else {
//    let meter = km * 1000;
//    let centimeter = km * 100000;
//    let feet = km * 3280.84;
//    let inches = km * 39370.1;

//    console.log(`Distance in meters: ${meter} m`);
//    console.log(`Distance in centimeters: ${centimeter} cm`);
//    console.log(`Distance in feet: ${feet} ft`);
//    console.log(`Distance in inches: ${inches} in`);
// }

// Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

// ----------------------------Answer-------------------------

// let fahrenheit = +prompt("Enter temperature in Fahrenheit:");

// if (isNaN(fahrenheit)) {
//    console.log("Enter valid temperature");
// } else {
//    let centigrade = (fahrenheit - 32) * 5 / 9;
//    console.log(`Temperature in Centigrade: ${centigrade} °C`);
// }

// Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.
// ----------------------------Answer-------------------------

// let quantity = +prompt("Enter quantity:");
// let rate = +prompt("Enter rate per product:");

// if (isNaN(quantity) || isNaN(rate) || quantity < 0 || rate < 0) {
//    console.log("Enter valid quantity and rate");
// } else {
//    let amount = quantity * rate;
//    let discount = amount * 0.10;
//    let finalAmount = amount - discount;

//    console.log(`Total Amount: ₹${amount}`);
//    console.log(`Discount (10%): ₹${discount}`);
//    console.log(`Amount after discount: ₹${finalAmount}`);
// }

// Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.
// ----------------------------Answer-------------------------


// let principal = +prompt("Enter principal amount:");
// let rate = +prompt("Enter rate of interest:");
// let years = +prompt("Enter number of years:");

// if (
//    isNaN(principal) || 
//    isNaN(rate) || 
//    isNaN(years) ||
//    principal < 0 || 
//    rate < 0 || 
//    years < 0
// ) {
//    console.log("Enter valid inputs");
// } else {
//    let simpleInterest = (principal * rate * years) / 100;
//    console.log(`Simple Interest: ₹${simpleInterest}`);
// }
