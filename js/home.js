const validPin = 1234;
//function to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}
//fucntion when you don't want to convert string to number
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// function to get inner text
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

//function to set innerText
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

//function to get toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
//function to toggle button
function handleToggleBtns(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");

    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}
// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount");

    const pin = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");

    if (accountNumber.length < 11) {
      alert("Invalid Account Number");
      return;
    }

    if (pin !== validPin) {
      alert("invalid pin number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance);
  });

// cashout money feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = getInputValueNumber("withdraw-amount");

  const availableBalance = getInnerText("available-balance");

  const totalNewAvailableBalance = availableBalance - amount;
  console.log(totalNewAvailableBalance);

  setInnerText(totalNewAvailableBalance);
});

// toggling feature

document
  .getElementById("add-money-card-btn")
  .addEventListener("click", function () {
    handleToggle("add-money-parent");

    handleToggleBtns("add-money-card-btn");
  });

document
  .getElementById("cash-out-card-btn")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");

    handleToggleBtns("cash-out-card-btn");
  });

document
  .getElementById("transfer-money-card-btn")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");

    handleToggleBtns("transfer-money-card-btn");
  });
document
  .getElementById("get-bonus-card-btn")
  .addEventListener("click", function () {
    handleToggle("get-bonus-parent");

    handleToggleBtns("get-bonus-card-btn");
  });
