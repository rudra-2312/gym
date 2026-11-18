const form = document.getElementById("signupForm");
const nameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const msg = document.getElementById("message");
const loginLink = document.getElementById("loginLink");

// Redirect back to login page
loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html";
});

// Validate fields on submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        msg.style.color = "#ff4d4d";
        msg.textContent = "Please enter your full name.";
    } else if (!emailPattern.test(email)) {
        msg.style.color = "#ff4d4d";
        msg.textContent = "Please enter a valid email address.";
    } else if (password.length < 6) {
        msg.style.color = "#ff4d4d";
        msg.textContent = "Password must be at least 6 characters.";
    } else if (password !== confirmPassword) {
        msg.style.color = "#ff4d4d";
        msg.textContent = "Passwords do not match.";
    } else {
        msg.style.color = "#4caf50";
        msg.textContent = "Account created! Redirecting to login...";
        setTimeout(() => window.location.href = "login.html", 1000);
    }
});