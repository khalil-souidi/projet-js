
function checkPassword(form){
let password =(document.getElementById('password').value);
let repass=(document.getElementById('repass').value);
if(password != repass){
    document.getElementById('r').innerHTML="please match the passwords";
    return false;
}
else return true;
}