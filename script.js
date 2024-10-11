let operator;

const simpleCalculator = () => {
    let result;
    const resultInner = document.getElementById("result");
    const numberOne = Number(document.getElementById("numberOne").value);
    const numberTwo = Number(document.getElementById("numberTwo").value);

    switch (operator) {
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "*":
            result = numberOne * numberTwo;
            break;
        case ":":
            result = numberOne / numberTwo;
            break;
    }

    const isUndefined = result === undefined;
    const condition = isUndefined ? "Ошибка" : result;

    if (condition === "Ошибка") {
        resultInner.style.color = "red";
    } else {
        resultInner.style.color = "green";
    }

    resultInner.innerHTML = condition;

    setTimeout(() => {
        document.getElementById("numberOne").value = "";
        document.getElementById("numberTwo").value = "";
        document.getElementById("result").innerHTML = "";
    }, 3000);
};
