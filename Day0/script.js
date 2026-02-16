// console.log("hii")
// for(let i=1;i<101;i++){
//    console.log(i);
//    if(i % 7 === 0){
//       break;
//    }
// }

// for(let i =1;i<101;i++){
//    if(i%3==0) continue;
//    console.log(i)
// }
let count =0;
for(let i =1;i<101;i++){
   if(i%2!=0){
      count++
      console.log(i)
   }
   if(count==5) break;
}