const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector(".main-form");
const inputWrappers = document.querySelectorAll(".input-wrapper");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const errorMessages = [
    "First Name cannot be empty",
    "Last Name cannot be empty",
    "Looks like this is not an email",
    "Password cannot be empty",
];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    clearErrors();

    if (firstName.value === "") displayErrors(0);
    if (lastName.value === "") displayErrors(1);
    if (!emailRegex.test(email.value)) displayErrors(2);
    if (password.value === "") displayErrors(3);
});

function displayErrors(index) {
    // create error message and the error icon
    inputWrappers[index].insertAdjacentHTML(
        "beforeend",
        `<img class="error-img" src="./images/icon-error.svg" alt="error-icon" />
    <p class="error-message">${errorMessages[index]}</p>`
    );

    // Add color Red for border of the error input
    inputWrappers[index].querySelector("input").style.border = "2px solid hsl(0, 100%, 74%)";
}

function clearErrors() {
    // Find all error messages that are showing and delete them
    const pErrorMessages = document.querySelectorAll("p.error-message");
    pErrorMessages.forEach((pErrorMessage) => pErrorMessage.remove());
    // find all error icons that are showing and delete them
    const errorIcons = document.querySelectorAll("img.error-img");
    errorIcons.forEach((icon) => icon.remove());
    // Remove color Red from the border
    inputWrappers.forEach(
        (inputWrapper) => (inputWrapper.querySelector("input").style.border = "1px solid hsl(246, 25%, 77%)")
    );
}
