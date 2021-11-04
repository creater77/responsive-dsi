const html = document.querySelector("html");
const body = document.querySelector("body");

console.log(html);
// nav__container
const navToggle = document.querySelector(".nav__toggle");
const navContainer = document.querySelector(".nav__container");

// icons
const arrowRight = document.querySelector(".arrow-right");
const icons = document.querySelector(".icons");

navToggle.addEventListener("click", () => {
  body.classList.remove("js-transition");

  arrowRight.classList.remove("active")
  icons.classList.remove("active");

  navToggle.classList.toggle("active")
  navContainer.classList.toggle("active");

  if (navToggle.classList.contains("active")) {
    html.style.overflow = "hidden";
  } else {
    html.style.overflow = "scroll";
  }
})

arrowRight.addEventListener("click", () => {
  navToggle.classList.remove("active")
  navContainer.classList.remove("active");

  arrowRight.classList.toggle("active")
  icons.classList.toggle("active");

  if (arrowRight.classList.contains("active")) {
    arrowRight.style.backgroundImage = "url('./assets/img/left-arrow.png')";
  } else {
    arrowRight.style.backgroundImage = "url('./assets/img/right-arrow.png')";
  }
})
