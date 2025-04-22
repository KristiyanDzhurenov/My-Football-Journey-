const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Запазване на избора в localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "🌙/🌞 Смени тема";
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙/🌞 Смени тема";
  }
});

// Проверка при зареждане
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "🌙/🌞 Смени тема";
  }
});
