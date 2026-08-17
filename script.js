// ================================
// SAURABH NOVELIST - SCRIPT
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const mobileMenu = document.getElementById("mobileMenu");
    const menuButton = document.querySelector(".menu-btn");

    // Mobile menu
    window.toggleMenu = function () {
        mobileMenu.classList.toggle("active");
    };

    window.closeMenu = function () {
        mobileMenu.classList.remove("active");
    };


    // Close menu when clicking outside
    document.addEventListener("click", function (event) {

        if (
            mobileMenu &&
            menuButton &&
            !mobileMenu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            mobileMenu.classList.remove("active");
        }

    });


    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                mobileMenu.classList.remove("active");
            }

        });

    });


    // Novel button
    const readButton = document.querySelector(".read-btn");

    if (readButton) {

        readButton.addEventListener("click", function () {

            alert(
                "📖 Ek Anjan Mulakat\n\n" +
                "Novel reader बहुत जल्द यहाँ उपलब्ध होगा।"
            );

        });

    }


    // Small entrance animation
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show-section");

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });

});
/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu");
const nav = document.querySelector(".header nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }
    });

    // Menu link par click karne ke baad menu band
    nav.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            nav.classList.remove("active");
            menuBtn.innerHTML = "☰";
        });
    });
}
