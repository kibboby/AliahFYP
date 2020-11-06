<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

$sales_username = $obj["username"];

$designation = $obj["Designation"];

$sales_name = $obj["sales_name"];

$sales_email = $obj["sales_email"];

$sales_contact = $obj["sales_contact"];

$Sql_Query = "update salesperson set sales_name='$sales_name',sales_email='$sales_email',
    sales_contact='$sales_contact',designation='$designation' where username='$sales_username'";

if (mysqli_query($conn, $Sql_Query)) {
    $MSG = "Details updated!";
    $json = json_encode($MSG);
    echo $json;
} else {
    echo 'Try Again' . $conn->error;
}


mysqli_close($conn);