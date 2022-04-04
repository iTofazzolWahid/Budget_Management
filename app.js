// All Input
const incomeCost = document.querySelector("#income-cost");
const foodCost = document.querySelector("#food-cost");
const rentCost = document.querySelector("#rent-cost");
const utilitiesCost = document.querySelector("#utilities-cost");
const savingAmount = document.querySelector("#saving-amount");

// All Display
const expenseDisplay = document.querySelector("#display-expense");
const balanceDisplay = document.querySelector("#display-balance");
const savingDisplay = document.querySelector("#display-saving");
const remainingDisplay = document.querySelector("#display-remaining");

/* Common Function */
function getNumber(string, text) {
    let result = '';
    if (text) {
        result = parseFloat(string.value)
    } else {
        result = parseFloat(string.innerText)
    }
    return result;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function add_Expense(food, rent, utilities) {
    let result = parseFloat(food) + parseFloat(rent) + parseFloat(utilities);
    return result;
}

/* Calculate Function */
function calculate() {
    // Add Expenses
    let expense =
        parseFloat(foodCost.value) +
        parseFloat(rentCost.value) +
        parseFloat(utilitiesCost.value);

    let balance = parseFloat(incomeCost.value) - expense;
    if (
        isNaN(incomeCost.value) ||
        isNaN(foodCost.value) ||
        isNaN(rentCost.value) ||
        isNaN(utilitiesCost.value) ||
        incomeCost.value == '' ||
        foodCost.value == '' ||
        rentCost.value == '' ||
        utilitiesCost.value == ''
    ) {
        alert("You Have to Enter Numbers as Money😀");
    } else if (
        parseFloat(incomeCost.value) < 0 ||
        parseFloat(foodCost.value) < 0 ||
        parseFloat(rentCost.value) < 0 ||
        parseFloat(utilitiesCost.value) < 0
    ) {
        alert("Enter Positive Money Value🤑");
    } else if (
        parseFloat(incomeCost.value) < parseFloat(expense)
    ) {
        alert("You are not allowd to spend more than your balance😂");
    } else {
        expenseDisplay.innerText = expense;
        balanceDisplay.innerText = balance;
    }
}

/* Save Function */
function save() {
    if (isNaN(savingAmount.value) || savingAmount.value == '') {
        alert("Please Enter Money in the input field😇");
    } else if (parseFloat(savingAmount.value) < 0) {
        alert("Enter Positive Money😒");
    } else {
        const balance = parseFloat(balanceDisplay.innerText);
        let saved = (parseFloat(savingAmount.value) / 100) * incomeCost.value;
        let remained = balance - parseFloat(saved);
        if (
            parseFloat(remained) < 0) {
            alert("You are not allowd to save more than your balance😂");
        } else {
            savingDisplay.innerText = saved;
            remainingDisplay.innerText = remained;
        }
    }
}