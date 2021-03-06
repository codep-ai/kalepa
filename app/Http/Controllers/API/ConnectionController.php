<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MssqlConnection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Repositories\ConnectionRepository;
use stdClass;

class ConnectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list(Request $request): JsonResponse
    {
        //
        $mssqlConnections = MssqlConnection::where('dataflow_id', $request->get('dataflow_id'))->get();
        $connections = [];
        foreach ($mssqlConnections as $mssqlConnection) {
            $connection = new stdClass;
            $connection->id = $mssqlConnection->id;
            $connection->name = $mssqlConnection->name;
            $connection->host = $mssqlConnection->host;
            $connection->port = $mssqlConnection->port;
            $connection->dbname = $mssqlConnection->dbname;
            $connections[] = $connection;
        }
        return response()->json(
            [
                'connections' => $connections,
            ],
            Response::HTTP_CREATED
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request): JsonResponse
    {
        $details = $request->only([
            'dataflow_id',
            'name',
            'host',
            'port',
            'dbname',
            'username',
            'password',
        ]);
        $dbType = $request->get('dbtype');
        switch ($dbType) {
            case 'mssql':
                $connection = new MssqlConnection;
                $connection->fill($details);
                break;
        }
        // test connection
        try {
            MssqlConnection::getHandler($connection);
            $connection->save();
        } catch (\Exception $e) {
            return response()->json(
                [
                    'connection' => $connection,
                    'tables' => [],
                    'error' => $e->getMessage(),
                ],
                Response::HTTP_CREATED
            );
        }

        return response()->json(
            [
                'connection' => $connection,
            ],
            Response::HTTP_CREATED
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function meta(Request $request): JsonResponse
    {
       $connectionId = $request->get('id');
       $connection = MssqlConnection::find($connectionId);
       $result = $connection->getTables();
       $tables = [];

       foreach ($result->data as $table) {
         $tables[] = $table['TABLE_NAME'];
       }
       $repo = new ConnectionRepository();
       $selectedTables = $repo->getConnectionTables($connectionId);
       return response()->json(
            [
                'connection' => $connection,
                'tables' => $tables,
                'selected_tables' => $selectedTables,
                'error' => $result->error,
            ],
            Response::HTTP_CREATED
       );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function saveTables(Request $request): JsonResponse
    {
        //
        $connectionId = $request->get('connection_id');
        $selectedTables = $request->get('selectedTables');
        $repo = new ConnectionRepository();
        $repo->saveConnectionTables($connectionId, $selectedTables);

        return response()->json(
            [
                'connection_id' => $connectionId,
                'tables' => $selectedTables,
            ],
            Response::HTTP_CREATED
        );
    }

}
