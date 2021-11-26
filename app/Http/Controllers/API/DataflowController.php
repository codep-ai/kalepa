<?php

namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Interfaces\DataflowRepositoryInterface;
use App\Models\Dataflow;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class DataflowController extends Controller
{
    private DataflowRepositoryInterface $dataflowRepo;
    public function __construct(DataflowRepositoryInterface $repo)
    {
       $this->dataflowRepo = $repo; 
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list(): JsonResponse
    {
        return response()->json([
            'dataflows' => $this->dataflowRepo->getAllDataflow()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request): JsonResponse
    {
        $details = $request->only([
            'name',
            'description'
        ]);
        return response()->json(
            [
                'dataflow' => $this->dataflowRepo->createDataflow($details),
            ],
            Response::HTTP_CREATED
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dataflow  $dataflow
     * @return \Illuminate\Http\Response
     */
    public function show(Dataflow $dataflow)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dataflow  $dataflow
     * @return \Illuminate\Http\Response
     */
    public function edit(Dataflow $dataflow)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dataflow  $dataflow
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Dataflow $dataflow)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dataflow  $dataflow
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dataflow $dataflow)
    {
        //
    }
}
