class PasswordChecker {
    state = {
        password: "",
        passwordConfirm: "",
        buttonText: "Show Password",
        lowerCase: false,
        upperCase: false,
    };

    constructor() {
        this.initEventHandlers();
        this.render();
    }

    initEventHandlers = () => {
        document
            .querySelector("#input-fields")
            .addEventListener("input", this.handleInputEvent);

        document
            .querySelector("#toggle_button")
            .addEventListener("click", this.handleToggleShowHide);
    };

    handleInputEvent = () => {
        const inputFirstElement = document.querySelector("#password");
        const inputSecondElement = document.querySelector("#password-confirm");
        const inputFirstElementValue = inputFirstElement.value;
        const inputSecondElementValue = inputSecondElement.value;
        this.state.password = inputFirstElementValue;
        this.state.passwordConfirm = inputSecondElementValue;
        this.checkIsEqual();
        this.checkToLowerCase();
        this.checkToUpperCase();
        this.checkToNumbers();
        this.checkToCharacters();
    };

    handleToggleShowHide = () => {
        const inputFirstElement = document.querySelector("#password");
        const inputSecondElement = document.querySelector("#password-confirm");

        if (this.state.buttonText === "Show Password") {
            this.state.buttonText = "Hide Password";
            inputFirstElement.setAttribute("type", "text");
            inputSecondElement.setAttribute("type", "text");
        } else {
            this.state.buttonText = "Show Password";
            inputFirstElement.setAttribute("type", "password");
            inputSecondElement.setAttribute("type", "password");
        }
        this.render();
    };

    checkIsEqual = () => {
        if (
            this.state.password === this.state.passwordConfirm &&
            this.state.password !== ""
        ) {
            const statusIsEqual = document.querySelector("#is-equal");
            statusIsEqual.innerText = "✅";
        } else {
            const statusIsEqual = document.querySelector("#is-equal");
            statusIsEqual.innerText = "❌";
        }
    };

    checkToLowerCase = () => {
        const regex = /[a-z]/.test(this.state.password);

        if (regex) {
            const statusLowerCase = document.querySelector("#status-lower-case");
            statusLowerCase.innerText = "✅";
        } else {
            const statusLowerCase = document.querySelector("#status-lower-case");
            statusLowerCase.innerText = "❌";
        }
    };

    checkToUpperCase = () => {
        const regex = /[A-Z]/.test(this.state.password);

        if (regex) {
            const statusUpperCase = document.querySelector("#status-upper-case");
            statusUpperCase.innerText = "✅";
        } else {
            const statusUpperCase = document.querySelector("#status-upper-case");
            statusUpperCase.innerText = "❌";
        }
    };

    checkToNumbers = () => {
        const regex = /[\d+]/.test(this.state.password);

        if (regex) {
            const statusNumberCase = document.querySelector("#status-number-case");
            statusNumberCase.innerText = "✅";
        } else {
            const statusNumberCase = document.querySelector("#status-number-case");
            statusNumberCase.innerText = "❌";
        }
    };

    checkToCharacters = () => {
        if (this.state.password.length >= 10) {
            const statusCharacterCase = document.querySelector(
                "#status-characters-case"
            );
            statusCharacterCase.innerText = "✅";
        } else {
            const statusCharacterCase = document.querySelector(
                "#status-characters-case"
            );
            statusCharacterCase.innerText = "❌";
        }
    };

    render = () => {
        document.querySelector("#toggle_button").innerHTML = this.state.buttonText;
    };
}

const app = new PasswordChecker();