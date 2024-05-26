function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}
function toggleDropdown() {
  var dropdown = document.getElementById("dropdown-content");
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  } else {
    dropdown.classList.add("show");
  }
}
