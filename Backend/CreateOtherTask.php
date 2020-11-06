<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

$taskTitle = "Other";

$task_status = "pending";

$date = $obj["task_date"];

$time =$obj["task_time"];

$taskNotes = $obj["task_comments"];

$salesperson = $obj["salesperson_username"];

$lead = $obj["lead_id"];

// Creating SQL query and insert the record into MySQL database table if email dose not exist in database.
$CheckSQL = "select * FROM leads WHERE lead_id='$lead' AND salesperson_username='$salesperson'";
$result = mysqli_query($conn, $CheckSQL);

// Executing SQL Query.
$check = mysqli_fetch_array($result);

if (isset($check)) {
    $Sql_Query = "insert into task (task_title, task_date,task_time,task_comments, task_status, salesperson_username, lead_id) values 
    ('$taskTitle', '$date','$time','$taskNotes', '$task_status','$salesperson', '$lead')";

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
mysqli_close($conn);
