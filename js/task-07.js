const inputFontSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
const onHandleInput = (event) => {
  spanText.style.fontSize = event.currentTarget.value + "px";
};

inputFontSizeControl.addEventListener("input", onHandleInput);
