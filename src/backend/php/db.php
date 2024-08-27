// Conexión a MongoDB en PHP
<?php
require '../vendor/autoload.php'; // Asegúrate de ajustar la ruta si es necesario

$client = new MongoDB\Client("mongodb://localhost:27017");
$database = $client->inverst; // Nombre de la base de datos
$collection = $database->usuarios; // Nombre de la colección


