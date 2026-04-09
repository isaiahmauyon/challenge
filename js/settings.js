const sidebar = document.querySelector(".sidebar");
const navToggleButton = document.querySelector(".mini-grid-button");
const dashboardLink = document.querySelector("#dashboard-link");
const helpLink = document.querySelector("#help-link");
const employeeLink = document.querySelector("#employee-link");
const incomeCard = document.querySelector("#income-card");
const outcomeCard = document.querySelector("#outcome-card");
const cashierCard = document.querySelector("#cashier-card");
const stockCard = document.querySelector("#stock-card");
const logoutLink = document.querySelector("#logout-link");
const settingsForm = document.querySelector("#settings-form");
const settingsMessage = document.querySelector(".settings-message");

const closeMobileMenu = () => {
  if (window.innerWidth <= 760) {
    sidebar?.classList.remove("is-open");
  }
};

navToggleButton?.addEventListener("click", () => {
  sidebar?.classList.toggle("is-open");
});

dashboardLink?.addEventListener("click", () => {
  closeMobileMenu();
  window.location.href = "dashboard.html";
});

helpLink?.addEventListener("click", () => {
  closeMobileMenu();
  window.location.href = "dashboard.html";
});

employeeLink?.addEventListener("click", () => {
  closeMobileMenu();
  window.location.href = "employee.html";
});

incomeCard?.addEventListener("click", () => {
  window.location.href = "income.html";
});

incomeCard?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    window.location.href = "income.html";
  }
});

outcomeCard?.addEventListener("click", () => {
  window.location.href = "outcome.html";
});

outcomeCard?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    window.location.href = "outcome.html";
  }
});

cashierCard?.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

cashierCard?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    window.location.href = "dashboard.html";
  }
});

stockCard?.addEventListener("click", () => {
  window.location.href = "stock.html";
});

stockCard?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    window.location.href = "stock.html";
  }
});

logoutLink?.addEventListener("click", () => {
  closeMobileMenu();
  window.location.href = "index.html";
});

settingsForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const oldPassword = document.querySelector("#old-password")?.value.trim();
  const newPassword = document.querySelector("#new-password")?.value.trim();
  const confirmPassword = document.querySelector("#confirm-password")?.value.trim();

  if (!oldPassword || !newPassword || !confirmPassword) {
    settingsMessage.textContent = "Please fill in all password fields.";
    return;
  }

  if (newPassword !== confirmPassword) {
    settingsMessage.textContent = "New passwords do not match.";
    return;
  }

  settingsMessage.textContent = "Password changed successfully.";
  settingsForm.reset();
});
