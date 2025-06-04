function toggleMenu() {
  // We are targeting the whole MENU-LINKS element
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// so This function whenever we click it
// either adds or removes the OPEN class
// and the class has some styling (in the css file:))
