class PasswordChecker {
    state = {
        input1: "",
        input2: "",
        button: "show",
    };

    constructor() {
        this.initEventHandlers;
        this.render();
    }

    initEventHandlers = () => {
        document
            .querySelector("#input1")
            .addEventListener("input", this.handleInputEvent);
        document
            .querySelector("#input2")
            .addEventListener("input", this.handleInputEvent);
    };
    handleInputEvent = () => {
        const inputFirstElement = document.querySelector("#input1");
        const inputSecondElement = document.querySelector("#input2");
        const inputFirstElementValue = inputFirstElement.value;
        const inputSecondElementValue = inputSecondElement.value;
        this.state.input1 = inputFirstElementValue;
        this.state.input2 = inputSecondElementValue;
    };

    render = () => {};
}

const app = new PasswordChecker();