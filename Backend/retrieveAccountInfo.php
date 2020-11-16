<?php
include "config.php";

$sql = "select * from salesperson where username='John David'";
$result = mysqli_query($conn, $sql);

if($result->num_rows>0){
    while($row[] = $result->fetch_assoc()){
        $tem = $row;
        $json = json_encode($tem);
    }
}
else{
    echo json_encode("No results found");
}

echo $json;
