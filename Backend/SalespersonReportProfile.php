<?php
$company_username = '';
$sales_username = '';

if (isset($_GET["company_username"])) {
    $company_username = $_GET["company_username"];
}

if (isset($_GET["sales_username"])) {
    $sales_username = $_GET["sales_username"];
}

include "config.php";

$sqli = "select * from salesperson where admin_username='$company_username' and username='$sales_username'";

$resulti = mysqli_query($conn, $sqli);
$json = "";


if ($resulti->num_rows > 0) {

    while ($row[] = $resulti->fetch_assoc()) {
        $tem = $row;
        $json = json_encode($tem);
    }
} else {
    $json = "No upcoming task!";
}

echo $json;
