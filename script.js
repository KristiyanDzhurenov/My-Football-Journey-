const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    if (body.classList.contains('dark-theme')) {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
});

// Проверка за запазена тема при зареждане на страницата
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.textContent = '🌙';
    } else {
        body.classList.add('light-theme');
    }
});