// username and password

function login(){
    var user = document.loginform.user_name.value;
    var pass = document.loginform.pass_word.value;
if(user == "" || pass == ""){
      alert("sorry...Please Enter Username and Passowrd");
 }else{
if((user == "well" || user == "WELL") && pass == "@2023"){
      window.location.replace("http://localhost:4000/home");
}else{
     alert("Please Enter Correct Login details");
}
   }
       }

// username and password validation

alert("you are welcome");