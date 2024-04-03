#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 20000;
let myPin = 1212;
let user = await inquirer.prompt([
    {
        type: "number",
        name: "pinCode",
        message: chalk.blueBright.bold("Enter Your PIN"),
    },
]);
if (user.pinCode == myPin) {
    console.log(chalk.yellowBright.bold("Welcome!!... AREEBA KHAN"));
    let operation = await inquirer.prompt([
        {
            name: "option",
            message: "Select Option",
            type: "list",
            choices: ["CheckBalance", "fastCash", "withDraw"],
        },
    ]);
    if (operation.option == "CheckBalance")
        console.log(chalk.yellow.bold(`Your Remaining Balance is  ${myBalance}`));
    else if (operation.option == "fastCash") {
        let cashDraw = await inquirer.prompt([
            {
                name: "draw",
                message: "Select your fastCash option",
                type: "list",
                choices: [500, 1000, 1500, 2000, 3000, 5000, 10000],
            },
        ]);
        console.log(chalk.yellowBright.bold(`RS,${cashDraw.draw} Withdraw from your account & now your remaining balance is ${(myBalance -=
            cashDraw.draw)}`));
        console.log(chalk.greenBright.bold("THANK_YOU.... for your transiction"));
    }
    else if (operation.option == "withDraw") {
        let amountDraw = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your Amount",
            },
        ]);
        if (myBalance < amountDraw.amount) {
            console.log(chalk.redBright
                .bold `You don't have sufficient balance for this transiction yo have only ${myBalance}`);
        }
        else {
            console.log(chalk.yellowBright.bold(`RS,${amountDraw.amount} Withdraw from your account & now your remaining balance is ${(myBalance -=
                amountDraw.amount)}`));
            console.log(chalk.greenBright.bold("THANK_YOU.... for your transiction"));
        }
    }
}
else {
    user.pinCode = !myPin;
    console.log(chalk.red.bold("Incorrect PINCODE"));
}
