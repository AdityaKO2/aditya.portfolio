function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// let themeButton = document.getElementById("theme-btn");

// themeButton.addEventListener("click", (e) => {
//   e.target.innerText = e.target.innerText === "Light Mode" ? "Dark Mode" : "Light Mode";

//   let isDarkMode = document.body.style.background === "rgb(33, 33, 33)"; // #212121 in RGB

//   // Set Background & Text Color
//   document.body.style.background = isDarkMode ? "#ffffff" : "#212121"; // White for Light, Dark for Dark
//   document.body.style.color = isDarkMode ? "#000000" : "#ffffff"; // Black for Light, White for Dark

//   // Apply Theme to Cards (Prevent Text Disappearance)
//   let cards = document.querySelectorAll(".card"); // Change ".card" to your actual class
//   cards.forEach(card => {
//     card.style.background = isDarkMode ? "#f5f5f5" : "#333"; // Light Gray for Light Mode, Dark Gray for Dark Mode
//     card.style.color = isDarkMode ? "#000000" : "#ffffff"; // Ensures text is readable
//   });
// });

