export function responsiveNabar() {
    const navBurger = document.querySelector(".burger");
    const navItems = document.querySelector(".nav-items");
  
    navBurger.addEventListener("click", () => {
      navItems.classList.toggle("active");
    });
  }
  