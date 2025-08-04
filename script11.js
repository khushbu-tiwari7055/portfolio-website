// Back to Top Button
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑ Top";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "20px";
backToTopBtn.style.right = "20px";
backToTopBtn.style.padding = "10px 15px";
backToTopBtn.style.display = "none";
backToTopBtn.style.background = "#333";
backToTopBtn.style.color = "#fff";
backToTopBtn.style.border = "none";
backToTopBtn.style.borderRadius = "5px";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form Submission Alert
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});

// Optional: Dark Mode Toggle
const darkToggle = document.createElement("button");
darkToggle.innerText = "🌙 Dark Mode";
darkToggle.id = "darkToggle";
document.body.appendChild(darkToggle);

darkToggle.style.position = "fixed";
darkToggle.style.top = "20px";
darkToggle.style.right = "20px";
darkToggle.style.padding = "10px";
darkToggle.style.background = "#444";
darkToggle.style.color = "#fff";
darkToggle.style.border = "none";
darkToggle.style.borderRadius = "5px";
darkToggle.style.cursor = "pointer";
darkToggle.style.zIndex = "999";

let dark = false;
darkToggle.addEventListener("click", () => {
  document.body.style.background = dark ? "#f4f4f4" : "#1e1e1e";
  document.body.style.color = dark ? "#333" : "#eee";
  darkToggle.innerText = dark ? "🌙 Dark Mode" : "☀ Light Mode";
  dark = !dark;
});
