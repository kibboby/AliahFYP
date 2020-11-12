<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);
$task_id = $obj["id"];

$sqli = "update task set task_status='Completed' where task_id='$task_id'";
$resulti = mysqli_query($conn, $sqli);
$json = "";

if($resulti){
    $MSG = "Successfully updated task's status";
    $json = json_encode($MSG);
}else{
    $json = json_encode("Unable to update task");
}
echo $json;

mysqli_close($conn);