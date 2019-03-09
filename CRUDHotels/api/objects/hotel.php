<?php
class Hotel{
 
    // database connection and table name
    private $conn;
    private $table_name = "hotels";
 
    // object properties
    public $id_hotel;
    public $hotel;
    public $description;
    public $id_state;
    public $stars;
    public $id_city;
    public $status;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // read Hoteles
    function read(){
    
        // select all query
        $query = "SELECT * FROM " . $this->table_name . "  ORDER BY id_hotel";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
    
        return $stmt;
    }


    // create hotels
    function create(){ 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
            hotel=:hotel, description=:description, id_state=:id_state, stars=:stars, id_city=:id_city, status=:status";
 
    // prepare query
    $stmt = $this->conn->prepare($query);

    // sanitize
    $this->hotel=htmlspecialchars(strip_tags($this->hotel));   
    $this->description=htmlspecialchars(strip_tags($this->description));
    $this->id_state=htmlspecialchars(strip_tags($this->id_state));
    $this->stars=htmlspecialchars(strip_tags($this->stars));
    $this->id_city=htmlspecialchars(strip_tags($this->id_city));
    $this->status=htmlspecialchars(strip_tags($this->status));
 
    // bind values
    $stmt->bindParam(":hotel", $this->hotel);
    $stmt->bindParam(":description", $this->description);
    $stmt->bindParam(":id_state", $this->id_state);
    $stmt->bindParam(":stars", $this->stars);  
    $stmt->bindParam(":id_city", $this->id_city);
    $stmt->bindParam(":status", $this->status);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
    // used when filling up the update product form
    function readOne(){
    
        // query to read single record
        $query = "SELECT * 
        FROM " . $this->table_name . " 
        WHERE 
        id_hotel = ? 
        LIMIT 0,1 ";
    
        // prepare query statement
        $stmt = $this->conn->prepare( $query );
    
        // bind id of product to be updated
        $stmt->bindParam(1, $this->id_hotel);
    
        // execute query
        $stmt->execute();
    
        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
        // set values to object properties
        $this->id_hotel = $row['id_hotel'];
        $this->hotel = $row['hotel'];
        $this->description = $row['description'];
        $this->id_state = $row['id_state'];
        $this->stars = $row['stars'];
        $this->id_city = $row['id_city'];
        $this->status = $row['status'];

    }
// update the hotel
function update(){
 
    // update query
    $query = "UPDATE
                " . $this->table_name . "
            SET
            hotel=:hotel,
            description=:description,
            id_state=:id_state,
            stars=:stars,
            id_city=:id_city, 
            status=:status
            WHERE
                id_hotel = :id_hotel";
               
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->id_hotel=htmlspecialchars(strip_tags($this->id_hotel));
    $this->hotel=htmlspecialchars(strip_tags($this->hotel));   
    $this->description=htmlspecialchars(strip_tags($this->description));
    $this->id_state=htmlspecialchars(strip_tags($this->id_state));
    $this->stars=htmlspecialchars(strip_tags($this->stars));
    $this->id_city=htmlspecialchars(strip_tags($this->id_city));
    $this->status=htmlspecialchars(strip_tags($this->status));
  
 
    // bind new values
    $stmt->bindParam(':id_hotel', $this->id_hotel);
    $stmt->bindParam(":hotel", $this->hotel);
    $stmt->bindParam(":description", $this->description);
    $stmt->bindParam(":id_state", $this->id_state);
    $stmt->bindParam(":stars", $this->stars);  
    $stmt->bindParam(":id_city", $this->id_city);
    $stmt->bindParam(":status", $this->status);
  
 
    // execute the query
    if($stmt->execute()){
        return true;
    }
 
    return false;
}


// delete the product
function delete(){
 
    // delete query
    $query = "DELETE FROM " . $this->table_name . " WHERE id_hotel = ?";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->id_hotel=htmlspecialchars(strip_tags($this->id_hotel));
 
    // bind id of record to delete
    $stmt->bindParam(1, $this->id_hotel);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
}
}