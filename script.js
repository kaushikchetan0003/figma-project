
  const hamburger = document.getElementById("hamburger");
  const navItems = document.getElementById("nav-items");

  hamburger.addEventListener("click", () => {
    navItems.classList.toggle("active");
  });
 function toggleIcon() {
    const icon = document.getElementById("hamburger");
    icon.textContent = icon.textContent === "☰" ? "✖" : "☰";
  }
