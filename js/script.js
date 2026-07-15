//=========================
// Typing Effect
//=========================

const words = [
    "Software Developer",
    ".NET Developer",
    "Laravel Developer",
    "Flutter Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

// Typing Effect Start
if (typing) {
    typeEffect();
}



//=========================
// Image Lightbox
//=========================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-btn");

window.openImage = function (src) {

    if (!lightbox || !lightboxImg) return;

    lightbox.classList.add("active");
    lightboxImg.src = src;

};

if (closeBtn) {

    closeBtn.addEventListener("click", function () {

        lightbox.classList.remove("active");

    });

}

if (lightbox) {

    lightbox.addEventListener("click", function (e) {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

}

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape" && lightbox) {

        lightbox.classList.remove("active");

    }

});

//=========================
// Contact Form EmailJS
//=========================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_mrymjky",
            "template_heq6f3j",
            this,
            "F_qtwSTH9WscTrEDw"
        )

        .then(function () {

            alert("✅ Message Sent Successfully!");

            contactForm.reset();

        })

        .catch(function (error) {

            console.log("EmailJS Error:", error);

            alert("❌ Failed to Send Message\n\n" + JSON.stringify(error));

        });

    });

}




//=========================
// Scroll To Top
//=========================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Active Navbar Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

const words = [
    "Software Developer",
    "Web Developer",
    "ASP.NET Developer",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentWord.substring(0, charIndex++);
    } else {
        document.getElementById("typing").textContent =
            currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const cards = document.querySelectorAll(".skill-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform =
            `perspective(1000px)
             rotateX(${-(y-rect.height/2)/15}deg)
             rotateY(${(x-rect.width/2)/15}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";
    });
});

const revealElements =
    document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    revealElements.forEach(el => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }

    });

});

AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

