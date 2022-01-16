<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class DatasourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function preview(): JsonResponse
    {
        $storagePath = storage_path();
        $file = $storagePath . '/files/kc_house_data.csv';
        $lineNumber = 0;
        $fd = fopen($file, 'r');
        $header = null;
        $content = [];
        while (($line = fgetcsv($fd)) !== FALSE) {
            if ($lineNumber === 0) {
                $header = $line;
            } else {
                $content[] = $line;
            }
            $lineNumber++;
            if ($lineNumber > 100) {
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
