let book = {
   title:"rich dad poor dad",
   auther:"robert kewosaki",
   price:120

}
console.log( book["price"])
console.log( book.title)

let student ={
   name:"subha",
   age:34,
   hobby:{
      one:"dance",
      two:"music"
   }
}

let {title} = book;
let{age} = student;

for(let key in student){
   console.log(key, student[key])
}

let arr = Object.entries(student)


let newObj = JSON.parse(JSON.stringify(student));

let hobbyone = student?.hobby?.one;

let key = "name";
let studentone ={
   [key]:"madhu"
};

console.log(studentone)