<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

$obj = json_decode($Received_JSON, true);
$leads_id = $obj["id"];
$leads_status = $obj["status"];

$sqli = "update leads set status='$leads_status' where lead_id='$leads_id'";
$resulti = mysqli_query($conn, $sqli);
$json = "";

if($resulti){
    $json = "Successfully updated lead's status";
}else{
    $json = "Unable to update lead's status";
}
echo $json;

mysqli_close($conn);