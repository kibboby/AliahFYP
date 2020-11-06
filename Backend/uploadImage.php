<?php

$target_dir = "BAckend/images";

if(!file_exists($target_dir)){
    mkdir($target_dir, 0777, true);
}

$target_dir = $target_dir . "./" .rand() . "_" . time() . "jpeg";

if (move_uploaded_file($_FILES['image']['tmp_name'], $target_dir)){
    echo json_encode([
        "Message" => "The file has been uploaded", 
        "Status" => "OK"
    ]);
}else{
    echo json_encode([
        "Message" => "Sorry there was an error updating your profile picture",
        "Status" => "Error"
    ]);
}

?>