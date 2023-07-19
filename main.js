/* https://youtu.be/yXFiTDfhSXo
    https://youtu.be/Ki0XXrlKlHY
    https://youtu.be/WdMeLpD3eTY
*/
const body = document.querySelector("body");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const ModeSwitch = document.querySelector(".mode-switch");
const updateTime = () => {
  let date = new Date();
  let secToDeg = (date.getSeconds() / 60) * 360;
  let minToDeg = (date.getMinutes() / 60) * 360;
  let hrToDeg = (date.getHours() / 60) * 360;

  /* ################################ */

  second.style.transform = `rotate(${secToDeg}deg)`;
  minute.style.transform = `rotate(${minToDeg}deg)`;
  hour.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000);

updateTime();
ModeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});
