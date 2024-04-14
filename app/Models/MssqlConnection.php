<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Connection;
use stdClass;

class MssqlConnection extends Connection
{
    use HasFactory;

    public static function getModel(array $data)
    {
        $connection = new static();
        foreach ($data as $key => $value) {
            if (property_exists($connection, $key)) {
                $connection->{$key} = $value;
            }
        }
        return $connection;
    }

    public function connect()
    {
        if (!empty($this->handler)) {
            return $this->handler;
        }
        //dblib - freetds
        $host = $this->dbHost . ':' . $this->dbPort;
        $dsn = 'dblib:host=' . $host . ';dbname=' . $this->dbName;

        // odbc
        $host = $this->dbHost . ',' . $this->dbPort;
        $dsn = 'sqlsrv:Server=' . $host . ';Database=' . $this->dbName;
        $dbOptions = [
            \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION
        ];
        try {
          $conn = new \PDO($dsn, $this->dbUser, $this->dbPassword, $dbOptions);
          $this->handler = $conn;
        } catch (\Exception $e) {
            var_dump($e->getMessage());
            return false;
        }
        return $this->handler;
    }

    public function getTables(): stdClass
    {
        $response = new stdClass;
        $response->success = true;
        $response->data = [];
        $response->error = null;
        try {
            $handler = $this->connect();
            $sql = 'SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = :tableType AND TABLE_CATALOG= :tableCatalog';
            $stmt = $handler->prepare($sql);
            $stmt->bindValue(':tableType', 'BASE TABLE');
            $stmt->bindValue(':tableCatalog', $this->dbName);
            $stmt->execute();
            $tables = $stmt->fetchAll();
            $response->data = $tables;
        } catch (\Exception $e) {
            $response->success = false;
            $response->error = $e->getMessage();
        }
        return $response;
    }
}
