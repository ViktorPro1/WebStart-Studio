//  Плавна анімація при появі секцій

const sections = document.querySelectorAll("section");

const reveal = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < triggerBottom) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);



// 🌙 Темна тема

const toggle = document.getElementById("darkModeToggle");
const body = document.body;

// Перевіряємо тему при завантаженні
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    if (toggle) toggle.checked = true;
}

// Слухач на перемикач
if (toggle) {
    toggle.addEventListener("change", () => {
        body.classList.toggle("dark-mode");
        const theme = body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });
}



// Акція 


function startCountdown() {
    const countdown = document.getElementById("countdown");

    // Перевірка, чи існує елемент countdown
    if (!countdown) {
        console.error("Елемент countdown не знайдений!");
        return;
    }

    const deadline = new Date(2025, 4, 15, 23, 59, 59); // Дата: 15 травня 2025 року

    function updateCountdown() {
        const now = new Date();
        const diff = deadline - now;

        if (diff <= 0) {
            countdown.innerHTML = "Час вийшов!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdown.innerHTML = `До кінця акції: ${days}д ${hours}г ${minutes}хв ${seconds}сек`;
    }

    // Оновлюємо відлік кожну секунду
    setInterval(updateCountdown, 1000);
}

// Запуск функції при завантаженні сторінки
document.addEventListener("DOMContentLoaded", startCountdown);

// Привітальне вікно

// Закрити модальне вікно через 5 секунд після завантаження сторінки
setTimeout(function () {
    document.getElementById('welcome-modal').style.display = 'none';
}, 5000); // 5000 мілісекунд = 5 секунд

// Закрити модальне вікно при натисканні на хрестик
document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('welcome-modal').style.display = 'none';
});


// Вікно допомоги

window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('popup').style.display = 'block';
    }, 8000); // Вікно з'явиться через 8 секунд

    document.getElementById('close-popup').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
    });
});

