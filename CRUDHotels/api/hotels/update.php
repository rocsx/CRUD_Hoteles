<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/hotel.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare hotel object
$hotelObj = new Hotel($db);
 
// get id of hotel to be edited
$data = json_decode(file_get_contents("php://input"));
//$data = (object) $_POST;

// set ID property of hotel to be edited
$hotelObj->id_hotel = $data->id_hotel;
 
// set hotel property values
$hotelObj->hotel = $data->hotel;
$hotelObj->description = $data->description;
$hotelObj->id_state = $data->id_state;
$hotelObj->stars = $data->stars;
$hotelObj->id_city = $data->id_city;
$hotelObj->status = $data->status;
 
// update the hotel
if($hotelObj->update()){
    echo '{';
        echo '"message": "El Hotel Fue Actualizado Con Exito."';
    echo '}';
}
 
// if unable to update the hotel, tell the user
else{
    echo '{';
        echo '"message": "No fue Actualizado"';
    echo '}';
}