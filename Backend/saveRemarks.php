<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

$obj = json_decode($Received_JSON, true);

$leads_id = $obj["LD"];

$remarks = $obj["remarks"];

$Sql_Query = "update leads set remarks='$remarks' where lead_id='$leads_id'";

if (mysqli_query($conn, $Sql_Query)) {
    $MSG = "Remarks updated!";
    $json = json_encode($MSG);
    echo $json;
} else {
    echo 'Try Again' . $conn->error;
}


mysqli_close($conn);