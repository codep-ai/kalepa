<?php
namespace App\Interfaces;

interface DataflowRepositoryInterface {
    public function getAllDataflow();
    public function createDataflow(array $dataflowDetails);
    /*
    public function getDataflowById($id);
    public function deleteDataflow($id);
    public function updateDataflow($id, array $dataflowDetails);
    */
}