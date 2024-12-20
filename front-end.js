const burgerMenu = document.querySelector(".menuBurger")

const menu = document.querySelector(".off-screen")

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    menu.classList.toggle("active");
})