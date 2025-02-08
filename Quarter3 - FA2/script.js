function printResult(text) {
    document.getElementById("result").innerHTML = text;
}

function calculate(operator) {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    if (num1 === "" || num2 === "") {
        printResult("Please enter both numbers.");
        return;
    }
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;
    
    switch (operator) {
        case '+': result = num1 + num2; printResult(`The sum of ${num1} and ${num2} is ${result}.`); break;
        case '-': result = num1 - num2; printResult(`The difference of ${num1} and ${num2} is ${result}.`); break;
        case '*': result = num1 * num2; printResult(`The product of ${num1} and ${num2} is ${result}.`); break;
        case '/': 
            if (num2 !== 0) {
                result = num1 / num2; 
                printResult(`The quotient of ${num1} and ${num2} is ${result}.`);
            } else {
                printResult("Division by zero is not allowed.");
            }
            break;
        case '%': 
            if (num2 !== 0) {
                result = num1 % num2; 
                printResult(`The remainder of ${num1} divided by ${num2} is ${result}.`);
            } else {
                printResult("Modulo by zero is not allowed.");
            }
            break;
    }
}
