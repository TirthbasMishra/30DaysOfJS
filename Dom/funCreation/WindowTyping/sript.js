// let win = document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//    if(dets.key===" "){
//       win.textContent="SPC";
//    }else{
//       win.textContent=dets.key;

//    }
// })

let btn = document.querySelector("#btn");
let inpId = document.querySelector("#fileInp")
btn.addEventListener("click", (t) => {
   inpId.click();
   console.log(t)
   
});

inpId.addEventListener("change", (e) => {
      console.log(e)
      let file = e.target.files[0];
      // console.log(file.name);
      if(file){
         btn.textContent = file.name;
      }else{
         console.log("file not exist")
      }
   });
