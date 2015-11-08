var handlePass = document.getElementById("snacklord");
  var passcode = function(event) {
    event.preventDefault()

      if (!event.target.password.value) {
        return alert("Try again");
      }

      var snackLord = event.target.password.value;
      if (snackLord === "Snacklord") {
        location.href ="sales.html";
      } else {
        alert("*~W R O N G~*");
      }
      event.target.password.value = null
  };
handlePass.addEventListener('submit', passcode);
