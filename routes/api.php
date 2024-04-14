<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('login', [UserController::class, 'login']);
Route::post('register', [UserController::class, 'register']);

Route::group(['prefix' => 'books', 'middleware' => 'auth:sanctum'], function () {
    Route::get('/', [BookController::class, 'index']);
    Route::post('add', [BookController::class, 'add']);
    Route::get('edit/{id}', [BookController::class, 'edit']);
    Route::post('update/{id}', [BookController::class, 'update']);
    Route::delete('delete/{id}', [BookController::class, 'delete']);
});
*/
Route::get('/dataflow/list', 'App\Http\Controllers\API\DataflowController@list')->name('dataflowList');
Route::post('/dataflow/create', 'App\Http\Controllers\API\DataflowController@create')->name('dataflowCreate');
Route::post('/connection/create', 'App\Http\Controllers\API\ConnectionController@create')->name('connectionCreate');
Route::get('/connection/list', 'App\Http\Controllers\API\ConnectionController@list')->name('connectionList');
Route::get('/connection/meta', 'App\Http\Controllers\API\ConnectionController@meta')->name('connectionMeta');
Route::post('/connection/savetables', 'App\Http\Controllers\API\ConnectionController@saveTables')->name('connectionSaveTables');
Route::get('/datasource/list', 'App\Http\Controllers\API\DatasourceController@list')->name('datasourceList');
Route::get('/datasource/preview', 'App\Http\Controllers\API\DatasourceController@preview')->name('datasourcePreview');
Route::get('/datasource/get_models', 'App\Http\Controllers\API\DatasourceController@getModels')->name('getModels');
Route::any('/datasource/submit_job', 'App\Http\Controllers\API\DatasourceController@submitJob')->name('submitJob');
Route::any('/datasource/get_predict_result', 'App\Http\Controllers\API\DatasourceController@getPredictResult')->name('getPredictResult');
Route::any('/pipeline/test_connection', 'App\Http\Controllers\API\PipelineController@testConnection')->name('testConnection');
Route::any('/pipeline/save_connection', 'App\Http\Controllers\API\PipelineController@saveConnection')->name('saveConnection');