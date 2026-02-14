//  const fs = require("fs");
//  const contents = fs.readFileSync("a.txt","utf-8");
//  console.log("------------- my async ----------")
//  console.log(contents);
//  console.log("------------- my loop ----------")

//  for(let i=0;i<5;i++){
//     console.log("hii")
//  }

// function sum(a, b) {
//    return a + b;
// }

// function sub(a, b) {
//    return a - b;
// }

// function doArithmetic(a, b, fn) {
//    return fn(a,b);
// }


// const ans1 = doArithmetic(1,2,sum);
// const ans2 = doArithmetic(1,2,sub);

// const fs = require("fs");

// fs.readFile("a.txt","utf-8",function fileReadCallBack(err,content){
//    console.log(content)
// })

// let s= 0;
// for(let i =0;i<10000000000;i++){
// s+=i;
// }

// console.log(s);



// const a = 1;
// const b = 2;
// console.log(a);
// console.log(b);

// let beforeTime = Date.now;
// for(let i =0;i<10000000000000;i++){
//    let currentTime = Date.now();
//    if(currentTime-beforeTime>=1000){
//       break;
//    }
// }
// function Callback(){
//    console.log(a+b);
// }
// setTimeout(Callback,1000)
// console.log(a+b);

let ctr=0;
function Callback(){
   console.log(ctr);
   ctr+=1;
}
setInterval(Callback,1000);
let x=0;
for(let i =0;i<10000000000;i++){
   x+=i;
}
console.log(x);