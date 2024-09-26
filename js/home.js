//add money to the account
// addd an event handler to the add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //step-2: get money to be addeed to the account

    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);

    //get the pin number provided
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(pinNumberInput);

    // step-3: verify the pin number
    if (pinNumberInput === "1234") {
      // console.log("adding money to account");
      // step-4: get the current balance
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);

      //step-5: add addMoneyInput with balance
      const newBalance = parseFloat(balance)+parseFloat(addMoneyInput);
      console.log(newBalance);
      // step-6: update the newBalance in the UI/DOM
      document.getElementById("account-balance").innerText = newBalance;

    }
     else {
      alert("failed to add money to account. Please try again!");
    }
  });
