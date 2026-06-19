// ================================
// NAVBAR SCROLL EFFECT
// ================================

window.addEventListener("scroll", function () {

const navbar = document.querySelector(".custom-nav");

if (window.scrollY > 50) {

navbar.style.background = "#06172b";
navbar.style.padding = "10px 0";

} else {

navbar.style.background = "#081b33";
navbar.style.padding = "15px 0";

}

});

// ================================
// COUNTER ANIMATION
// ================================

const counters = document.querySelectorAll(".stat-box h2");

const speed = 100;

counters.forEach(counter => {

const updateCount = () => {

const target = counter.innerText.replace("+", "");

if (isNaN(target)) return;

const count = +counter.getAttribute("data-count") || 0;

const increment = target / speed;

if (count < target) {

const newCount = Math.ceil(count + increment);

counter.setAttribute("data-count", newCount);

counter.innerText = newCount + "+";

setTimeout(updateCount, 20);

} else {

counter.innerText = target + "+";

}

};

updateCount();

});

// ================================
// SCROLL REVEAL ANIMATION
// ================================

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{

threshold: 0.15

}

);

const hiddenElements = document.querySelectorAll(
".service-card, .team-card, .why-box, .industry-box, .testimonial-card, .process-box"
);

hiddenElements.forEach(el => {

el.classList.add("hidden");

observer.observe(el);

});

// ================================
// SMOOTH ACTIVE NAV LINK
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if (pageYOffset >= sectionTop - 150) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href").includes(current)) {

link.classList.add("active");

}

});

});

// ================================
// BUTTON RIPPLE EFFECT
// ================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

btn.addEventListener("click", function (e) {

const circle = document.createElement("span");

const diameter = Math.max(
this.clientWidth,
this.clientHeight
);

const radius = diameter / 2;

circle.style.width = circle.style.height =
`${diameter}px`;

circle.style.left =
`${e.clientX - this.offsetLeft - radius}px`;

circle.style.top =
`${e.clientY - this.offsetTop - radius}px`;

circle.classList.add("ripple");

const ripple = this.getElementsByClassName(
"ripple"
)[0];

if (ripple) {

ripple.remove();

}

this.appendChild(circle);

});

});

// ================================
// SCROLL TO TOP BUTTON
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

if (window.scrollY > 400) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

// ================================
// LOADER EFFECT
// ================================

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});
