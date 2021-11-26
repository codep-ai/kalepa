<?php
namespace App\Repositories;

use App\Interfaces\DataflowRepositoryInterface;
use App\Models\Dataflow;
use Dflydev\DotAccessData\Data;

class DataflowRepository implements DataflowRepositoryInterface {
    public function getAllDataflow() {
       return Dataflow::all();
    }

    public function createDataflow(array $dataflowDetails)
    {
        return Dataflow::create($dataflowDetails);
    }
}
