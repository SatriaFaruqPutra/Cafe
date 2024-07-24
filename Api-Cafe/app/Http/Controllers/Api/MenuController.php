<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */ 
    public function index()
    {
        $data = Menu::orderBy('idkategori','asc')->get();
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
        $dataMenu = new Menu;
        $rules = [
            'idkategori'=>'required',
            'menu'=>'required',
            'gambar'=>'required',
            'deskripsi'=>'required',
            'harga'=>'required',
        ];

        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()) {
            return response()->json([
                'status'=>false,
                'message'=>'data Tidak Masuk',
                 'data'=>$validator->errors()
            ]);
        }

        $gambar = $request->file('gambar')->getClientOriginalName();
        $request->file('gambar')->move('upload',$gambar);

        $dataMenu->idkategori = $request->idkategori;
        $dataMenu->menu = $request->menu;
        $dataMenu->gambar = url('upload/'.$gambar);
        $dataMenu->deskripsi = $request->deskripsi;
        $dataMenu->harga = $request->harga;

        $post = $dataMenu->save();

             return response()->json(
            [
            'status'=>true,
            'message'=>'Data Ditambahkan'
        ]);
       
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Menu::find($id);
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
        $dataMenu = Menu::find($id);
        if (empty($dataMenu)) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Update',
            ],404);
        }

        $rules = [
            'idkategori'=>'required',
            'menu'=>'required',
            'gambar'=>'required',
            'deskripsi'=>'required',
            'harga'=>'required',
        ];

        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Masuk',
                 'data'=>$validator->errors()
            ]);
        }

        $gambar = $request->file('gambar')->getClientOriginalName();
        $request->file('gambar')->move('upload',$gambar);

        $dataMenu->idkategori = $request->idkategori;
        $dataMenu->menu = $request->menu;
        $dataMenu->gambar = url('upload/'.$gambar);
        $dataMenu->deskripsi = $request->deskripsi;
        $dataMenu->harga = $request->harga;

        $post = $dataMenu->save();

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
        $dataMenu = Menu::find($id);
        if (empty($dataMenu)) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Didelete',
            ],404);
        }

        $post = $dataMenu->delete();

        return response()->json([
            'status'=>true,
            'message'=>'Data Didelete'
        ]);
    }


}
