const hambugerIcon = document.querySelector(".hamburger-icon").addEventListener("click", showOrHideNavList);
const navList = document.querySelector(".navbar__list");

function showOrHideNavList() {
    navList.classList.toggle("show");
}