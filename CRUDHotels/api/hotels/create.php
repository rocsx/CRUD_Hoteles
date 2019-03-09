<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate hotel object
include_once '../objects/hotel.php';
 
$database = new Database();
$db = $database->getConnection();
 
$hotelObj = new Hotel($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));

// instantiate hotel object
// set hotel property values
$hotelObj->hotel = $data->hotel;
$hotelObj->description = $data->description;
$hotelObj->id_state = $data->id_state;
$hotelObj->stars = $data->stars;
$hotelObj->id_city = $data->id_city;
$hotelObj->status = $data->status;

// create the hotel
if($hotelObj->create()){
    echo '{';
        echo '"message": "El Hotel Se Agrego."';
    echo '}';
}
 
// if unable to create the hotel, tell the user
else{
    echo '{';
        echo '"message": "Error al Crear Hotel."';
    echo '}';
}
?>