// const div = document.querySelector("#card");

// div.setAttribute('class', 'sla')
// console.log(div);

let link = document.querySelector(".link");

link.setAttribute("title", "site do google");

if(link.getAttribute("href") == "https://google.com") {
    link.removeAttribute("href");
}

if(link.hasAttribute("title")) {
    link.setAttribute("style", "background-color: red")
}

link.style.fontSize = "100px";