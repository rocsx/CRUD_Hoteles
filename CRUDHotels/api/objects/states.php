<?php
class States
{
    // database connection and table name
    private $conn;
    private $table_name = "states";

    // object properties
    public $id_state;
    public $states;


    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;    }

    // read States
    function read()
    {

        // select all query
        $query = "SELECT * FROM " . $this->table_name . "  ORDER BY id_state";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }
}
