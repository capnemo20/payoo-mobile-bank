// step-1: set event handler

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step-2: prevent default behaviour (prevent reloading browser)
    event.preventDefault();
    console.log("clicked");

    // step-3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);

  });
