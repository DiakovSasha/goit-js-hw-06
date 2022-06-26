const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputValue);

function onInputValue(event) {
  console.log(event.currentTarget.value);

  event.currentTarget.value
    ? (refs.span.textContent = event.currentTarget.value)
    : (refs.span.textContent = "Anonymous");
}
