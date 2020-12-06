import menu from "./menu.json";
import template from "./templates/menu-item.hbs";
const CHECKED_CHANGE = "checkedChange";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const menuList = document.querySelector(".js-menu");
const body = document.querySelector("body");
const themeChekbox = document.querySelector("#theme-switch-toggle");

const menuItem = template(menu);
menuList.insertAdjacentHTML("beforeend", menuItem);

themeChekbox.addEventListener("change", themeChange);

keyLocalStorage();

//функция изменение темы
function themeChange(evt) {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);
  const check = evt.target.checked;
  localStorage.setItem(CHECKED_CHANGE, check);
}

//функция, которая запоминает значение ключа
function keyLocalStorage() {
  const saveKey = localStorage.getItem(CHECKED_CHANGE);

  if (saveKey === "true") {
    body.classList.add(Theme.DARK);
    themeChekbox.checked = true;
  } else {
    body.classList.add(Theme.LIGHT);
  }
}
