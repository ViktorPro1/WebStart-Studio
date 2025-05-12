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

// Розрахунок таргету

const adBudgetInput = document.getElementById("ad-budget");
const adDaysInput = document.getElementById("ad-days");
const totalCostOutput = document.getElementById("total-cost");
const myFeeOutput = document.getElementById("my-fee-text");

function calculate() {
    const days = document.getElementById("days").value;
    const budgetPerDay = document.getElementById("ad-budget").value;

    // Розрахунок вартості наших послуг
    let serviceFee = 500; // Початкова вартість за 5 днів
    if (days > 5) {
        serviceFee += (days - 5) * 50; // Додатково за дні понад 5
    }

    // Розрахунок загальної вартості реклами
    const totalAdCost = days * budgetPerDay;

    // Загальна сума
    const totalAmount = totalAdCost + serviceFee;

    // Вивести на форму
    document.getElementById("my-fee").value = serviceFee;
    document.getElementById("total").value = totalAmount;
}

// ініціалізуємо розрахунок при першому завантаженні сторінки
window.addEventListener('load', calculate);

adBudgetInput.addEventListener("input", calculate);
adDaysInput.addEventListener("input", calculate);

// Розрахунок при завантаженні сторінки
window.addEventListener("load", calculate);

function goBack() {
    window.location.href = "index.html"; // Тут вказуєш URL головної сторінки
}
