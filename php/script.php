<?php
//<!-- AUTHOR : SAMIP REGMi -->
//<!-- SCHEDULER -->
header("Content-Type: application/json");

if (isset($_GET["day"]) && isset($_GET["group"])) {
    $day = trim($_GET["day"]);
    $group = trim($_GET["group"]);
    $response = [
        "day" => $day,
        "group" => $group,
    ];
    echo json_encode($response);
} else {
    echo json_encode(["error" => "isset error day and group brorororo"]);
}

?>
