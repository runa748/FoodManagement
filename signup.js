var email;
var password;
var passcount;
var re_password;
var asterisk;



//document.getElementById("signup").onclick = function(){
function onclick(){
    document.write("a");
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
    passcount = password.length;
    re_password = document.getElementById("re_pass").value;
    asterisk = "";

    if(passcount != undefined){
        for(i = 0;i<passcount;i++){asterisk += "*"};
    }
    
};