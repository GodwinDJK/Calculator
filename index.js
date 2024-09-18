
const calculator = document.getElementById("calculator");
const number1 = document.getElementById("numinput");
const number2 = document.getElementById("numinput2");
const submitBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const operation = document.getElementById("select-operation").value;

    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);

    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers")
        return;
    }

    switch (operation) {
        case "addition":
            result = num1 + num2;
        break;
    
        case "subtraction":
            result = num1 - num2;
        break;

        case "moltiplication":
            result = num1 * num2;
        break;

        case "division":
            if (num2 === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = num1 / num2;
        break;

        default:
            alert("Invalid operation");
        return;
    }

    const exsistingResult = document.getElementById("result");
    
    if (exsistingResult) {
        exsistingResult.textContent = `The Result is: ${result}`;
    } else {
        const resultElement = document.createElement("h2");
        resultElement.id = "result";
        resultElement.textContent = `The Result is: ${result}`;
        calculator.appendChild(resultElement);
    }

})