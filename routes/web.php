<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|

Route::get('/', function () {
    return view('welcome');
});

Route::get('/upload', 'App\Http\Controllers\UploadController@upload')->name('upload');

Route::post('/process', 'App\Http\Controllers\UploadController@process')->name('process');


Route::get('/db/list', 'App\Http\Controllers\DbController@list')->name('dblist');
*/
Route::get('/info/phpinfo', function() {
    phpinfo();
});
Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');