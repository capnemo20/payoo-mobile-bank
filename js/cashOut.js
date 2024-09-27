document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = document.getElementById("input-cash-out").value;
    const pinNumber = document.getElementById("input-cash-out-pin").value;
    console.log(cashOut);
    console.log(pinNumber);

    if (pinNumber === "1234") {
        const balance = document.getElementById("account-balance").innerText;
        

        //reduce the balance
        const newBalance = parseFloat(balance) - parseFloat(cashOut);
        console.log(newBalance);
        //set/update newBalance to the UI
        document.getElementById("account-balance").innerText = newBalance;
    }
    else{
        alert("Cash out failed. Please try again!")
    }
  });
