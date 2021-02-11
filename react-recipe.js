const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".menu-items");
const mainMenu = document.querySelector(".main-menu");
menu.addEventListener("click", () => {
    menuItems.classList.toggle("open");
    mainMenu.classList.toggle("fadeMainMenu");
});