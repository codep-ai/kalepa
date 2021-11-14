<?php

namespace App\Http\Controllers;

use App\Models\MysqlDatabaseService;
use App\Models\LoadDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DbController extends Controller
{
    //
    public function list() {
        $service = new MysqlDatabaseService();
        $databases = $service->loadAllDatabases();

        $tables = $service->getTables($databases);
        dd($tables);
        //return view('list');
    }
}
