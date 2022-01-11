const toggleButton = document.querySelector("#toggle-button");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const passwordForm = document.querySelector("#form");
const statusIsEqual = document.querySelector("#status-is-equal");
const statusLowerCase = document.querySelector("#status-lower-case");
const statusUpperCase = document.querySelector("#status-upper-case");
const statusNumberCase = document.querySelector("#status-number-case");
const statusCharactersCase = document.querySelector("#status-characters-case");

toggleButton.addEventListener("click", toggleShowHide);

passwordForm.addEventListener("input", function() {
    if (checkIsEqual(password, passwordConfirm)) {
        statusIsEqual.textContent = "✅";

        if (checkIsLowerCase(password)) {
            statusLowerCase.textContent = "✅";
        }

        if (checkIsUpperCase(password)) {
            statusUpperCase.textContent = "✅";
        }

        if (checkIsNumber(password)) {
            statusNumberCase.textContent = "✅";
        }
        if (checkCharacters(password)) {
            statusCharactersCase.textContent = "✅";
        }
    } else {
        statusIsEqual.textContent = "❌";
        statusLowerCase.textContent = "❌";
        statusUpperCase.textContent = "❌";
        statusNumberCase.textContent = "❌";
        statusCharactersCase.textContent = "❌";
    }
});

function checkIsEqual(password, passwordConfirm) {
    if (
        password.value === passwordConfirm.value &&
        password.value + passwordConfirm.value !== ""
    ) {
        return true;
    } else {
        return false;
    }
}

function checkIsLowerCase(ele) {
    return /[a-z]/.test(ele.value);
}

function checkIsUpperCase(ele) {
    return /[A-Z]/.test(ele.value);
}

function checkIsNumber(ele) {
    return /[\d+]/.test(ele.value);
}

function checkCharacters(ele) {
    if (ele.value.length >= 10) {
        return true;
    } else {
        return false;
    }
}

function toggleShowHide() {
    if (password.type === "password" && passwordConfirm.type === "password") {
        password.type = "text";
        passwordConfirm.type = "text";
        toggleButton.textContent = "Hide Password";
    } else {
        password.type = "password";
        passwordConfirm.type = "password";
        toggleButton.textContent = "Show Password";
    }
}