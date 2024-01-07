var userName = document.getElementById("UserInput");
var userEmail = document.getElementById("emailInput");
var userPass = document.getElementById("passInput");
var users;
if (localStorage.getItem("users") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
}
function signUp() {
    var isInputValid = isINputsVaild();
    var doesNotExist = !isExist();
  if (isInputValid && doesNotExist) {
    var user = {
      name: userName.value,
      email: userEmail.value,
      pass: userPass.value,
    };
    users.push(user);
    localStorage.setItem("user", JSON.stringify(users));
    localStorage.setItem("sessionUserName", user.name);
    var confrim = document.getElementById("confirm_Msg");
    confrim.classList.replace("d-none", "d-block");
    var sign = document.getElementById("signIn");
    sign.classList.replace("d-none", "d-block");
  } else {
    var tryAgain = document.getElementById("faildSigning");
    tryAgain.classList.replace("d-none", "d-block");
  }

  clear();
}
function usrNameVaildation() {
  var userNameAlert = document.getElementById("userNameAlert");
  var regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
  if (regex.test(userName.value) == true && userName.value != "") {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    userNameAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    userNameAlert.classList.replace("d-none", "d-block");
    return false;
  }
}
function passwordValidation() {
  var regexx = /^.{5,15}$/;
  var userPassAlert = document.getElementById("userPassAlert");

  if (regexx.test(userPass.value) == true && userPass.value != "") {
    userPass.classList.add("is-valid");
    userPass.classList.remove("is-invalid");
    userPassAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    userPass.classList.add("is-invalid");
    userPass.classList.remove("is-valid");
    userPassAlert.classList.replace("d-none", "d-block");
    return false;
  }
}
function emailValidation() {
  var userEmailAlert = document.getElementById("userEmailAlert");
  var regex = /@[a-z]{3,10}(\.com)$/;
  if (regex.test(userEmail.value) == true && userEmail.value != "") {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    userEmailAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    userEmailAlert.classList.replace("d-none", "d-block");
    return false;
  }
}
function isINputsVaild() {
  usrNameVaildation();
  passwordValidation();
  emailValidation();
  if (
    usrNameVaildation() == true &&
    passwordValidation() == true &&
    emailValidation() == true
  ) {
    return true;
  } else {
    return false;
  }
}
function isExist() {
  var msgExist = document.getElementById("msgExist");
  for (var i = 0; i < users.length; i++) {
    if (
      users[i].name.toLowerCase() == userName.value.toLowerCase() ||
      users[i].email.toLowerCase() == userEmail.value.toLowerCase()
    ) {
      userName.classList.remove("is-valid");
      userEmail.classList.remove("is-valid");
      msgExist.classList.replace("d-none", "d-block");
      return true;
    } else {
      return false;
    }
  }
}
function clear() {
  userName.value = "";
  userEmail.value = "";
  userPass.value = "";
}
 var user_name=localStorage.getItem("sessionUserName");
 
/* function Login() {
  var logEmail = document.getElementById("loginEmail");
  var passlogin = document.getElementById("loginPass");
  var wrongMsg = document.getElementById("wrongMsg");
  var logBtn=document.getElementById("logBtn");

  if (logEmail.value == "" || passlogin.value == "") {
    var fillMsg = document.getElementById("fillMsg");
    fillMsg.classList.replace("d-none", "d-block");
    return false;
  }
  for (var i = 0; i < users.length; i++) {
    if (
      users[i].email.toLowerCase() == logEmail.value.toLowerCase() && users[i].pass.toLowerCase() == passlogin.value.toLowerCase() ) 
      {
      localStorage.setItem("sessionUserName", users[i].name);
      logBtn.setAttribute("href","welcome.html");
      
    }
    else {
      wrongMsg.classList.replace("d-none", "d-block");
    }
  }
} */
function Login() {
  var logEmail = document.getElementById("loginEmail");
  var passlogin = document.getElementById("loginPass");
  var wrongMsg = document.getElementById("wrongMsg");
  var logBtn = document.getElementById("logBtn");

  if (logEmail.value == "" || passlogin.value == "") {
    var fillMsg = document.getElementById("fillMsg");
    fillMsg.classList.replace("d-none", "d-block");
    return false;
  }

  for (var i = 0; i < users.length; i++) {
    if (
      users[i].email.toLowerCase() == logEmail.value.toLowerCase() &&
      users[i].pass.toLowerCase() == passlogin.value.toLowerCase()
    ) {
      localStorage.setItem("sessionUserName", users[i].name);
      break; // exit the loop after finding the correct user
    } else {
      wrongMsg.classList.replace("d-none", "d-block");
    }
  }

  // Redirect to welcome.html after setting the sessionUserName
  window.location.href = "welcome.html";
}

function display() {
  
  var spanUserName = document.getElementById("UserrName");

  if (user_name) {
    spanUserName.innerHTML = user_name;
  } else {
    // Handle the case where the sessionUserName is not set
    spanUserName.innerHTML = "Guest";
  }
}
