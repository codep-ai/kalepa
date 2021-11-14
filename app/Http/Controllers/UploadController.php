<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Contracts\Container\BindingResolutionException;
use App\Http\Requests\UploadFileRequest;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    //
    public function list(Request $request)
    {
        $uploads = Storage::allFiles('uploads');
        return view('list', ['files' => $uploads]);
    }
    public function download($file)
    {
        return response()->download(storage_path('app/' . $file));
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws BindingResolutionException
     */
    public function upload()
    {
        return view('upload');
    }
    public function store(UploadFileRequest $request)
    {
        $filename = $request->fileName;
        //the request is valid at this point because of the defined
        //parameters we specified in the form request
        $file = $request->file('userFile'); //no isset() req’d
        //retrieve the original extension of uploaded file
        $extension = $file->getClientOriginalExtension();
        //create a new file name
        $saveAs = $filename . "." . $extension;
        //save the file to the local filesystem, inside uploads/
        $file->storeAs('uploads', $saveAs, 'local');
        //return a success message
        return response()->json(['success' => true]);
    }
}
