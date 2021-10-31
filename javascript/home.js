// Navbar scroll animation
const navbar = document.querySelector(".navbar");
const navWrapper = document.querySelector(".nav-wrapper");
window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight / 4) {
    navbar.classList.add("navbar-white");
    navWrapper.classList.add("top");
  } else {
    navbar.classList.remove("navbar-white");
    navWrapper.classList.remove("top");
  }
});

// Form
// test@gmail.com
const form = document.querySelector('.form');
const email = form.querySelector('input')
const account = document.getElementById('account');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  account.innerText = email.value;
});
