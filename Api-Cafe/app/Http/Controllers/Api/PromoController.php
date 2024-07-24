<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Promo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PromoController extends Controller
{
    public function index()
    {
        $data = Promo::orderBy('idmenu','asc')->get();
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
        $dataPromo = new Promo;
        $rules = [
            'idmenu'=>'required',
            'promo'=>'required',
            'deskripsi'=>'required',
        ];

        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()) {
            return response()->json([
                'status'=>false,
                'message'=>'data Tidak Masuk',
                 'data'=>$validator->errors()
            ]);
        }

        $dataPromo->idmenu = $request->Promo;
        $dataPromo->promo = $request->Promo;
        $dataPromo->deskripsi = $request->Promo;

        $post = $dataPromo->save();

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
        $data = Promo::find($id);
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
        $dataPromo = Promo::find($id);
        if (empty($dataPromo)) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Update',
            ],404);
        }

        $rules = [
            'idmenu'=>'required',
            'promo'=>'required',
            'deskripsi'=>'required',
        ];

        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Masuk',
                 'data'=>$validator->errors()
            ]);
        }

        $dataPromo->idmenu = $request->Promo;
        $dataPromo->promo = $request->Promo;
        $dataPromo->deskripsi = $request->Promo;

        $post = $dataPromo->save();

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
        $dataPromo = Promo::find($id);
        if (empty($dataPromo)) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Didelete',
            ],404);
        }

        $post = $dataPromo->delete();

        return response()->json([
            'status'=>true,
            'message'=>'Data Didelete'
        ]);
    }


}
