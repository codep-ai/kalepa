<?php
namespace App\Repositories;

use App\Interfaces\ConnectionRepositoryInterface;
use App\Models\Connection;
use Illuminate\Support\Facades\DB;
use App\Helpers\DBHelper;

class MssqlConnectionRepository implements ConnectionRepositoryInterface {
    public function save($mssqlConnection) {
        $sql = '
            INSERT INTO connections (name, host, port, dbname, username, password, `schema`, type, role) VALUES 
            (:name, :host, :port, :dbname, :username, :password, :schema, :type, :role)
        ';
        $helper = DBHelper::getInstance();
        $pdo = $helper->getPDO();
        $stmt = $pdo->prepare($sql);
        $bind = [
            ':name' => $mssqlConnection->name,
            ':host' => $mssqlConnection->dbHost,
            ':port' => $mssqlConnection->dbPort,
            ':dbname' => $mssqlConnection->dbName,
            ':username' => $mssqlConnection->dbUser,
            ':password' => $mssqlConnection->dbPassword,
            ':schema' => $mssqlConnection->dbSchema,
            ':type' => $mssqlConnection->type,
            ':role' => $mssqlConnection->role,
        ];
        $stmt->execute($bind);
        return $pdo->lastInsertId();
    }
}
