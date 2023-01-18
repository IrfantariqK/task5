function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");
  
    var emailRegex = /^\S+@\S+\.\S+$/;
    var isEmailValid = emailRegex.test(email);
  
    if (!name) {
      nameError.innerHTML = "Please Type Your Name";
      document.getElementById("name").classList.add("error-border");
    } else {
      document.getElementById("name").classList.remove("error-border");
    }
  
    if (!isEmailValid) {
      emailError.innerHTML = "Invalid Email Address";
      document.getElementById("email").classList.add("error-border");
    } else {
      emailError.innerHTML = "";
      document.getElementById("email").classList.remove("error-border");
    }
  
    if (password.length < 8) {
      passwordError.innerHTML = "Password Must Be At Least 8 Characters";
      document.getElementById("password").classList.add("error-border");
    } else {
      passwordError.innerHTML = "";
      document.getElementById("password").classList.remove("error-border");
    }
  }
  