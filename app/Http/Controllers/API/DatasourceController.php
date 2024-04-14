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
     * get preview data
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
            if ($lineNumber > 10) {
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

    /**
     * Get existing prediction model
     */
    public function getModels(): JsonResponse
    {
        $bucket = 'dev-demo-land-area';
        $key = 'autoML/test_prepare/regression_exist_models.csv';
        $url = 's3://' . $bucket . '/' . $key;

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
        $selectColumns = [3, 4, 5, 6, 7];
        $selectHeader = [];
        $selectContent = [];
        foreach ($selectColumns as $columnNumber) {
            $selectHeader[] = $header[$columnNumber];
        }
        foreach ($content as $row) {
            $rowContentData = [];
            $rowContentData['rate'] = null;
            $rowContentData['content'] = null;
            $rowContentData['checked'] = false;
            foreach ($selectColumns as $columnNumber) {
                $rowContentData['content'][] = str_replace("\n", "<br/>", $row[$columnNumber]);
                if ($columnNumber === 7) {
                    $rowContentData['rate'] = strlen($row[$columnNumber]);
                }
            }
            $selectContent[] = $rowContentData;
        }
        usort($selectContent, function ($a, $b) {
            if ($a['rate'] > $b['rate']) {
                return -1;
            }
            return 1;
        });
        $selectContent[0]['checked'] = true;
        return response()->json(
            [
                'header' => $selectHeader,
                'content' => $selectContent
            ],
            Response::HTTP_CREATED
        );
    }

    /**
     * submit a job for prediction
     */
    public function submitJob()
    {
        $bucket = 'dev-demo-land-area';
        $filename = 'prediction_0001_001_Scoring_20211206.json';
        $sourceKey = 'autoML/requests/history/' . $filename;
        $source =  $bucket . '/' . $sourceKey;

        $targetFileName = 'prediction_0001_001_Scoring_' . date('YmdHis') . '.json';
        $targetKey = 'autoML/requests/queue/' . $targetFileName;

        $storage = new RemoteStorageHelper();
        try {
            /**  
             * copy Object
            $result = $storage->copyObject(
                $source,
                $targetKey,
                $bucket
            );
            */
        } catch (\Exception $e) {
            // TODO: handle exception
        }
        return $this->getPredictResult();
    }

    public function getPredictResult()
    {
        $files = [
            'autoML/users/0001/Regression/Scoring/001/score/score_output_Boosted Decision Tree Regression.csv',
            //'autoML/users/0001/Regression/Scoring/001/score/score_output_Decision Tree Regression.csv',
            //'autoML/users/0001/Regression/Scoring/001/score/score_output_Decision Tree Regression.csv',
        ];
            $storage = new RemoteStorageHelper();
            $storage->storage->registerStreamWrapper();
            $bucket = 'dev-demo-land-area';
            $source = 's3://' . $bucket . '/' ;
            $content = [];
        foreach ($files as $file) {
            // Read CSV with fopen
            $url = $source . $file;
            $fd = fopen($url, 'r');
            $lineNumber = 0;
            $header = null;
            while ($line = fgetcsv($fd)) {
                if ($lineNumber === 0) {
                    $header = $line;
                } else {
                    $content[] = $line;
                }
                $lineNumber++;
                if ($lineNumber > 10) {
                    break;
                }
            }
            fclose($fd);
            break;
        }
        return response()->json(
            [
                'header' => $header,
                'content' => $content
            ],
            Response::HTTP_CREATED
        );
    }
    
    /**
     * 
     * Get existing prediction model
     */
    public function list(): JsonResponse
    {
        $sources = [
            [
                'name' => 'SQL Server',
                'id' => 'sqlserver',
                'icon' =>'sql-server.png',
            ],
            [
                'name' => 'MySQL',
                'id' => 'mysql',
                'icon' =>'mysql.png',
            ],
            [
                'name' => 'Oracle',
                'id' => 'oracle',
                'icon' =>'oracle.png',
            ],
            [
                'name' => 'PostgreSQL',
                'id' => 'postgresql',
                'icon' =>'postgres.png',
            ],
            [
                'name' => 'MongoDB',
                'id' => 'mongodb',
                'icon' =>'mongo.png',
            ],
            [
                'name' => 'DynamoDB',
                'id' => 'dynamodb',
                'icon' =>'dynamodb.png',
            ],
            [
                'name' => 'Salesforce',
                'id' => 'salesforce',
                'icon' =>'salesforce.png',
            ],
            [
                'name' => 'Google Analytics',
                'id' => 'ga',
                'icon' =>'ga.png',
            ],
        ];
        return response()->json(
            $sources,
            Response::HTTP_CREATED
        );
    }
}
