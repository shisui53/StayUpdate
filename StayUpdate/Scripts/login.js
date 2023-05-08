

let userData = JSON.parse(localStorage.getItem("account-data")) || [];
  document.querySelector("form").addEventListener("submit", userLogin);

  function userLogin(e) {
    e.preventDefault();
    let heading = document.getElementById("heading");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = userData.find(
      (user) => user.email === email && user.password === password
    );
   
      if (data) {
        alert("Sign in Successful");
        window.location.href = "products.html";
      } else {
        alert("Wrong Credentials");
        location.reload();
      }
    }
  