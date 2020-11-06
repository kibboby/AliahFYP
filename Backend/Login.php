<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

$Login_username = $obj["username"];

$Login_password = $obj["password"];

//Checking User entered username and password is correct
$CheckSQL = "select Role FROM user_login WHERE username='$Login_username' and password='$Login_password'";

// Executing SQL Query.
$Login = mysqli_fetch_array(mysqli_query($conn, $CheckSQL));

if (isset($Login)) {

	$successLogininput= $Login;
   
    $sucessLogininput_Json= json_encode($successLogininput);
	
	echo $sucessLogininput_Json;
    
} else {
	
	$wrongLogininput = 'Username or password incorrect';

    // Converting the message into JSON format.
    $wrongLogininput_Json = json_encode($wrongLogininput);

    // Echo, Printing the message on screen.
    
   
}
mysqli_close($conn);
