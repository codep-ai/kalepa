<?php
namespace App\Helpers;
use Aws\S3\S3Client;  

class S3Helper {

  private static $instance = null;

  public static function getS3Client() {
      return new S3Client([
        'region' => env('AWS_DEFAULT_REGION'),
        'version' => 'latest',
        'credentials' => [
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY')
        ],
    ]);
  }

}