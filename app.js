// Add this to your app.js file
const loginForm = document.querySelector(".sign-in-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting
  window.location.href = "appointment.html"; // Redirect to appointment page
});
