<?php
include('config.php');

// if(isset($_POST['submit_contact'])){
        
//     $name = $_POST['Name'];
//     $email = $_POST['Email'];
//     $phone = $_POST['Phone'];
//     $company = $_POST['Company'];
//     $interest = $_POST['Interest'];
//     $comment = $_POST["Comments"];
    
//     $query = "insert into leads(lead_name,lead_email,lead_contact,comments, lead_company,interest, company_username, salesperson_username) 
//     values('$name','$email','$phone','$comment','$company','$interest', 'Aliah','Wee')";
    
// 	if(mysqli_query($conn, $query)){

//         echo "Record added successfully";
//         echo $query;
// 	}else{
//         echo "ERROR: Could not able to execute $query. " . mysqli_error($conn);
//     }
// }

$name = "kj";
    $email = "oj@gmail.com";
    $phone = "HIH";
    $company = "ji";
    $interest = "jij";
    $comment = "NJHJ";
    
    $query = "insert into leads(lead_name,lead_email,lead_contact,comments, lead_company,interest, company_username, salesperson_username) 
    values('$name','$email','$phone','$comment','$company','$interest', 'Aliah','Wee')";
    
	if(mysqli_query($conn, $query)){

        echo "Record added successfully";
        echo $query;
	}else{
        echo "ERROR: Could not able to execute $query. " . mysqli_error($conn);
    }
