const input = document.querySelector("#email");
const button = document.querySelector("#early-access__submit");
const inputWrapper = document.querySelector(".input-wrapper");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

button.addEventListener("click", () => {
  inputWrapper.classList.remove("error");

  const email = input.value;

  if (!validateEmail(email)) {
    inputWrapper.classList.add("error");
  }
});
