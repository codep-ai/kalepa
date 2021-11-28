<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Connection;
use stdClass;

class MssqlConnection extends Connection
{
    use HasFactory;

    private static $handler = null;

    public static function getHandler(MssqlConnection $connection)
    {
        if (static::$handler === null) {
            $host = $connection->host . ',' . $connection->port;
            $dbname = $connection->dbname;
            $username = $connection->username;
            $password = $connection->password;
            $dsn = 'sqlsrv:Server=' . $host . ';Database=' . $dbname;
            $conn = new \PDO($dsn, $username, $password);
            static::$handler = $conn;
        }
        return static::$handler;
    }

    public function getTables(): stdClass
    {
        $response = new stdClass;
        $response->success = true;
        $response->data = [];
        $response->error = null;
        try {
            $handler = static::getHandler($this);
            $sql = 'SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = :tableType AND TABLE_CATALOG= :tableCatalog';
            $stmt = $handler->prepare($sql);
            $stmt->bindValue(':tableType', 'BASE TABLE');
            $stmt->bindValue(':tableCatalog', $this->dbname);
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
