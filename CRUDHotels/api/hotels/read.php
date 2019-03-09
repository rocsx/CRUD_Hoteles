<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/hotel.php';
 
// instantiate database and hotel object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$hotel = new Hotel($db);
 
// query hotel
$stmt = $hotel->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // hotel array
    $hotels_arr=array();
    $hotels_arr["records"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $hotel_item=array(
            "id_hotel" => $id_hotel,
            "hotel" => $hotel,
            "description" => html_entity_decode($description),
            "id_state" => $id_state,
            "stars" => $stars,
            "id_city" => $id_city,
            "status" => $status
        );
        array_push($hotels_arr["records"], $hotel_item);
    }
 
    echo json_encode($hotels_arr);
}
 
else{
    echo json_encode(
        array("message" => "No hay Hoteles en la lista")
    );
}
?>