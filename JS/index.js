// MENU LIST MOBILE

const popButton = document.querySelector("#popButton");

function toggleNav() {
  const menuNav = document.querySelector(".menuNav");
  menuNav.style.display = menuNav.style.display === "none" ? "flex" : "none";
}

popButton.addEventListener("click", toggleNav);
