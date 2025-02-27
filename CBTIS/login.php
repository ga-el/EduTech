<?php
// Incluir el archivo de conexión a la base de datos
require_once 'connect.php';

// Verificar si se envió el formulario de Sign In
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los valores del formulario
    $username = $_POST['username'];
    $password = $_POST['password'];

    try {
        // Preparar la consulta SQL para buscar al usuario
        $stmt = $conn->prepare("SELECT * FROM user WHERE username = :username");
        $stmt->bindParam(':username', $username);
        $stmt->execute();

        // Verificar si se encontró un usuario
        if ($stmt->rowCount() > 0) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            // Verificar la contraseña
            if (password_verify($password, $user['password'])) {
                // Iniciar sesión del usuario
                session_start();
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];

                // Redirigir al usuario a la página de bienvenida
                header('Location: welcome.php');
                exit;
            } else {
                $error_message = 'Nombre de usuario o contraseña incorrectos.';
            }
        } else {
            $error_message = 'Nombre de usuario o contraseña incorrectos.';
        }
    } catch (PDOException $e) {
        $error_message = 'Error de conexión a la base de datos: ' . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    <!-- Incluir el CSS del formulario de Sign In -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="sign-in-container">
        <h2>Sign In</h2>
        <?php if (isset($error_message)) { ?>
            <div class="error-message"><?php echo $error_message; ?></div>
        <?php } ?>
        <form method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
            </div>


            
            <button type="submit" class="sign-in-button">Sign In</button>
            <a href="register.php" class="login-button">aun no tienes cuenta? Register</a>
        </form>
    </div>

    <!-- Incluir el JavaScript para las animaciones -->
    <script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
    <script src="script.js"></script>
</body>
</html>