

document.querySelector("form").addEventListener("submit", userSignup);
let multiUser = JSON.parse(localStorage.getItem("account-data")) || [];
function userSignup(e) {
  e.preventDefault();
  let obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  let data = multiUser.find((user) => user.email === obj.email);
  if (data) {
    alert("User already registered");
    location.reload()
  } else {
    multiUser.push(obj);
    localStorage.setItem("account-data", JSON.stringify(multiUser));
    alert("User registered successfully");
    window.location.href = "login.html";
  }
}