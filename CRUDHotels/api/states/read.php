<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/states.php';

// instantiate database and hotel object
$database = new Database();
$db = $database->getConnection();

// initialize object
$state = new States($db);

// query hotel
$stmt = $state->read();
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){

    // hotel array
    $states_arr=array();
    $states_arr["records"]=array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $city_item=array(
            "id_state" => $id_state,
            "state" => $state


        );
        array_push($states_arr["records"], $city_item);
    }

    echo json_encode($states_arr);
}

else{
    echo json_encode(
        array("message" => "No hay Estados en la lista")
    );
}
?>