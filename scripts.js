// You can add interactive features here
document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to the homepage!");
});

// Password protection script
document.getElementById("password-submit").addEventListener("click", function () {
    var password = document.getElementById("password-input").value;
    var correctPassword = "kinderopvangtopper"; // Set the correct password here

    if (password === correctPassword) {
        document.getElementById("password-overlay").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("password-error").style.display = "block";
    }
});
