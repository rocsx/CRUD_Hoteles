<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/cities.php';

// instantiate database and hotel object
$database = new Database();
$db = $database->getConnection();

// initialize object
$cities = new States($db);

// query hotel
$stmt = $cities->read();
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){

    // hotel array
    $cities_arr=array();
    $cities_arr["records"]=array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $city_item=array(
            "id_city" => $id_city,
            "city" => $city,
            "id_state" => $id_state
        );
        array_push($cities_arr["records"], $city_item);
    }

    echo json_encode($cities_arr);
}
else{
    echo json_encode(
        array("message" => "No hay Ciudades en la lista")
    );
}
?>