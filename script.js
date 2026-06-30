// ===========================
// Typing Effect
// ===========================

const message =
`Happy Birthday Anisa! 🎂

May your life always be filled with happiness,
love, success and countless beautiful moments.

Keep smiling because your smile makes the world brighter.

Have an amazing birthday! ❤️`;

let index = 0;

function typeWriter() {

    if (index < message.length) {

        document.getElementById("typing").innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    }

}

window.onload = function () {

    typeWriter();

    createHearts();

};

// ===========================
// Floating Hearts
// ===========================

function createHearts() {

    const container = document.querySelector(".hearts");

    for (let i = 0; i < 30; i++) {

        let heart = document.createElement("span");

        heart.innerHTML = "❤";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDuration = (5 + Math.random() * 8) + "s";

        heart.style.animationDelay = Math.random() * 5 + "s";

        heart.style.fontSize = (15 + Math.random() * 30) + "px";

        container.appendChild(heart);

    }

}

// ===========================
// Celebrate Button
// ===========================

const celebrateBtn = document.getElementById("celebrate");

celebrateBtn.addEventListener("click", function () {

    startMusic();

    showFireworks();

    launchBalloons();

});

// ===========================
// Background Music
// ===========================

function startMusic() {

    let music = document.getElementById("music");

    music.play().catch(() => {});

}

// ===========================
// Fireworks
// ===========================

function showFireworks() {

    const box = document.getElementById("fireworks");

    box.innerHTML = "";

    const emojis = ["🎆", "✨", "🎇", "💖", "🎉"];

    let count = 0;

    const interval = setInterval(() => {

        const span = document.createElement("span");

        span.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        span.style.fontSize = "45px";

        span.style.margin = "10px";

        box.appendChild(span);

        count++;

        if (count > 25) {

            clearInterval(interval);

        }

    }, 120);

}

// ===========================
// Balloons
// ===========================

function launchBalloons() {

    const colors = ["🎈", "🎈", "🎈", "🎈"];

    for (let i = 0; i < 25; i++) {

        const balloon = document.createElement("div");

        balloon.innerHTML = colors[Math.floor(Math.random() * colors.length)];

        balloon.style.position = "fixed";

        balloon.style.left = Math.random() * 100 + "%";

        balloon.style.bottom = "-50px";

        balloon.style.fontSize = (30 + Math.random() * 20) + "px";

        balloon.style.zIndex = "9999";

        balloon.style.transition = "transform 6s linear";

        document.body.appendChild(balloon);

        setTimeout(() => {

            balloon.style.transform =
                "translateY(-120vh)";

        }, 100);

        setTimeout(() => {

            balloon.remove();

        }, 6500);

    }

}

// ===========================
// Smooth Gallery Zoom
// ===========================

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("active");

    });

});

// ===========================
// Console Message
// ===========================

console.log("🎂 Happy Birthday Website Loaded ❤️");