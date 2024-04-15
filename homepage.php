<?php
$server = "localhost"; 
$username = "root";
$password = "";
$db = "homepage";

$conn = new mysqli($server, $username, $password, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
      
        $result = $conn->query("SELECT * FROM homepage");
        $homepage = array();
        while ($row = $result->fetch_assoc()) {
            $homepage[] = $row;
        }
        echo json_encode($homepage);
        break;
    case 'POST':
      
        $image = $_POST['image'];
        $conn->query("INSERT INTO homepage(image) VALUES ('$image')");
        echo json_encode(array('status' => 'success'));
        break;
    case 'DELETE':
   
        parse_str(file_get_contents("php://input"), $_DELETE);
        $id = $_DELETE['id'];
         $conn->query("DELETE FROM students WHERE id=$id");
        echo json_encode(array('status' => 'success'));
         break;
}
$conn->close();
?>