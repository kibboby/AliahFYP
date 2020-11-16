<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

$taskTitle = "Appointment";
$task_status = "Upcoming";
$date = $obj["task_date"];
$time = $obj["task_time"];
$location = $obj["task_location"];
$taskNotes = $obj["task_comments"];
$salesperson = "John David";
// $salesperson = $obj["salesperson_username"];
$lead = $obj["leads_name"];
$leads_id= "";

$sqli = "select * from leads where lead_name='$lead'";
$resulti = mysqli_query($conn, $sqli);
$json = "";

if ($resulti->num_rows > 0) {
    while ($row = mysqli_fetch_assoc($resulti)) {
        $leads_id = $row['lead_id'];
    }

    // Creating SQL query and insert the record into MySQL database table if email dose not exist in database.
    $CheckSQL = "select * FROM leads WHERE lead_id='$leads_id' AND salesperson_username='$salesperson'";
    $result = mysqli_query($conn, $CheckSQL);

    if ($result) {
        $Sql_Query = "insert into task (task_title, task_date,task_time,location,task_comments, task_status, salesperson_username, lead_id) values 
    ('$taskTitle', '$date','$time','$location','$taskNotes', '$task_status','$salesperson', '$leads_id')";

        if (mysqli_query($conn, $Sql_Query)) {

            // Show the success message.
            $MSG = 'Task Added Successfully';

            // Converting the message into JSON format.
            $json = json_encode($MSG);

            // Echo, Print the message on screen.
            echo $json;
        } else {
            echo 'Try Again ' . $conn->error;
        }
    }
}
mysqli_close($conn);
