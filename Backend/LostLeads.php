<?php
include "config.php";

$sql = "select * from leads where status='Lose'";
$result = mysqli_query($conn, $sql);
$json='';

if($result->num_rows>0){
    while($row[] = $result->fetch_assoc()){
        $tem = $row;
        $json = json_encode($tem);
    }
}
else{
    echo "No results found";
}
echo $json;
?>
