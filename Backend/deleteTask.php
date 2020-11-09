<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);
$task_id = $obj["id"];

$sqli = "delete from task where task_id='$task_id'";
$resulti = mysqli_query($conn, $sqli);
$json = "";

if($resulti){
    $MSG = "Successfully delete task";
    $json = json_encode($MSG);
}else{
    $json = json_encode("Unable to delete task");
}
echo $json;

mysqli_close($conn);