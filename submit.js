const form = document.getElementById("form");

function retrieveFormValue(event) {
  event.preventDefault();

  const name = form.querySelector('[id="name"]'),
    surname = form.querySelector('[id="surname"]'),
    email = form.querySelector('[id="email"]'),
    password = form.querySelector('[id="password"]');

  const values = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    password: password.value,
  };

  console.log("submit", values);
}

form.addEventListener("submit", retrieveFormValue);
