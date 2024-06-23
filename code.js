let numberOne = "", numberTwo = "", operand = "";

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {

    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#D8F3DC";
        button.style.color = "green";
        button.style.borderColor = "green";
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "";
        button.style.color = "";
        button.style.borderColor = "";
    });

    if (button.classList.contains("num")) {

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#D8F3DC";
            button.style.color = "green";
            button.style.borderColor = "green";
        });

        button.addEventListener("click", () => {
            if (operand === undefined || operand === "") {
                numberOne += button.textContent;
                updateFooter(numberOne);
                }
            else {
                numberTwo += button.textContent;
                updateFooter(numberOne + " " + operand + " " + numberTwo);
                }
    });
    }
    else if (button.classList.contains("opp")) {

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#D8F3EA";
            button.style.color = "green";
            button.style.borderColor = "green";
        });

        button.addEventListener("click", () => {
            if (numberTwo === "") {
                operand = button.textContent;
                updateFooter(numberOne + " " + operand);
            }
            else {
                numberOne = operate(numberOne, numberTwo, operand);
                numberTwo = "";
                operand = button.textContent;
                updateFooter(numberOne.toFixed(2) + " " + operand);
            }
        });
    }
    else if (button.classList.contains("eq")) {

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#42C599";
            button.style.color = "white";
            button.style.borderColor = "white";
        });

        button.addEventListener("click", () => equal(numberOne, numberTwo, operand));
    }
    else {

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#42C599";
            button.style.color = "white";
            button.style.borderColor = "white";
        });

    }

});

const title = document.querySelector("h1");
title.addEventListener("click", () => alert("shouldn't touch this"));

const footer = document.getElementsByClassName("footer");

const clears = document.getElementsByClassName("cl");
Array.from(clears).forEach(clear => {
    clear.addEventListener("click", () => {
        updateFooter("");
        numberOne = "";
        numberTwo = "";
        operand = "";
    });
});

function operate(a, b, c) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (c === "+") {
        return add(a, b);
    }
    else if (c === "-") {
        return substract(a, b);
    }
    else if (c === "/") {
        return divide(a, b);
    }
    else {
        return multiply(a, b);
    }
}

function equal(a, b, c) {

    
    if (parseInt(b) === 0 && operand === "/") {
        updateFooter("damn");
        numberOne = "";
        numberTwo = "";
        operand = "";
    }
    else {
        numberOne = operate(parseFloat(a), parseFloat(b), c);
        numberTwo = "";
        operand = "";
        updateFooter(numberOne.toFixed(2));
    }
}

function updateFooter(content) {
    Array.from(document.getElementsByClassName("footer")).forEach(footer => {
        footer.textContent = content;
    });
}

