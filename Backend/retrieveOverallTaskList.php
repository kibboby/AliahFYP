<?php

include "config.php";

$sql = "select * from task where salesperson_username='John David' AND task_status ='Upcoming'";
// $sql = "Select * from task 
// inner join salesperson on salesperson.username=task.salesperson_username 
// where salesperson.admin_username='Aliah'
// AND task.task_status='Completed'";
$result = mysqli_query($conn, $sql);
$json = "";

if($result->num_rows>0){
    while($row[] = $result->fetch_assoc()){
        $tem = $row;
        $json = json_encode($tem);
    }
}
else{
    $json = json_encode("No upcoming task!");
}

echo $json;

?>