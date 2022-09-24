//validate function
var user = document.forms['frm1']['username'];
var pass = document.forms['frm1']['password'];
var letters = /^[a-zA-Z]+$/;

var user_err = document.getElementById("log_err");
var pass_err = document.getElementById("pass_err");

function validate() {
    if (user.value == "" || user.match(letters)) {
        user.style.border = "1px solid red";
        user_err.style.display = "block";
        user.focus();
        return false;
    }
    if (pass.value == "" || pass.value.length < 7 || pass.value.length > 15) {
        pass.style.border = "1px solid red";
        pass_err.style.display = "block";
        pass.focus();
        return false;
    }

}