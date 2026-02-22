// Arrays can be described as a data structure that can be store collection of data , in a linear contiguous orientation in the memory 
// data structure these are different structures that can prepare to store data in  different ways depending on our use case 
// let arr = [1, 2, 3,4,5,6,7,8];
// arr.push(5); // Add to end
// arr.pop(); // Remove last
// arr.shift(); // Remove first
// arr.unshift(0); // Add to start
// arr.splice(1, 2); // Remove 2 items starting at index 1
// // arr.reverse(); // Reverse order
// console.log(arr.reverse())

// let newArr = arr.slice(1, 3); // Copy from index 1 to 2
// arr.sort((a,b)=>a-b);
// console.log(arr.sort((a,b)=>a-b))
// Lexical sort by default

// for(let name of studentNames){
//    console.log(name);
// }
// let studentNames =["chamnan","hitesh","govinda","nilesh","saif"];

// let filterNames = studentNames.filter(function(name,index){
//       return index%2==0;
// });

// console.log(filterNames);

// let[firstname,secondname]= studentNames;

let arr = [350,360,370,380,310]

// . Map prices to include GST (18%)

let gstArr = arr.map(val => +(val * 0.18).toFixed(1));
console.log(gstArr)
// . Reduce salaries to calculate total payroll
let newSal = arr.reduce((acc,val)=>acc+val,0)
// . Find the first student with grade 
let value = arr.find(n=>n>375);
// . Write a function to reverse an array
arr.reverse();
// . Sort array of ages in ascending order
arr.sort((a,b)=>a-b);
// . Destructure first two elements of an array
let [fistnum, ,secondnum]=arr;
// . Use some() to check if any student failed
let pass = arr.some(n=>n>305)
// . Use spread to copy and add new item
let newArr = [...arr,340];
