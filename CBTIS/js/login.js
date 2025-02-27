// script.js

// Animación de entrada para el formulario
document.addEventListener("DOMContentLoaded", () => {
    const loginContainer = document.querySelector(".login-container");

    // Animación inicial (fade-in y slide-down)
    loginContainer.style.transition = "opacity 1s ease, transform 1s ease";
    loginContainer.style.opacity = "1";
    loginContainer.style.transform = "translateY(0)";
});

// Animación al hacer hover en los inputs
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("focus", () => {
        input.style.transition = "box-shadow 0.3s ease";
        input.style.boxShadow = "0 0 8px rgba(76, 175, 80, 0.8)"; // Resplandor verde
    });

    input.addEventListener("blur", () => {
        input.style.boxShadow = "none";
    });
});



