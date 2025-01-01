<?php
// Include database connection
require 'db.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    
    // Input validation
    if (!empty($username) && !empty($password)) {
        // Check if the user exists in the database
        $stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username');
        $stmt->execute(['username' => $username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            // Start a session for the logged-in user
            $_SESSION['username'] = $username;

            // Redirect to the home page
            header('Location: home.php');
            exit;
        } else {
            $error = 'Invalid username or password.';
        }
    } else {
        $error = 'Please fill in both fields.';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="/assets/css/login.css">
</head>
<body>
  <div class="login-container">
    <h1>Login</h1>
    <form method="POST" action="">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <?php if (isset($error)): ?>
      <p style="color: red;"><?php echo htmlspecialchars($error); ?></p>
    <?php endif; ?>
    <p>Don't have an account? <a href="signup.php">Sign Up</a></p>
  </div>
</body>
</html>
