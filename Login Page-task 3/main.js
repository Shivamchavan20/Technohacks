function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Perform basic validation
    if (email === "" || password === "") {
      alert("Email and password are required");
      return;
    }
  
    // Simulate password hashing (replace this with proper hashing in a real implementation)
    var hashedPassword = password;
  
    // we would typically send the email and hashed password to a server for validation
    
    alert("Login successful! Welcome, " + email + "!");
  }
  
  