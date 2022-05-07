<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once dirname(__FILE__)."/BaseDao.class.php";

class LeaderboardDao extends BaseDao{
    public function __construct(){
        parent::__construct("leaderboard");
    }

    public function get_sorted_leaderboard(){
        return $this->query_no_params("SELECT * FROM leaderboard ORDER BY score DESC");
    }
}
?>