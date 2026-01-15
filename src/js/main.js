const ticketLeft = document.querySelector(".ticket__content");
const ticketPanel = document.querySelector(".ticket__synopsis ")
const arrow = document.querySelector(".ticket__info__arrow")
const ticketRight = document.querySelector(".ticket__options");
const hamburger = document.querySelector(".hamburger");
const ticketOptions = document.querySelector(".ticket__options__content");


ticketLeft.addEventListener("click", () => {
    ticketPanel.classList.toggle("active");
    arrow.classList.toggle("rotate");
    ticketOptions.classList.remove("active");
    hamburger.classList.remove("is-active");
});

ticketRight.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    ticketPanel.classList.remove("active");
    arrow.classList.remove("rotate");
    ticketOptions.classList.toggle("active");
})