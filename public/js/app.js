let btn = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});


let arrows=document.querySelectorAll(".arrow");
for(var i =0; i <arrows.length ;1++){
    arrows[i].addEventListener("click", (e) =>{
        let arrowsParent = e.target.parentElement.parentElement;

        arrowsParent.classList.toggle("show");
    }) 
}
