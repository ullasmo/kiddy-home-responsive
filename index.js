const menu = document.getElementsByClassName("menu")[0];
const header = document.getElementsByTagName("header")[0];

menu.addEventListener("click", () => {
  header.classList.toggle("mob-nav");
});
