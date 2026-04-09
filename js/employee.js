const sidebar = document.querySelector(".sidebar");
const navToggleButton = document.querySelector(".mini-grid-button");
const dashboardLink = document.querySelector("#dashboard-link");
const helpLink = document.querySelector("#help-link");
const settingsLink = document.querySelector("#settings-link");
const incomeCard = document.querySelector("#income-card");
const outcomeCard = document.querySelector("#outcome-card");
const cashierCard = document.querySelector("#cashier-card");
const stockCard = document.querySelector("#stock-card");
const logoutLink = document.querySelector("#logout-link");
const addEmployeeButton = document.querySelector("#add-employee-button");
const actionPills = document.querySelectorAll(".pill");

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

settingsLink?.addEventListener("click", () => {
  closeMobileMenu();
  window.location.href = "settings.html";
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

addEmployeeButton?.addEventListener("click", () => {
  window.alert("Add Employee form can be connected next.");
});

actionPills.forEach((button) => {
  button.addEventListener("click", () => {
    window.alert(`${button.textContent} action clicked.`);
  });
});
