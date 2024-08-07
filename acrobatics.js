const btn1 = document.querySelector(".btn1");

let ripple;

btn1.addEventListener("mouseenter", (e) => {
  const left = e.clientX - e.target.getBoundingClientRect().left;
  const top = e.clientY - e.target.getBoundingClientRect().top;

  ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.left = `${left}px`;
  ripple.style.top = `${top}px`;
  btn1.prepend(ripple);
});

btn1.addEventListener("mouseleave", () => {
  btn1.removeChild(ripple);
});
const btn2 = document.querySelector(".btn2");

let ripple2;

btn2.addEventListener("mouseenter", (e) => {
  const left = e.clientX - e.target.getBoundingClientRect().left;
  const top = e.clientY - e.target.getBoundingClientRect().top;

  ripple2 = document.createElement("div");
  ripple2.classList.add("ripple2");
  ripple2.style.left = `${left}px`;
  ripple2.style.top = `${top}px`;
  btn2.prepend(ripple2);
});

btn2.addEventListener("mouseleave", () => {
  btn2.removeChild(ripple2);
});

const btn3 = document.querySelector(".btn3");
let ripple3;

btn3.addEventListener("mouseenter", (e) => {
  const left = e.clientX - e.target.getBoundingClientRect().left;
  const top = e.clientY - e.target.getBoundingClientRect().top;

  ripple3 = document.createElement("div");
  ripple3.classList.add("ripple3");
  ripple3.style.left = `${left}px`;
  ripple3.style.top = `${top}px`;
  btn3.prepend(ripple3);
});

btn3.addEventListener("mouseleave", () => {
  btn3.removeChild(ripple3);
});
