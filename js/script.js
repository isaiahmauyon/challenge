const form = document.querySelector(".login-form");
const statusMessage = document.querySelector(".status-message");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("#username")?.value.trim();
  const password = document.querySelector("#password")?.value.trim();

  if (!username || !password) {
    statusMessage.textContent = "Please enter both username and password.";
    return;
  }

  statusMessage.textContent = "Login successful";
  window.setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 400);
});
