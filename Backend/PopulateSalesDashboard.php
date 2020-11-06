<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

// Creating SQL query and insert the record into MySQL database table if email dose not exist in database.
$Sql_Query = "SELECT * FROM leads";

$result = $conn->query($Sql_Query);

if($result->num_rows > 0){
    while($row[] = $result->fetch_assoc()){
        $tem = $row;
        $json = json_encode($tem);
    }
} else {
    echo 'No Result Found';
}
    echo $json;
$conn->close();
?>
