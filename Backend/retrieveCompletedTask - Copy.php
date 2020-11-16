<?php

if (isset($_GET["admin_username"])) {
    $admin_username = $_GET["admin_username"];
}
$admin_username = 'Aliah';

include "config.php";

$sqli = "select salesperson.username, task.salesperson_username, task.task_title, task.task_date 
from task 
inner join salesperson 
on task.salesperson_username=salesperson.username
where salesperson.admin_username='$admin_username'";

$resulti = mysqli_query($conn, $sqli);
if($resulti->num_rows > 0){
    while($row[] = $resulti->fetch_assoc()){
        $tem = $row;
        $json = json_encode($tem);
    }
}

echo $json;

// $sql = "select * from task where salesperson_username='$sales_username' AND task_status='Completed'";
// $result = mysqli_query($conn, $sql);
// if (!$result) {
//     trigger_error('Invalid query: ' . $conn->error);
// }

// if ($result->num_rows > 0) {
//     while ($row[] = $result->fetch_assoc()) {
//         $tem = $row;
//         $json = json_encode($tem);
//     }
// } else {
//     $json = "No completed task!";
// }

// echo $json;
