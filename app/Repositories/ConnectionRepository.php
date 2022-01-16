<?php
namespace App\Repositories;

use App\Interfaces\ConnectionRepositoryInterface;
use App\Models\Connection;
use Illuminate\Support\Facades\DB;

class ConnectionRepository implements ConnectionRepositoryInterface {

    public function saveConnectionTables(int $connectionId, array $tables)
    {
        foreach ($tables as $table) {
            $sql = 'INSERT IGNORE INTO connection_tables (connection_id, name, created_at, updated_at) VALUES (:id, :name, :created, :updated)';
            DB::insert($sql, ['id' => $connectionId, 'name'=>$table, 'created' => date('Y-m-d H:i:s'), 'updated' => date('Y-m-d H:i:s')]);
        }

        $inTables = '';
        $inTablesBinding = [];
        foreach($tables as $index => $table) {
            $inTables .= ':table_' . $index . ', ';
            $inTablesBinding['table_' . $index] = $table;
        }
        $inTables = rtrim($inTables, ', ');

        $sql = 'DELETE FROM connection_tables WHERE name NOT IN (' . $inTables . ')';
        DB::delete($sql, $inTablesBinding);
    }


    public function getConnectionTables(int $connectionId) {
        /*
        this code returns Illuminate\Support\Collection
        $rows = DB::table('connection_tables')
        ->where('connection_id', $connectionId)
        ->get();
        */

        // this code returns simple array
        $sql = 'SELECT * FROM connection_tables where connection_id = ' . $connectionId;
        $rows = DB::select($sql);
        return $rows;
    }

    public function getTableColumns($pdo, string $table) {
        $sql  = 'exec sp_columns @table_name = :table_name';
        $stmt = $pdo->prepare($sql);
        $stmt->execute($sql, [':table_name' => $table]);
        $columns = $stmt->fetchAll();
        return $columns;
    }

    public function connect($connecion) {
        
    }
}
