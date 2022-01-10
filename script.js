class PasswordChecker {
    state = {
        input1: "",
        input2: "",
        buttonText: "Show Password",
    };

    constructor() {
        this.initEventHandlers();
        this.render();
    }

    initEventHandlers = () => {
        document
            .querySelector("#input1")
            .addEventListener("input", this.handleInputEvent);
        document
            .querySelector("#input2")
            .addEventListener("input", this.handleInputEvent);
        document
            .querySelector("#toggle_button")
            .addEventListener("click", this.handleToggleShowHide);
    };
    handleInputEvent = () => {
        const inputFirstElement = document.querySelector("#input1");
        const inputSecondElement = document.querySelector("#input2");
        const inputFirstElementValue = inputFirstElement.value;
        const inputSecondElementValue = inputSecondElement.value;
        this.state.input1 = inputFirstElementValue;
        this.state.input2 = inputSecondElementValue;
    };

    handleToggleShowHide = () => {
        const inputFirstElement = document.querySelector("#input1");
        const inputSecondElement = document.querySelector("#input2");

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

    render = () => {
        document.querySelector("#toggle_button").innerHTML = this.state.buttonText;
    };
}

const app = new PasswordChecker();