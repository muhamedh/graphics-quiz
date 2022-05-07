<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once  dirname(__FILE__)."../../vendor/autoload.php";
require_once  dirname(__FILE__)."/services/BaseService.class.php";
require_once  dirname(__FILE__)."/services/LeaderboardService.class.php";

Flight::register('baseService', 'BaseService');
Flight::register('leaderService', 'LeaderboardService');

require_once __DIR__.'/routes/LeaderboardRoutes.php';


Flight::start();
?>
