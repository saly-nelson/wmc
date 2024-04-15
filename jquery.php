<?php
session_start();
$server = "localhost";
$username = "root";
$password = "";
$db = "connect";
$conn = new mysqli($server, $username, $password, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":

        $db = "SELECT email FROM connect";
        $result = mysqli_query($conn, $db);
        if (mysqli_num_rows($result) > 0) {
            echo "it already exists";
        } else {
            if ($method == "POST") {
                $firstName = $_POST['firstName'];
                $lastName = $_POST['lastName'];
                $email = $_POST['email'];
                $password = $_POST['password'];
                $phoneNumber = $_POST['phoneNumber'];
                $country = $_POST['country'];
                $province = $_POST['province'];
                $district = $_POST['district'];
                $city = $_POST['city'];

                $sql = "INSERT INTO connect(firstName, lastName, email, password, phoneNumber, country, province, district, city) VALUES ('$firstName','$lastName','$email','$password','$phoneNumber','$country','$province','$district','$city')";
                $resp = $conn->query($sql);
                if ($resp == true) {
                    $last_id = $conn->insert_id;
                    echo "new record created successfully";
                } else {
                    echo "error:" . $sql . "<br>" . $conn->error;
                }

            }
        }
       
        break;

    case "GET":
        $sql = "SELECT * FROM connect";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $data = array();
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            header('Content-Type: application/json');
            echo json_encode($data);
        }
        break;
    case "PUT":
        parse_str(file_get_contents("php://input"), $_PUT);
        $id = $_PUT['id'];
        $firstName = $_PUT['firstName'];
        $lastName = $_PUT['lastName'];
        $email = $_PUT['email'];
        $password = $_PUT['password'];
        $phoneNumber = $_PUT['phoneNumber'];
        $country = $_PUT['country'];
        $province = $_PUT['province'];
        $district = $_PUT['district'];
        $city = $_PUT['city'];
        $sql = "UPDATE connect SET firstName='$firstName', lastName='$lastName',email='$email',password='$password',phoneNumber='$phoneNumber',country='$country',province='$province',district='$district',city='$city' WHERE id=$id";
        $result = $conn->query($sql);
        if ($result === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
        break;
    case "DELETE":
        parse_str(file_get_contents("php://input"), $_DELETE);
        $id = $_DELETE['id'];
        $sql = "DELETE FROM connect WHERE id=$id";
        $result = $conn->query($sql);

        if ($result === TRUE) {
            echo "Record deleted successfully";
        } else {
            echo "Error deleting record: " . $conn->error;
        }
        break;
}
