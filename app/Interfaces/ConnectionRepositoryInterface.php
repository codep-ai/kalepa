<?php
namespace App\Interfaces;

interface ConnectionRepositoryInterface {
    public function saveConnectionTables(int $connectionId, array $tables);
}