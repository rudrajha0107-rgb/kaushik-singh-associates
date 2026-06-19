// Navbar Scroll Effect

window.addEventListener("scroll", function () {

const header = document.querySelector("header");

if (window.scrollY > 50) {
    header.style.background = "#081421";
    header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
}
else {
    header.style.background = "#0d1b2a";
    header.style.boxShadow = "none";
}

});


// Counter Animation

const counters = document.querySelectorAll(".stats h3");

counters.forEach(counter => {

const target = parseInt(counter.innerText);

let count = 0;

const updateCounter = () => {

const increment = target / 100;

if (count < target) {

count += increment;

counter.innerText = Math.ceil(count) + "+";

setTimeout(updateCounter, 20);

}
else {

if (target === 99) {
counter.innerText = "99%";
}
else {
counter.innerText = target + "+";
}

}

};

updateCounter();

});


// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0px)";

}

});

});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.style.opacity = "0";
card.style.transform = "translateY(40px)";
card.style.transition = "all 0.6s ease";

observer.observe(card);

});


// Contact Form

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Thank you for contacting Kaushik Singh & Associates. We will get back to you shortly."
);

form.reset();

});

}
