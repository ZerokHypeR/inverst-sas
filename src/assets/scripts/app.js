let btn = document.querySelector(".fa-bars"); // Corrigir la selección del botón
let sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

let arrows = document.querySelectorAll(".arrow");
for (var i = 0; i < arrows.length; i++) { // Corrige el bucle
    arrows[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement; 
    });
}
