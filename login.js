javascript
function login(){

let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

if(user==="admin" && pass==="password"){

document.getElementById("result").innerHTML="Access Granted"

}else{

document.getElementById("result").innerHTML="Denied"

}

}

