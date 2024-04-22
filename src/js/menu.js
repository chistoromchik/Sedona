export const startMenu = () => {
    const openButton = document.querySelector(".main-header__button");
    const menu = document.querySelector(".main-header__nav");
    const closeButton = document.querySelector(".main-header__button-close");

    openButton.addEventListener("click", () => {
        menu.classList.add("open");
    })
    closeButton.addEventListener("click", () => {
        menu.classList.remove("open");
    })
}