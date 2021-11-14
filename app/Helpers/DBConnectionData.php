<?php
namespace App\Helpers;

class DBConnectionData {
  public $host;
  public $port;
  public $dbName;
  public $charset;
  public $username;
  public $password;
  public $dbType;

  public static function loadEnvDbConfig() : DBConnectionData {
    $dbType = env('DB_CONNECTION', 'mysql');
    $host = env('DB_HOST', 'localhost');
    $port = env('DB_PORT', '3306');
    $dbName = env('DB_DATABASE', 'mysql');
    $username = env('DB_USERNAME', 'root');
    $password = env('DB_PASSWORD', 'root');
    $charset = env('DB_CHARSET', 'utf8');

    $object = new DBConnectionData();
    $object->dbType = $dbType;
    $object->host = $host;
    $object->port = $port;
    $object->dbName = $dbName;
    $object->charset = $charset;
    $object->username = $username;
    $object->password = $password;

    return $object;
  }
}