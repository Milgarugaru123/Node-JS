const cardCase = document.querySelector(`.card`);
const cardTop = document.querySelector(`.top`);
const cardLine = document.querySelector(`.line`);
const cardbottom = document.querySelector(`.bottom`);
const letter = document.querySelector(`.letter`);
const tap = document.querySelector(`.tap_sign`);
const toName = document.querySelector(`.bottom > div`);

setInterval(() => {
  tap.classList.toggle(`tap_move`);
}, 1300);

cardCase.addEventListener(`click`, () => {
  cardTop.classList.remove(`top`);
  cardTop.classList.add(`top_open`);
  cardLine.style.display = `none`;
  tap.style.opacity = 0;
  letter.classList.remove(`letter_blur`);
  setTimeout(() => {
    tap.style.display = `none`;
    toName.style.opacity = 0;
    cardCase.classList.add(`move_down`);
    letter.classList.add(`move_up`);
  }, 1500);
});
