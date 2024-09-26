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
    const inputPinNumber = document.getElementById("input-pin-number").value;
    console.log(inputPinNumber);
  });
