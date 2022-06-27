const form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const formValues = event.currentTarget.elements;
  const email = formValues.email.value;
  const password = formValues.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  const formResult = {
    email,
    password,
  };
  console.log(formResult);
  event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);
