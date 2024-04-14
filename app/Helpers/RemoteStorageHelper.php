<?php
namespace App\Helpers;
use Aws\S3\S3Client;  

class RemoteStorageHelper {

  public $storage = null;

  public function __construct()
  {
    $this->storage = self::getS3Client();
  }

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

  /**
   * list bucket
   */
  public function listBuckets() {
    $buckets = $this->storage->listBuckets();
    return $buckets;
  }

  /**
   * save file into bucket
   */
  public function saveFile($options) {
    $this->storage->putObject(
      $options
    );
  }

  /**
   * @param array $data ['Bucket', 'Key']
   */
  public function getObject(array $data) {
    $object = $this->storage->getObject($data);
    return $object;
  }

  public function copyObject($source, $targetObject, $targetBucket) {
    $this->storage->copyObject([
      'Bucket' => $targetBucket,
      'Key' => $targetObject,
      'CopySource' => $source
    ]);
  }
}