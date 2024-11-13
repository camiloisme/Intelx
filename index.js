const navToggle = document.querySelector (".nav-toggle")
const navActive = document.querySelector (".nav_active")
navToggle.addEventListener (click, () => {
    navActive.classList.toggle("nav_active");
})