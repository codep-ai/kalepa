<?php

namespace App\Models;

use App\Helpers\DBConnectionData;
use App\Helpers\DBHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MySqlDatabaseService extends Model
{
    public function loadAllDatabases(): array {
        $sql = 'show databases';

        $dbData = DBConnectionData::loadEnvDbConfig();
        $helper = DBHelper::getInstance();
        $pdo = $helper->getPDO($dbData);
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $rows = $stmt->fetchAll();
        $dbCollections = [];
        foreach($rows as $row) {
            $dbCollections[] = $row[0];
        }
        return $dbCollections;
    }

    public function getTables(array $dbNames = []) : array {
        $dbData = DBConnectionData::loadEnvDbConfig();
        $helper = DBHelper::getInstance();
        $pdo = $helper->getPDO($dbData);

        $dbTables = [];
        foreach($dbNames as $dbName) {
            $sql = 'show tables from ' . $dbName;
            $stmt = $pdo->prepare($sql);
            $stmt->execute();
            $rows = $stmt->fetchAll();
            $dbTables[$dbName] = [];
            foreach($rows as $row) {
                $dbTables[$dbName][] = $row[0];
            }
        }
        return $dbTables;
    }
}
