<?php
if (isset($_GET["lead_name"])) {
    $leads_name = $_GET["lead_name"];
}
if (isset($_GET["sales_username"])) {
    $sales_username = $_GET["sales_username"];
}
include "config.php";

$leads_id = '';

$sqli = "select * from leads where lead_name='$leads_name'";
$resulti = mysqli_query($conn, $sqli);
$json = "";

if ($resulti->num_rows > 0) {
    while ($row = mysqli_fetch_assoc($resulti)) {
        $leads_id = $row['lead_id'];
    }

    $sql = "select * from task where lead_id='$leads_id' AND salesperson_username='John David' order by task_status DESC";
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
        $json = "No upcoming task!";
    }
}

echo $json;


// include "config.php";

// $sql = "select * from task";
// $result = mysqli_query($conn, $sql);
// $json = "";

// if (!$result) {
// trigger_error('Invalid query: ' . $conn->error);
// }

// if ($result->num_rows > 0) {
// while ($row[] = $result->fetch_assoc()) {
// $tem = $row;
// $json = json_encode($tem);
// }
// } else {
// $json = "No upcoming task!";
// }


// echo $json;
