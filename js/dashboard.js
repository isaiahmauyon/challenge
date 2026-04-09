const addItemButton = document.querySelector("#add-item-button");
const payPrintButton = document.querySelector("#pay-print-button");
const sidebar = document.querySelector(".sidebar");
const navToggleButton = document.querySelector(".mini-grid-button");
const dashboardLink = document.querySelector("#dashboard-link");
const helpLink = document.querySelector("#help-link");
const logoutLink = document.querySelector(".logout-link");
const orderTableBody = document.querySelector("#order-table-body");
const employeeLink = document.querySelector("#employee-link");
const settingsLink = document.querySelector("#settings-link");
const incomeCard = document.querySelector("#income-card");
const outcomeCard = document.querySelector("#outcome-card");
const stockCard = document.querySelector("#stock-card");

const closeMobileMenu = () => {
  if (window.innerWidth <= 760) {
    sidebar?.classList.remove("is-open");
  }
};

navToggleButton?.addEventListener("click", () => {
  sidebar?.classList.toggle("is-open");
});

addItemButton?.addEventListener("click", () => {
  const itemName = document.querySelector("#data-item")?.value.trim();
  const amount = document.querySelector("#amount")?.value.trim();

  if (!itemName || !amount || !orderTableBody) {
    return;
  }

  const rowCount = orderTableBody.querySelectorAll("tr").length + 1;
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${rowCount}.</td>
    <td>${itemName}</td>
    <td>-</td>
    <td>${amount}</td>
  `;
  orderTableBody.appendChild(newRow);

  document.querySelector("#data-item").value = "";
  document.querySelector("#amount").value = "";
});

payPrintButton?.addEventListener("click", () => {
  window.alert("Payment recorded and ready to print.");
});

dashboardLink?.addEventListener("click", () => {
  closeMobileMenu();
  window.location.href = "dashboard.html";
});

helpLink?.addEventListener("click", () => {
  closeMobileMenu();
  window.location.href = "dashboard.html";
});

logoutLink?.addEventListener("click", () => {
  closeMobileMenu();
  window.location.href = "index.html";
});

employeeLink?.addEventListener("click", () => {
  closeMobileMenu();
  window.location.href = "employee.html";
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

stockCard?.addEventListener("click", () => {
  window.location.href = "stock.html";
});

stockCard?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    window.location.href = "stock.html";
  }
});
