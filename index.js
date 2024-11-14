const navToggle = document.querySelector(".nav-toggle")
const navBar = document.querySelector(".navbar")
navToggle.addEventListener ("click", () => {
    navBar.classList.toggle("nav_active");
    if (navBar.classList.contains("nav_active")){
        navToggle.setAttribute("aria-label", "Cerrar Menú");
        }
        else {
            navToggle.setAttribute("aria-label", "Abrir Menú");
        }
      
    }
)