const homeLink = document.getElementById("home");
const aboutLink = document.getElementById("about");
const contactLink = document.getElementById("contact");
const content = document.getElementById("content");

homeLink.addEventListener("click", () => {
  content.innerHTML = "<h1>Welcome to the Home Page</h1>";
});

aboutLink.addEventListener("click", () => {
  content.innerHTML = "<h1>About Us</h1><p>This is the About Us page.</p>";
});

contactLink.addEventListener("click", () => {
  content.innerHTML = "<h1>Contact Us</h1><p>You can reach us at contact@example.com.</p>";
});
