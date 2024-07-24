<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Galery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GaleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */ 
    public function index()
    {
        $data = Galery::orderBy('menu','asc')->get();
        return response()->json([
            'status'=>true,
            'message'=>'Data Ada',
            'data'=>$data
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dataGalery = new Galery;
        $rules = [
            'menu'=>'required',
            'gambar'=>'required',
        ];

        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()) {
            return response()->json([
                'status'=>false,
                'message'=>'data Tidak Masuk',
                 'data'=>$validator->errors()
            ]);
        }

        $dataGalery->menu = $request->menu;
        $dataGalery->gambar = $request->gambar;

        $post = $dataGalery->save();

        return response()->json([
            'status'=>true,
            'message'=>'Data Ditambahkanb'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Galery::find($id);
        if ($data) {
            return response()->json([
                'status'=>true,
                'message'=>'Data Ada',
                'data'=>$data
            ],200);
        } else {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Ada'
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $dataGalery = Galery::find($id);
        if (empty($dataGalery)) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Update',
            ],404);
        }

        $rules = [
            'menu'=>'required',
            'gambar'=>'required',
        ];

        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Masuk',
                 'data'=>$validator->errors()
            ]);
        }

        $dataGalery->menu = $request->menu;
        $dataGalery->gambar = $request->gambar;

        $post = $dataGalery->save();

        return response()->json([
            'status'=>true,
            'message'=>'Data Diupdate'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $dataGalery = Galery::find($id);
        if (empty($dataGalery)) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Didelete',
            ],404);
        }

        $post = $dataGalery->delete();

        return response()->json([
            'status'=>true,
            'message'=>'Data Didelete'
        ]);
    }


}
