// Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."
// ----------------------------Answer-------------------------

// let x = parseInt(prompt("enter the number"))
// function checkNumber(num){
//    return !isNaN(num);
// }
// if(checkNumber(x)&&x>10){
//    console.log("x is greater than 10");
// }else{
//    console.log("x is not greater than 10")
// }

// Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).
// ----------------------------Answer-------------------------

// let x = parseInt(prompt("enter the number"))
// function checkNumber(num){
//    return !isNaN(num);
// }
// if(checkNumber(x)&&x>=18){
//    console.log("x user is illegible for drive a car");
// }else{
//    console.log("x user is not illegible for drive a car")
// }


// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).
// ----------------------------Answer-------------------------
// let x = +prompt("Write your Score")
// function isNum(number){
//    return !isNaN(number);
// }

// if(isNum(x)&&x>=90&&x<=100){
//    console.log("A");
// }else{
//    console.log("not passed")
// }
// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).
// ----------------------------Answer-------------------------

// Taking input from the user (0-23 hour format)
// let hour = parseInt(prompt("Enter the current hour (0-23):"));

// if (hour >= 0 && hour < 12) {
//     console.log("Good morning.");
// } else if (hour >= 12 && hour < 17) {
//     console.log("Good afternoon.");
// } else if (hour >= 17 && hour < 21) {
//     console.log("Good evening.");
// } else if (hour >= 21 && hour <= 23) {
//     console.log("Good night.");
// } else {
//     console.log("Invalid input! Please enter a number between 0 and 23.");
// }


// Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).
// ----------------------------Answer-------------------------
// let dayNum = parseInt(prompt("Enter the day number (1-7):"));

// switch(dayNum){
//    case 1:{console.log("sunday");} break;
//    case 2:{console.log("Monday");} break;
//    case 3:{console.log("tuesday");} break;
//    case 4:{console.log("wednessday");} break;
//    case 5:{console.log("thursday");} break;
//    case 6:{console.log("friday");} break;
//    case 7:{console.log("saturday");} break;
//    default:{console.log("INVALID DAY")}
// }



// Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).
// ----------------------------Answer-------------------------

// let monthNum = parseInt(prompt("Enter the month number (1-12):"));

// switch(monthNum){
//    case 1:{console.log("JAN");} break;
//    case 2:{console.log("FEB");} break;
//    case 3:{console.log("MARCH");} break;
//    case 4:{console.log("APR");} break;
//    case 5:{console.log("MAY");} break;
//    case 6:{console.log("JUN");} break;
//    case 7:{console.log("JUL");} break;
//    case 8:{console.log("JUL");} break;
//    case 9:{console.log("JUL");} break;
//    case 10:{console.log("JUL");} break;
//    case 11:{console.log("JUL");} break;
//    case 12:{console.log("JUL");} break;
//    default:console.log("INVALID MONTH");
// }


// Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.
// ----------------------------Answer-------------------------


// let fruit = "Apple"; // This could also come from a prompt()

// switch (fruit.toLowerCase()) {
//   case "apple":
//     console.log("This is a pome fruit, known for being crunchy and sweet.");
//     break;
//   case "banana":
//     console.log("This is a tropical berry, high in potassium.");
//     break;
//   case "orange":
//     console.log("This is a citrus fruit, famous for its Vitamin C content.");
//     break;
//   case "mango":
//     console.log("This is a stone fruit (drupe), often called the 'king of fruits'.");
//     break;
//   default:
//     console.log("Unknown fruit. I'm sure it's delicious, though!");
// }


// Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.
// ----------------------------Answer-------------------------
// let temp = 35;

// switch (true) {
//     case (temp < 15):
//         console.log("Low");
//         break;
//     case (temp >= 15 && temp <= 30):
//         console.log("Medium");
//         break;
//     case (temp > 30):
//         console.log("High");
//         break;
//     default:
//         console.log("Invalid Input");
// }



// Question-9:   WAP that classifies a number as positive, negative, even, or odd.
// ----------------------------Answer-------------------------
// let number = 35;

// switch (true) {
//     case (number < 0):
//         console.log("negative number");
//         break;
//     case (number>=0):
//         console.log("positive number");
//         break;
//     case (number%2==0):
//         console.log("even number");
//         break;
//     case (number%2!=0):
//         console.log("odd number");
//         break;
//     default:
//         console.log("not a positive, negative, even, or odd number");
// }



// Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."
// ----------------------------Answer-------------------------

// let userName = "tirthbas";

// if(userName.length<6){
//    console.log("Username too short");
// }else if(userName.length>15){
//    console.log("Username too long");
// }else{
//    console.log("Username accepted.")
// }