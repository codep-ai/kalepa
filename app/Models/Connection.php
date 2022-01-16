<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Connection extends Model
{
    use HasFactory;
    protected $fillable = ['dataflow_id', 'name', 'host', 'port', 'dbname', 'username', 'password'];

    
}
