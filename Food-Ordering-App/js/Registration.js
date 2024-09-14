
function validate(id) {

    if (id === "name") {
        var name = document.getElementById(id).value;
        if (name.length < 3) {
            document.getElementById(`${id}Err`).innerHTML = "Please enter a valid name";
            return false
        } else {
            document.getElementById(`${id}Err`).innerHTML = "";
            return true
        }
    }

    if (id === "userName") {
        var userName = document.getElementById(id).value;
        if (userName.length < 3) {
            document.getElementById(`${id}Err`).innerHTML = "Please enter a valid username";
            return false
        } else {
            document.getElementById(`${id}Err`).innerHTML = "";
            return true
        }
    }

    if (id === "email") {
        var email = document.getElementById(id).value;
        if (email.indexOf("@") == -1) {
            document.getElementById(`${id}Err`).innerHTML = "Please enter a valid email";
            return false
        } else {
            document.getElementById(`${id}Err`).innerHTML = "";
            return true
        }
    }

    if (id === "phoneNo") {
        var phoneNo = document.getElementById(id).value;
        if (phoneNo.length != 10 || typeof phoneNo != "string") {
            document.getElementById(`${id}Err`).innerHTML = "Please enter a valid phone number";
            return false
        } else {
            document.getElementById(`${id}Err`).innerHTML = "";
            return true
        }
    }

    if (id === "password") {
        var password = document.getElementById(id).value;
        if (password.length < 6 || password.length > 10) {
            document.getElementById(`${id}Err`).innerHTML = "Please enter a valid password";
            return false
        } else {
            document.getElementById(`${id}Err`).innerHTML = "";
            return true
        }
    }

    return true;

}

function register(e) {
    e.preventDefault();

    if (!validate("name") || !validate("uname") || !validate("email") || !validate("phoneNo") || !validate("pwd")) {
        return;
    }

    var name = document.getElementById("name").value;
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var phoneNo = document.getElementById("phoneNo").value;
    var password = document.getElementById("password").value;

    var users = {};
    const data = localStorage.getItem('user');
    
    if (data) {
         users = JSON.parse(data);

    } else {
        users = {};
    }

    for (const key in users) {        
        if (users[key] === userName || email || phoneNo) {
            alert("User already registered");
            return;
        }
    }

    if (userName === localStorage.getItem('user')) {
        alert("Username already exists");
        return;
    }

    if (name === - "" || userName == "" || email == "" || phoneNo == "" || password == "") {
        alert("Please fill all the fields");
        return;
    }

    var user = {
        name: name,
        userName: userName,
        email: email,
        phoneNo: phoneNo,
        password: password
    }

    localStorage.setItem('user', JSON.stringify(user));

    alert("Registered Successfully");
    window.location.href = "Login.html";

}
