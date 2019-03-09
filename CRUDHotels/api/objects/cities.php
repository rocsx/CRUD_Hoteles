<?php
/**
 * Created by PhpStorm.
 * User: PC
 * Date: 02/10/2018
 * Time: 09:29 PM
 */

class States
{
    // database connection and table name
    private $conn;
    private $table_name = "cities";

    // object properties
    public $id_city;
    public $city;
    public $id_state;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // read Hoteles
    function read(){

        // select all query
        $query = "SELECT * FROM " . $this->table_name . "  ORDER BY id_city";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }
}