const nav_button = document.querySelector("#button");
const navbar = document.querySelector("#navbar");

nav_button.addEventListener("click",() => {
    navbar.classList.toggle("hidden");
})
