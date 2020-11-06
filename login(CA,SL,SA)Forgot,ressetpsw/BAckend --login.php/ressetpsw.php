<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

$newpsw=$obj["newpsw"];
$retypepsw=$obj["retypepsw"];
$user=$obj["user"];

//Checking User entered username and password is correct
$Changepsw = "UPDATE `user_login` SET `password` = '$newpsw' WHERE `user_login`.`username` = '$user'";


// Executing SQL Query.
$psw= mysqli_fetch_array(mysqli_query($conn, $Changepsw));

mysqli_close($conn);
