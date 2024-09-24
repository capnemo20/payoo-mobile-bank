// step-1: set event handler

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step-2: prevent default behaviour (prevent reloading browser)
    event.preventDefault();
    console.log("clicked");

    // step-3: get the phone number && pin number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);
    //This is temporary
    //step-4: phone and password validation
    if(phoneNumber === "5" && pinNumber === "1234") {
        console.log("you are logged in");
        //step-5: allow user to use website
        window.location.href = "../home.html"
    }
    else{
        alert("wrong phone number or pin");
    }
  });
