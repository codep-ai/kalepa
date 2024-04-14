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
        phpinfo();
        
    }
}
