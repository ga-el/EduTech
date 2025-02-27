<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "tu_usuario_mysql";
$password = "tu_contraseña_mysql";
$database = "login_system";

try {
    // Crear la conexión PDO
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // Establecer el modo de error de PDO a excepción
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}
?>