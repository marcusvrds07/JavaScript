// let idCard = document.querySelector("#card");

// idCard.classList.add("card");

let button = document.getElementsByTagName("button");

button[0].addEventListener('click', function() {
    let paragrafo = document.getElementById("paragrafo");
    paragrafo.classList.toggle("hidden");
    paragrafo.classList.add("texto")
});