const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {
  threshold: 0.1
});

const hiddenElements = document.querySelectorAll(".card");
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  let scroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}, { passive: true });

// Login page
let loginBtn = document.getElementById("btn2");

let loginOverlay = document.querySelector(".login-overlay");

let closeBtn = document.querySelector(".close-login");

loginBtn.addEventListener("click",()=>{

loginOverlay.classList.remove("hidden");

});

closeBtn.addEventListener("click",()=>{

loginOverlay.classList.add("hidden");

});