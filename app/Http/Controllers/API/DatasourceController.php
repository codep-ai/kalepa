<?php

namespace App\Http\Controllers\API;

use App\Helpers\RemoteStorageHelper;
use App\Helpers\S3Helper;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Http\Request;


use Aws\S3\S3Client;  

class DatasourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function preview(): JsonResponse
    {
        /*
        $storagePath = storage_path();
        $file = $storagePath . '/files/kc_house_data.csv';
        */

        $bucket = 'dev-demo-land-area';
        $key = 'dms/Sales/House/kc_house_data.csv';
        $url = 's3://' . $bucket . '/' . $key;
        $url = 's3://dev-demo-land-area/dms/Sales/House/kc_house_data.csv';

        $storage = new RemoteStorageHelper();
        $storage->storage->registerStreamWrapper();

        // Read CSV with fopen
        $fd = fopen($url, 'r');
        $lineNumber = 0;
        $header = null;
        $content = [];
        while ($line = fgetcsv($fd)) {
            if ($lineNumber === 0) {
                $header = $line;
            } else {
                $content[] = $line;
            }
            $lineNumber++;
            if ($lineNumber > 50) {
                break;
            }
        }
        fclose($fd);
        return response()->json(
            [
                'id'     => 1,
                'header' => $header,
                'content' => $content
            ],
            Response::HTTP_CREATED
        );
    }

}
