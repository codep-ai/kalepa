<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Connection extends Model
{
    use HasFactory;

    public $dbHost;
    public $dbPort;
    public $dbUser;
    public $dbPassword;
    public $dbName;
    public $dbSchema;
    public $type;
    public $role;
    public $id;
    public $name;

    protected $handler;


}
