// dark mode
const toggle = document.getElementById("scroll-to-top");
const body = document.body;
const head = document.querySelector("header");

toggle.addEventListener("click", function () {
    this.classList.toggle("bi-moon");
    this.classList.toggle("bi-brightness-high-fill");
    body.classList.toggle("dark-mode");
});
// dark mode //