const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".menu-items");
const mainMenu = document.querySelector(".main-menu");
const background = document.querySelector(".background");
const wheele = document.querySelector(".wheele");
const box1 = document.querySelector(".wheele .menubox:nth-child(1)");

const overlayPanel = document.querySelector(".overlay");
const closeX = document.querySelector(".close");
const overlayImg = document.querySelector(".overlay .full-panel img");
const targets = document.querySelector(".preview-panel img.active:target");


const previews = document.querySelectorAll(".preview-panel img");

menu.addEventListener("click", () => {
    menuItems.classList.toggle("open");
    mainMenu.classList.toggle("fadeMainMenu");
    // targets.classList.toggle("fade");
});

previews.forEach ( preview => {
    preview.addEventListener("click", function() {
        const src = this.src;
        overlayImg.src = src;
    });
})

box1.addEventListener("click", () => {
    overlayPanel.style.display = "block";
    nav.style.opacity = "0";
    mainMenu.style.opacity = "0";
    background.style.opacity = "0";
    wheele.style.opacity = "0";
    document.body.style.background = "#448A98";
});

closeX.addEventListener("click", () => {
    overlayPanel.style.display = "none";
    nav.style.opacity = "1";
    mainMenu.style.opacity = "1";
    background.style.opacity = "1";
    wheele.style.opacity = "1";
    document.body.style.backgroundColor = "rgb(247, 224, 12);"
    document.body.style.background = "linear-gradient(to right top, rgba(255, 255, 255, 0.9), rgba(238, 186, 16, 0.5))";
})

