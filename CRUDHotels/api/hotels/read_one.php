<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/hotel.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare hotel object
$hotelObj = new Hotel($db);
 
// set ID property of hotel to be edited
$hotelObj->id_hotel = isset($_GET['id_hotel']) ? $_GET['id_hotel'] : die();
 
// read the details of hotel to be edited
$hotelObj->readOne();
 
// create array
$hotel_arr = array(
    "id_hotel" =>  $hotelObj->id_hotel,
    "hotel" => $hotelObj->hotel,
    "description" => $hotelObj->description,
    "id_state" => $hotelObj->id_state,
    "stars" => $hotelObj->stars,
    "id_city" => $hotelObj->id_city,
    "status" => $hotelObj->status 
);
// make it json format
print_r(json_encode($hotel_arr));
?>