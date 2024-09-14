function validate(e) {
    e.preventDefault();
    document.getElementById("error").innerHTML = ""
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    var users = {};
    const data = localStorage.getItem('user');

    if (data) {
        users = JSON.parse(data);

    } else {
        users = {};
    }

    let storedUserNameData;
    let storedPasswordData;

    for (const key in users) {
        if (key === "userName") {
            storedUserNameData = users[key];
        }
        if (key === "password") {
            storedPasswordData = users[key];
        }
    }
    console.log(storedUserNameData, storedPasswordData);

    if (storedUserNameData === userName && storedPasswordData === password) {
        window.location.href = "Food-Ordering.html";
    }
    else {
        document.getElementById("error").innerHTML = "Invalid username or password";
    }
}
