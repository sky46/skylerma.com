document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    document.getElementById("nav-toggle").addEventListener("click", () => {
        navbar.classList.toggle("nav-responsive-show");
    });
});