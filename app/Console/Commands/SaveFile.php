<?php

namespace App\Console\Commands;

use App\Helpers\RemoteStorageHelper;
use Illuminate\Console\Command;

class SaveFile extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'save:file';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Save file to S3 bucket';

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
        $storage = new RemoteStorageHelper();
        $bucket = 'ai-as-a-service-hli';
        $storagePath = storage_path();
        $file = $storagePath . '/files/kc_house_data.csv';
        $storage->saveFile([
            'Bucket' => $bucket,
            'Key' => 'House_Data.txt', 
            'SourceFile' => $file
        ]);
        /*
        $buckets = $storage->listBuckets();
        foreach($buckets as $bucket) {
            var_dump($bucket);
        }
        */
        return 0;
    }
}
