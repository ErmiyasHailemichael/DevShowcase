function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
// TEXT ANIMATION FOR LAST NAME 
  const lastName = document.querySelector(".last-name");

  // Start the animation when the page loads
  window.addEventListener("load", () => {
    lastName.style.animationName = "slide";
  });