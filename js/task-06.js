const input = document.querySelector("#validation-input");

const onInputHandle = (event) => {
    const validInput = parseInt(event.currentTarget.dataset.length);
    const valueInput = event.currentTarget.value.length;
    console.log(event.currentTarget);
    
    if (valueInput === validInput) {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid");
    } else {
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.remove("valid");
    }
};

input.addEventListener("blur", onInputHandle);
// console.log(input);
// console.log(input);
