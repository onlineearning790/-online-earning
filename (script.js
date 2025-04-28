document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple login validation (You can customize this with real authentication later)
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        // Redirect to another page or dashboard after successful login
        window.location.href = "https://www.example.com"; // Replace with your URL
    } else {
        alert("Invalid username or password.");
    }
});
