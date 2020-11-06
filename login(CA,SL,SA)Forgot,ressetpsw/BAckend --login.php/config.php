<?php

	$hostname = "localhost";
	$username = "root";
	$password = "";
	$database = "fyp";
	$conn = mysqli_connect($hostname, $username, $password, $database);
	
	if(!$conn){
		die("Connection failed: ".mysqli_connect_error());
	}
		
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Request-Method: POST');
	header('Content-type: application/json');

?>