document.addEventListener("DOMContentLoaded", function () {
  var burgerMenu = document.querySelector(".burger-menu");
  var dropdownContent = document.querySelector(".dropdown-content");

  burgerMenu.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
  });
});
