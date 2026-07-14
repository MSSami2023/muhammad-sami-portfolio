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

