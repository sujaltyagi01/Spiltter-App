// Input fields
const inputBill = document.getElementById("bill");
const inputPeople = document.getElementById("people");
const inputTip = document.getElementById("tip");

// Buttons
const calculateBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");

// Output fields
const eachPersonBillOutput = document.querySelector(".each-person-bill span");
const tipAmountOutput = document.querySelector(".tip-amount span");
const totalAmountOutput = document.querySelector(".total span");

// Calculate button functionality
calculateBtn.addEventListener("click", () => {
    const bill = parseFloat(inputBill.value);
    const people = parseInt(inputPeople.value);
    const tipPercent = parseFloat(inputTip.value);

    if (bill > 0 && people > 0 && tipPercent >= 0) {
        const tipAmount = (bill * tipPercent) / 100;
        const total = bill + tipAmount;
        const eachPersonBill = total / people;

        tipAmountOutput.innerText = `₹${tipAmount.toFixed(2)}`;
        totalAmountOutput.innerText = `₹${total.toFixed(2)}`;
        eachPersonBillOutput.innerText = `₹${eachPersonBill.toFixed(2)}`;
    } else {
        alert("Please enter valid numbers in all fields.");
    }
});

// Clear button functionality
clearBtn.addEventListener("click", () => {
    clearInput();
    clearOutput();
});

// Function to clear inputs
function clearInput() {
    inputBill.value = "";
    inputPeople.value = "";
    inputTip.value = "";
}

// Function to clear outputs
function clearOutput() {
    tipAmountOutput.innerText = "";
    totalAmountOutput.innerText = "";
    eachPersonBillOutput.innerText = "";
}

