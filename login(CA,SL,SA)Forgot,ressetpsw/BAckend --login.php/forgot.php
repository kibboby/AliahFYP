<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

$FORGOT_email= $obj["email"];


//Checking User entered username and password is correct
$Checkemailsales = "select username FROM salesperson WHERE sales_email='$FORGOT_email'";
$CheckemailcompanyA = "select admin_username FROM company_admin WHERE company_email='$FORGOT_email'";

// Executing SQL Query.
$EmailSales= mysqli_fetch_array(mysqli_query($conn, $Checkemailsales));
$EmailCompanyA= mysqli_fetch_array(mysqli_query($conn, $CheckemailcompanyA));


if (isset($EmailSales)) {

	$Sales= $EmailSales;
   
    $Sales_Json= json_encode($Sales);
	$x=explode(':',$Sales_Json);
	$x2=$x[2];
	$x3=trim($x2,"}");
	$x4=trim($x3,'"');
	$x5=trim($x4,"/\\");
	$x6=json_encode($x5);
	//echo $x6;
	
	$changepsw="UPDATE `user_login` SET `password` = 'Karuna' WHERE `user_login`.`username` = '$x5'";
	$psw= mysqli_query($conn, $changepsw);
	

	
	$sucessfulmsg=json_encode("Psw resset successfull ! Username:"." ".$x6." "."Acess-Level: \"Salesperson\". !Email sended!");
	echo $sucessfulmsg;
} 


else if (isset($EmailCompanyA)) {

	$CompanyA= $EmailCompanyA;
   
    $CompanyA_Json= json_encode($CompanyA);
	$x=explode(':',$CompanyA_Json);
	$x2=$x[2];
	$x3=trim($x2,"}");
	$x4=trim($x3,'"');
	$x5=trim($x4,"/\\");
	$x6=json_encode($x5);
	//echo $x6;
/////////////	

//$msgemail="Password Reset to \"Karuna\"";
//mail("weedragon@gmail.com","Reset Password Successful",$msgemail);

///////////	
	$changepsw="UPDATE `user_login` SET `password` = 'Karuna' WHERE `user_login`.`username` = '$x5'";
	$psw= mysqli_query($conn, $changepsw);
	  
	$sucessfulmsg=json_encode("Psw resset successfull! Username:"." ".$x6." "."Acess-Level: \"CompanyAdmin\". !Email sended!");
	echo $sucessfulmsg;
} 


else {
	
	$wrongemail = 'Invalid email';

    // Converting the message into JSON format.
    $wrongemail_Json = json_encode($wrongemail);

    // Echo, Printing the message on screen.
    echo $wrongemail_Json;
   
}
mysqli_close($conn);
