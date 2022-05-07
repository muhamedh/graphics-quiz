<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__.'/../dao/BaseDao.class.php';

abstract class BaseService {
    protected $dao;

    public function __construct($dao){
        $this->dao = $dao;
    }

    public function add($entity){
        return $this->dao->add($entity);
    }

    public function get_all(){
        return $this->dao->get_all();
    }
}

?>