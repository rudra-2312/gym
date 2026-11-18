const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const msg = document.getElementById("message");
const signupLink = document.getElementById("signupLink");

// Redirect to signup page
signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "signup.html";
});

// Validate email format on submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        msg.style.color = "#ff4d4d";
        msg.textContent = "Please enter a valid email address.";
    } else if (password === "") {
        msg.style.color = "#ff4d4d";
        msg.textContent = "Please enter your password.";
    } else {
        msg.style.color = "#4caf50";
        msg.textContent = "Login successful!";
        setTimeout(() => window.location.href = "index.html", 800);
    }
});