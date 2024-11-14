const navToggle = document.querySelector(".nav-toggle")
const navBar = document.querySelector(".navbar")
navToggle.addEventListener ("click", () => {
    navBar.classList.toggle("nav_active");
})