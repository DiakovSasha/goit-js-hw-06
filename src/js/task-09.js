function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  spanTextOfColor: document.querySelector(".color"),
  btnChangeColor: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

const changeColor = () => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.spanTextOfColor.textContent = color;
};
refs.btnChangeColor.addEventListener("click", changeColor);
