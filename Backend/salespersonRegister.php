<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

$sales_username = $obj["sales_username"];

$designation = $obj["Designation"];

$sales_name = $obj["sales_name"];

$sales_email = $obj["sales_email"];

$sales_contact = $obj["sales_contact"];

$sales_password = "karuna123";

//Checking User entered Email is already exist or not in MySQL database using SQL query.
$CheckSQL = "select * FROM salesperson WHERE sales_email='$sales_email'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($conn, $CheckSQL));

if (isset($check)) {

    $Duplicate_email = 'Email Already Exist, Please Try Again With Different Email.';

    // Converting the message into JSON format.
    $Duplicate_email_Json = json_encode($Duplicate_email);

    // Echo, Printing the message on screen.
    echo $Duplicate_email_Json;
} else {

    // Creating SQL query and insert the record into MySQL database table if email dose not exist in database.

    $Sql_Query = "insert into salesperson (sales_username,sales_name, sales_email,sales_contact,sales_password,Designation) values 
    ('$sales_username','$sales_name','$sales_email','$sales_contact','$sales_password','$designation')";

    if (mysqli_query($conn, $Sql_Query)) {

        // Show the success message.
        $MSG = 'User Registered Successfully';

        // Converting the message into JSON format.
        $json = json_encode($MSG);

        // Echo, Print the message on screen.
        echo $json;
    } else {
        echo 'Try Again' . $conn->error;
    }
}
mysqli_close($conn);
