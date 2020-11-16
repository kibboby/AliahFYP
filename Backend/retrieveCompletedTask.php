<?php

if (isset($_GET["sales_username"])) {
    $sales_username = $_GET["sales_username"];
}
$sales_username = 'John David';

include "config.php";

$sql = "select * from task where salesperson_username='$sales_username' AND task_status='Completed'";
$result = mysqli_query($conn, $sql);
if (!$result) {
    trigger_error('Invalid query: ' . $conn->error);
}

if ($result->num_rows > 0) {
    while ($row[] = $result->fetch_assoc()) {
        $tem = $row;
        $json = json_encode($tem);
    }
} else {
    $json = "No completed task!";
}

echo $json;
