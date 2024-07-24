<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reservasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReservasiController extends Controller
{
    public function index()
    {
        $data = Reservasi::orderBy('Reservasi','asc')->get();
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
        $dataReservasi = new Reservasi;
        $rules = [
            'Reservasi'=>'required',
        ];

        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()) {
            return response()->json([
                'status'=>false,
                'message'=>'data Tidak Masuk',
                 'data'=>$validator->errors()
            ]);
        }

        $dataReservasi->Reservasi = $request->Reservasi;

        $post = $dataReservasi->save();

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
        $data = Reservasi::find($id);
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
        $dataReservasi = Reservasi::find($id);
        if (empty($dataReservasi)) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Update',
            ],404);
        }

        $rules = [
            'Reservasi'=>'required',
        ];

        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Masuk',
                 'data'=>$validator->errors()
            ]);
        }

        $dataReservasi->Reservasi = $request->Reservasi;

        $post = $dataReservasi->save();

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
        $dataReservasi = Reservasi::find($id);
        if (empty($dataReservasi)) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Didelete',
            ],404);
        }

        $post = $dataReservasi->delete();

        return response()->json([
            'status'=>true,
            'message'=>'Data Didelete'
        ]);
    }


}
