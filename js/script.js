// login button functionality
document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const mobileNumber = 01852213220;
  const pinNumber = 2311;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberConverted = parseInt(pinNumberValue);

  //console.log(mobileNumberConverted, pinNumberConverted);

  if (
    mobileNumber === mobileNumberConverted &&
    pinNumber === pinNumberConverted
  ) {
    window.location.href = "./home.html";
  } else {
    alert("invalid");
  }
});
