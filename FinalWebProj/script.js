// Typed.js initialization for animated text
var typed = new Typed(".text", {
    strings: ["Programming", "AI", "Web Development"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Toggle Bar Functionality for Mobile
const toggleBar = document.getElementById("toggle-bar");
const navbar = document.getElementById("myLinks");
toggleBar.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Scroll-to-top button activation
const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

// Contact form submission handling
const contactForm = document.querySelector(".contact-form form");
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // Placeholder for form submission logic.
    // You can add an AJAX request here to send the form data to your server.
    alert("Thank you for your message! We'll get back to you soon.");
    contactForm.reset();
});

