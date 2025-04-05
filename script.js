// script.js

document.addEventListener("DOMContentLoaded", () => { const toggleBtn = document.getElementById("toggle-dark"); const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save user preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

});

