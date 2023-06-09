var email;
var passward;
var passcount;
var re_password;
var asterisk;

//document.getElementById("signup").onclick = function(){
function onclick(){
    email = document.getElementById("email").value;
    passward = document.getElementById("pass").value;
    passcount = passward.length;
    re_password = document.getElementById("re_pass").value;
    asterisk = "";

    if(passcount != undefined){
        for(i = 0;i<passcount;i++){asterisk += "*"};
    }
    
};