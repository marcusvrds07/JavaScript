// let lista1 = document.getElementById("lista1");
// console.log(lista1);

// let americanos= document.getElementsByClassName("america");
// console.log(americanos);

// for(let i = 0;i < americanos.length; i++) {
//     alert(americanos[i].innerHTML);
// }

let lista2 = document.getElementById("lista2").getElementsByTagName("li");
console.log(lista2);
// alert(lista2[2].innerHTML);

// let saquerema = document.querySelector(".america");
// console.log(saquerema);

let lis2 = document.querySelectorAll("#lista2 li");
console.log(lis2)

lis2.forEach(function(li){
    alert(li.innerHTML);
})