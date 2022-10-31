function verify(){
  var first_password = document.getElementById("pass1"); 
  var second_password = document.getElementById("pass2"); 
  if(first_password.value != second_password.value){
    alert("Error");
  }
}