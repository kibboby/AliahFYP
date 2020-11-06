<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

$date = $obj["task_date"];
$time = $obj["task_time"];
$taskNotes = $obj["task_comments"];
$task_id = $obj["task_id"];

$sqli = "update task set task_id='$task_id',task_date='$date', task_time='$time',task_status='Upcoming',
task_comments='$taskNotes' where task_id='$task_id'";
$resulti = mysqli_query($conn, $sqli);
$json = "";


if ($resulti) {

    // Show the success message.
    $MSG = 'Task Updated Successfully';

    // Converting the message into JSON format.
    $json = json_encode($MSG);

    // Echo, Print the message on screen.
    echo $json;
} else {
    echo 'Try Again ' . $conn->error;
}


mysqli_close($conn);
