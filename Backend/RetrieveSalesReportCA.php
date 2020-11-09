<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

$Sql_Query = "SELECT * FROM salesperson";

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
