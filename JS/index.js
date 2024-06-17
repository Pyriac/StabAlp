// MENU LIST MOBILE

const popButton = document.querySelector("#popButton");

function toggleNav() {
  menuNav.classList.contains("show")
    ? (menuNav.classList.remove("show"),
      setTimeout(() => (menuNav.style.display = "none"), 250))
    : ((menuNav.style.display = "block"),
      setTimeout(() => menuNav.classList.add("show"), 250));
}

popButton.addEventListener("click", toggleNav);
