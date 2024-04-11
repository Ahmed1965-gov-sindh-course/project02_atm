import inquirer from "inquirer";
let pin = 1234;
let balance = 100000;
const creatUser = await inquirer.prompt({
    type: "number",
    name: "pin",
    message: "Enter your pin",
});
if (creatUser.pin === pin) {
    console.log("Welcome to ATM");
}
else {
    console.log("Invalid Pin");
}
const atmFunction = await inquirer.prompt([
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            "Withdraw",
            "Fast Cash",
            "Balance",
            "Exit",
        ],
    },
]);
if (atmFunction.choice === "Withdraw") {
    const amount = await inquirer.prompt([
        {
            type: "number",
            name: "cashWithDraw",
            message: "Enter Amount",
        },
    ]);
    if (amount.cashWithDraw > balance) {
        console.log("Insufficient Blalance");
    }
    else {
        balance = balance - amount.cashWithDraw;
        console.log(`You draw an amount of PKR: ${amount.cashWithDraw} and your current Balance is ${balance}`);
    }
}
if (atmFunction.choice === "Fast Cash") {
    const fastCash = await inquirer.prompt([
        {
            type: "list",
            name: "drawFastCash",
            message: "Enter Amount",
            choices: [
                "1000",
                "2000",
                "3000",
                "5000",
                "10000",
                "20000",
            ]
        }
    ]);
    if (fastCash.drawFastCash > balance) {
        console.log("Insufficient Blalance");
    }
    else {
        balance = balance - fastCash.drawFastCash;
        console.log(`You draw an amount of PKR: ${fastCash.drawFastCash} and your current Balance is ${balance}`);
    }
}
if (atmFunction.choice === "Balance") {
    console.log(`Your current Balance is ${balance}`);
}
if (atmFunction.choice === "Exit") {
    console.log("Thank you for using our ATM");
}
