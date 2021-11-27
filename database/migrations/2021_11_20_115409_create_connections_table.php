<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConnectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mssql_connections', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('dataflow_id');
            $table->string('name');
            $table->string('host');
            $table->string('port');
            $table->string('dbname');
            $table->string('username');
            $table->string('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mssql_connections');
    }
}
