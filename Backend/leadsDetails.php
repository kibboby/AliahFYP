<?php

$json = "";
include "config.php";

if (isset($_GET["lead_name"])) {
    $leads_name = $_GET["lead_name"];
}

// Creating SQL query and insert the record into MySQL database table if email dose not exist in database.
$Sql_Query = "SELECT * FROM leads where lead_name='$leads_name'";

$result = $conn->query($Sql_Query);

if($result->num_rows > 0){
    while($row[] = $result->fetch_assoc()){
        $tem = $row;
        $json = json_encode($tem);
    }
} else {
    echo '';
}
    echo $json;
$conn->close();
?>
