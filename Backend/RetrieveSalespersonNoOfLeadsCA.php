<?php
$company_username = '';
$sales_username = '';
$status = '';

if (isset($_GET["company_username"])) {
    $company_username = $_GET["company_username"];
}

if (isset($_GET["sales_username"])) {
    $sales_username = $_GET["sales_username"];
}

if (isset($_GET["status"])) {
    $status = $_GET["status"];
}

include "config.php";

if ($status == "") {
    $sqli = "select COUNT(*) AS lead from leads 
where company_username='$company_username' and salesperson_username='$sales_username'";
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
}else{
    $sqli = "select COUNT(*) AS lead from leads 
where company_username='$company_username' and salesperson_username='$sales_username' and status='$status'";
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
    
}

echo $json;
