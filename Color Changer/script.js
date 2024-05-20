let colors = ["red","yellow","goldenrod","aquamarine","cyan","chocolate","coral"];

 let btn = document.getElementById("btn");

 btn.addEventListener("click",function() {
    let randomcolors = colors[Math.floor(Math.random() * colors.length)];
    let con = document.getElementById("con");
    con.style.background = randomcolors;
 })