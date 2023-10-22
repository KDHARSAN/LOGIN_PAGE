const wrapper = document.querySelector(".wrap");
const Loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".reg-link");
const btnPopup = document.querySelector(".butt-popup");
const iconclose = document.querySelector(".ic");

registerlink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
Loginlink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconclose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
