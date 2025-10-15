const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    console.log("Simple Calculator");

    const num1 = parseFloat(await askQuestion("Enter first number: "));
    const operator = await askQuestion("Enter operator (+, -, *, /): ");
    const num2 = parseFloat(await askQuestion("Enter second number: "));

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log("Error: Division by zero.");
                rl.close();
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator.");
            rl.close();
            return;
    }

    console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
    rl.close();
}

main();
