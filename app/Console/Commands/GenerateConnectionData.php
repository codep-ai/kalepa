<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class GenerateConnectionData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:connectionData';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate connection data';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $repo = new \App\Repositories\ConnectionRepository();
        $conections =  \App\Models\MssqlConnection::all();
        foreach ($conections as $conection) {
        }
        return Command::SUCCESS;
    }
}
