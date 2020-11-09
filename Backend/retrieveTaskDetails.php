<?php

$task_id = '';
if (isset($_GET["task_id"])) {
    $task_id = $_GET["task_id"];
}
include "config.php";

$json="";
$sql = "select * from task where task_id='$task_id'";
$result = mysqli_query($conn, $sql);
$json = "";

if($result->num_rows>0){
    while($row[] = $result->fetch_assoc()){
        $tem = $row;
        $json = json_encode($tem);
    }
}
else{
    $json = "No upcoming task!";
}

echo $json;

?>