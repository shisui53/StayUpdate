


let form = document.getElementById("adminLogin")
form.addEventListener("submit",()=>{
   event.preventDefault();
   let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;
  
   if(email=="admin@gmail.com"&& pass=="admin@123"){
    window.location.href="admin.html"
    alert("Welcome")
      
   }
   else{
       alert("Wrong Credentials")
   }
})

