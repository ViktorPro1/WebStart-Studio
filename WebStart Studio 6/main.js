document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navMenu = document.getElementById("navMenu");
    const navLinks = navMenu.querySelectorAll("a"); // Отримуємо всі пункти меню

    if (burger && navMenu) {
        burger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Додаємо слухач подій для кожного пункту меню
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active"); // Закриваємо меню при натисканні на пункт
            });
        });

        // Закриття меню при кліку поза межами меню
        document.addEventListener("click", (event) => {
            if (!navMenu.contains(event.target) && !burger.contains(event.target)) {
                navMenu.classList.remove("active"); // Закриваємо меню, якщо клік не на бургері чи меню
            }
        });
    } else {
        console.error("❌ Не знайдено елементів #burger або #navMenu");
    }
});

console.log('JavaScript файл підключено');
