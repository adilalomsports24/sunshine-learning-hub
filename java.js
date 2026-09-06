// =========================
// SUNSHINE LEARNING HUB
// WEBSITE JAVASCRIPT
// =========================


// Contact form
const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you for your enquiry! ☀️\n\n" +
            "Sunshine Learning Hub will contact you soon."
        );

        contactForm.reset();

    });

}


// Navbar shadow while scrolling
window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 5px 30px rgba(0, 0, 0, 0.35)";
    } else {
        header.style.boxShadow = "none";
    }

});


// Reveal sections when scrolling
const revealElements = document.querySelectorAll(
    ".section, .stat-card, .class-card, .feature-card"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});