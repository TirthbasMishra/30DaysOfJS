let h1 = document.createElement("h1");
h1.textContent="hey mera bhai";
document.body.append(h1);
// h1.style.fontFamily="Gilroy"
h1.classList.add('hulu')
console.dir(h1);
let inp = document.querySelector("input");

inp.addEventListener("input",(t)=>{
   // if(t.data!==null){
   //    console.log(t.data);
   // }
   console.log(t);
})
//  Change event tab use hota hai jab input, select ya text area main koi change hojaye

let sel = document.querySelector("select");
let device = document.querySelector("h1");
sel.addEventListener("change",(c)=>{
console.log(c)
   device.textContent=`${c.target.value} selected device`;
})
