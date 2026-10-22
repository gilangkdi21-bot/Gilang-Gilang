
const themeButton = document.getElementById("theme");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeButton.textContent = "🌙";
  } else {
    themeButton.textContent = "☀️";
  }
});

document.getElementById("year").textContent =
  new Date().getFullYear();
