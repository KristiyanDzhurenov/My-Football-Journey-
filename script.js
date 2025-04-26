const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const navLinks = document.querySelectorAll('nav a'); // Вземаме навигационните линкове

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.add('dark-mode-transition'); // Добавяме клас за преход

    navLinks.forEach(link => link.classList.toggle('dark-mode')); // Прилагаме и на навигацията

    // Променяме текста на бутона
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Светла тема';
        darkModeToggle.classList.add('dark-mode-button');
    } else {
        darkModeToggle.textContent = 'Тъмна тема';
        darkModeToggle.classList.remove('dark-mode-button');
    }

    // Премахваме класа за преход след като анимацията приключи, за да не пречи на други анимации
    setTimeout(() => {
        body.classList.remove('dark-mode-transition');
    }, 500); // Същото време като transition в CSS
});