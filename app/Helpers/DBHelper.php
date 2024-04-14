<?php
namespace App\Helpers;
use App\Helpers\DBConnectionData;

class DBHelper {

  private static $instance = null;

  private $PDOs = [];

  public static function getInstance() {
    if (static::$instance === null) {
      static::$instance = new static();
    }
    return static::$instance;
  }

  public function getPDO(DBConnectionData $data = null): \PDO {
    if ($data === null) {
      $data = DBConnectionData::loadEnvDbConfig();
    }
    if (!empty($this->PDOs[$data->dbName])) {
      return $this->PDOs[$data->dbName];
    }
    if($data->dbType === 'mysql') {
      $dsn = $data->dbType . ':host=' . $data->host . ';port=' . $data->port. ';dbname=' . $data->dbName . ';charset=' . $data->charset;
      $this->PDOs[$data->dbName] = new \PDO($dsn, $data->username, $data->password);
      $this->PDOs[$data->dbName]->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
    }
    return $this->PDOs[$data->dbName];
  }
}