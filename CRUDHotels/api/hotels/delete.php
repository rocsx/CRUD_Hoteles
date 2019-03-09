<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object file
include_once '../config/database.php';
include_once '../objects/hotel.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare hotel object
$hotelObj = new Hotel($db);
 
// get hotel in format json
$data = json_decode(file_get_contents("php://input"));

// set hotel id to be deleted
$hotelObj->id_hotel = $data->id_hotel;
 
// delete the hotel
if($hotelObj->delete()){
    echo '{';
        echo '"message": "El Hotel se elimino."';
    echo '}';
}
// if unable to delete the hotel
else{
    echo '{';
        echo '"message": "No se pudo eliminar el hotel."';
    echo '}';
}
?>