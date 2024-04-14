<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MssqlConnection;
use App\Models\Connection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Repositories\ConnectionRepository;
use App\Repositories\MssqlConnectionRepository;
use stdClass;

class PipelineController extends Controller
{
    public function testConnection(Request $request)
    {
        $pipelineSourceConnectionRequest = $request->only([
            'source',
            'dbHost',
            'dbName',
            'dbPassword',
            'dbPort',
            'dbUser',
            'dbSchema',
            'name',
            'role'
        ]);

        $connected = false;
        if ($pipelineSourceConnectionRequest['source'] === 'sqlserver') {
            $pipelineSourceConnectionRequest['type'] = 'sqlserver';
            $conn = MssqlConnection::getModel($pipelineSourceConnectionRequest);
            $handler = $conn->connect();
            if (!empty($handler)) {
                $connected = true;
            }
        }
        return response()->json([
            'connected' => $connected
        ]);
    }

    public function saveConnection(Request $request)
    {
        $pipelineSourceConnectionRequest = $request->only([
            'source',
            'dbHost',
            'dbName',
            'dbPassword',
            'dbPort',
            'dbUser',
            'dbSchema',
            'name',
            'role'
        ]);

        $connected = false;
        $id = null;
        if ($pipelineSourceConnectionRequest['source'] === 'sqlserver') {
            $pipelineSourceConnectionRequest['type'] = 'sqlserver';
            $conn = MssqlConnection::getModel($pipelineSourceConnectionRequest);
            $connected = $conn->connect();
            if ($connected) {
                $repo = new MssqlConnectionRepository();
                $id = $repo->save($conn);
                $conn->id = $id;
                $tables = $conn->getTables();
            }
        }
        return response()->json([
            'id' => $id,
            'connection' => $tables
        ]);
    }
}
