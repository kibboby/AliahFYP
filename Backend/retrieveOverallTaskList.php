<?php

include "config.php";

$sql = "select * from task where salesperson_username='Mr Pimple' AND task_status ='Upcoming'";
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