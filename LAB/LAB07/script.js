// Đăng ký
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerForm = document.querySelector(".register-form");

function signup(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Please enter both email and password!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.some(user => user.email === email);
  if (exists) {
    alert("This email is already registered!");
    return;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Register successful!");
  window.location.href = "Login.html"; // Chuyển trang mượt
}


const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector("#yourElementId");
    if (element) {
        element.addEventListener("click", function () {
            console.log("Element clicked!");
        });
    } else {
        console.error("Element not found!");
    }
});

  if (!email || !password) {
    alert("Please enter both email and password!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const found = users.some(user => user.email === email && user.password === password);

  if (found) {
    alert("Login successful!");
    window.location.href = "Home.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
});