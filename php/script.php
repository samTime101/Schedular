<?php
//<!-- AUTHOR : SAMIP REGMi -->
//<!-- SCHEDULER -->
// error_reporting(E_ALL);
// ini_set("display_errors", "1");

$serverName = "";
$userName = "";
$password = "";

$conn = mysqli_connect($serverName, $userName, $password);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

mysqli_select_db($conn, "schedule");

if (isset($_GET["day"]) && isset($_GET["group"])) {
    $day = trim(mysqli_real_escape_string($conn, $_GET["day"]));
    $group = trim(mysqli_real_escape_string($conn, $_GET["group"]));
    $response = [
        "day" => $day,
        "group" => $group,
    ];
} else {
    echo json_encode(["error" => "isset error day and group brorororo"]);
}
$selectAllData = "select * from class_schedule where Day = '$day' and Group_Name = '$group'";
$result = mysqli_query($conn, $selectAllData);
if (mysqli_num_rows($result) > 0) {
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    header("Content-Type: application/json");
    echo json_encode($rows);
}
?>
