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
        $s3 = $storage->storage;
        $bucket = 'dev-demo-land-area';
        try {
            $objects = $s3->listObjects([
                'Bucket' => $bucket
            ]);
            foreach ($objects['Contents']  as $object) {
                if (strpos($object['Key'], 'autoML') !== false) {
                  echo $object['Key'] . PHP_EOL;
                }
            }
        } catch (\Exception $e) {
            echo $e->getMessage() . PHP_EOL;
        }
        /*
        $object = $storage->getObject([
            'Bucket' => 'dev-demo-land-area',
            'Key' => 'dms/Sales/House/kc_house_data.csv',
        ]);

        var_dump($object['Body']);
        var_dump($object['ContentLength']);
        var_dump($object['ContentType']);
        $storage->storage->registerStreamWrapper();

        $url = 's3://dev-demo-land-area/dms/Sales/House/kc_house_data.csv';

        // Read CSV with fopen
        $file = fopen($url, 'r');
        $linecount = 0;
        $content = [];
        while ($line = fgetcsv($file)) {
            $linecount++;
            $content[] = $line;
            if ($linecount > 50) {
                break;
            }
        }
        var_dump($content);
        */
        return 0;
    }
}
