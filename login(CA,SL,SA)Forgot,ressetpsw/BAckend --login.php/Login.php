<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

$Login_username = $obj["username"];

$Login_password_encode = $obj["password"];

$Login_password=base64_decode($Login_password_encode);

//Checking User entered username and password is correct
$CheckSQL = "select role FROM user_login WHERE username='$Login_username' and password='$Login_password'";

// Executing SQL Query.
$Login = mysqli_fetch_array(mysqli_query($conn, $CheckSQL));

if (isset($Login)) {

	$successLogininput= $Login;
   
    $sucessLogininput_Json= json_encode($successLogininput);
	$x=json_encode($sucessLogininput_Json{6}."".$sucessLogininput_Json[7]);
	echo $x;
	//echo $sucessLogininput_Json;

    
} else {
	
	$wrongLogininput = 'Username or password incorrect';

    // Converting the message into JSON format.
    $wrongLogininput_Json = json_encode($wrongLogininput);

    // Echo, Printing the message on screen.
    echo $wrongLogininput_Json;
   
}
mysqli_close($conn);
