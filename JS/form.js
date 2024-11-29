const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const rememberMe = document.getElementById("rememberMe").checked;

  if (username === "" || password === "") {
    alert("Please fill in both username and password.");
    return;
  }

  if (rememberMe) {
    localStorage.setItem("rememberMe", username);
  } else {
    localStorage.removeItem("rememberMe");
  }

  window.location.href = "./Home.html";
});

window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("rememberMe");
  if (savedUsername) {
    document.getElementById("username").value = savedUsername;
    document.getElementById("rememberMe").checked = true;
  }
});

document.getElementById("forgot-password").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Please contact support@civicconnect.com for password recovery.");
});