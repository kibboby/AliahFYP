<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

$obj = json_decode($Received_JSON, true);

$leads_id = $obj["LD"];

$quote = $obj["quote"];

$Sql_Query = "update leads set Quote_Agreed='$quote' where lead_id='$leads_id'";

if (mysqli_query($conn, $Sql_Query)) {
    $MSG = "Quotation updated!";
    $json = json_encode($MSG);
    echo $json;
} else {
    echo 'Try Again' . $conn->error;
}


mysqli_close($conn);