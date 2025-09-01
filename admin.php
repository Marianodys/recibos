<?php
// --- LOGIN MUY SIMPLE ---
$usuario = "admin";
$clave = "4635";

session_start();
if (isset($_POST['user']) && isset($_POST['pass'])) {
    if ($_POST['user'] === $usuario && $_POST['pass'] === $clave) {
        $_SESSION['log'] = true;
    } else {
        echo "Usuario o contraseña incorrectos.";
    }
}

if (!isset($_SESSION['log'])) {
    echo '<form method="post">
            Usuario: <input type="text" name="user"><br>
            Clave: <input type="password" name="pass"><br>
            <input type="submit" value="Ingresar">
          </form>';
    exit;
}

// --- LISTADO DE ARCHIVOS ---
function listar($ruta) {
    $archivos = scandir($ruta);
    foreach($archivos as $archivo) {
        if ($archivo != "." && $archivo != "..") {
            $path = $ruta . "/" . $archivo;
            if (is_dir($path)) {
                echo "<h3>📂 $archivo</h3>";
                listar($path); 
            } else {
                echo "<a href='$path' target='_blank'>📄 $archivo</a><br>";
            }
        }
    }
}

echo "<h2>Listado de recibos</h2>";
listar("recibos");
?>
