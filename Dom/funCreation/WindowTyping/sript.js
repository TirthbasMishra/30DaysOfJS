let win = document.querySelector("h1");
window.addEventListener("keydown",function(dets){
   if(dets.key===" "){
      win.textContent="SPC";
   }else{
      win.textContent=dets.key;

   }
})