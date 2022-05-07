<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

Flight::route('GET /leaderboard', function(){
    Flight::json(Flight::leaderService()->get_all());
});
?>