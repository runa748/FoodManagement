/*var email;
var password;
var passcount;
var re_password;
var asterisk;

//document.getElementById("signup").onclick = function(){
function onclick(){
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
    passcount = password.length;
    re_password = document.getElementById("re_pass").value;
    asterisk = "";

    if(passcount != undefined){
        for(i = 0;i<passcount;i++){asterisk += "*"};
    }

};*/
function postForm(value) {
 
    var form = document.createElement('form');
    var request = document.createElement('input');
 
    form.method = 'POST';
    form.action = 'http://localhost/FoodManagement/confirmation.html';
 
    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = "POSTだよん";
 
    form.appendChild(request);
    document.body.appendChild(form);
 
    form.submit();
 
}