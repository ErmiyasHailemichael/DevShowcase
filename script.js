function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
// TEXT ANIMATION FOR LAST NAME 
  const lastName = document.querySelector(".last-name");


  window.addEventListener("load", () => {
    lastName.style.animationName = "slide";
  });

  // Dark mode
  const toggleButton = document.querySelector("#dark-mode-toggle-button");
  const body = document.body;


  function toggleDarkMode() {
    console.log("Toggle Dark Mode clicked");
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark-mode" : "light-mode");
  }


  toggleButton.addEventListener("click", toggleDarkMode);

  // Check local storage for the current theme
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    body.classList.add(currentTheme);
  }



  