// Registration

var registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("registerEmail").value;
        var password = document.getElementById("registerPassword").value;
        var confirmPassword =
            document.getElementById("confirmPassword").value;

        var message = document.getElementById("registerMessage");

        if (password !== confirmPassword) {

            message.innerHTML = "Passwords do not match!";
            message.style.color = "red";

            return;
        }

        // Save user information in browser
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        message.innerHTML = "Registration successful!";
        message.style.color = "green";

        setTimeout(function() {
            window.location.href = "login.html";
        }, 1000);

    });
}


// Login

var loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        var email = document.getElementById("loginEmail").value;
        var password = document.getElementById("loginPassword").value;

        var savedEmail = localStorage.getItem("email");
        var savedPassword = localStorage.getItem("password");

        var message = document.getElementById("loginMessage");

        if (email === savedEmail && password === savedPassword) {

            message.innerHTML = "Login successful!";
            message.style.color = "green";

            localStorage.setItem("loggedIn", "true");

            setTimeout(function() {
                window.location.href = "home.html";
            }, 1000);

        } else {

            message.innerHTML = "Invalid email or password!";
            message.style.color = "red";

        }

    });
}


// Home Page

if (window.location.pathname.includes("home.html")) {

    var loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
        window.location.href = "login.html";
    }

    var name = localStorage.getItem("name");

    var welcome = document.getElementById("welcomeMessage");

    if (welcome && name) {
        welcome.innerHTML = "Welcome, " + name + "!";
    }
}


// Logout

function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";
}