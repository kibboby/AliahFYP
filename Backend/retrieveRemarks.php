<?php

if (isset($_GET["lead_id"])) {
    $lead_id = $_GET["lead_id"];
}

$json="";

include "config.php";

$sql = "select * from leads where lead_id='$lead_id'";
$result = mysqli_query($conn, $sql);
if ($result) {
    while ($row[] = $result->fetch_assoc()) {
        $tem = $row;
        $json = json_encode($tem);
    }
} else {
    echo 'Error ' . $conn->error;
}

echo $json;

mysqli_close($conn);

?>