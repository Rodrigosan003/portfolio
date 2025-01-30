const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.querySelector(".navbar ul");
const overlay = document.querySelector(".overlay");
const sections = document.querySelectorAll(".scroll");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("show");
  overlay.classList.toggle("show");
  menuIcon.src = isOpen
    ? "../../assets/images/close-menu.svg"
    : "../../assets/images/menu.svg";
});

overlay.addEventListener("click", () => {
  navMenu.classList.remove("show");
  overlay.classList.remove("show");
  menuIcon.src = "../../assets/images/close-menu.svg";
});

const navLinks = document.querySelectorAll(".navbar ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
    navMenu.classList.remove("show");
    overlay.classList.remove("show");
    menuIcon.src = "../../assets/images/menu.svg";
  });
});

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 70) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
