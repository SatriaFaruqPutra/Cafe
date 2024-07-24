<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Review::orderBy('nama','asc')->get();
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
        $dataReview = new Review;
        $rules = [
            'nama'=>'required',
            'rating'=>'required',
            'review'=>'required',
        ];

        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()) {
            return response()->json([
                'status'=>false,
                'message'=>'data Tidak Masuk',
                 'data'=>$validator->errors()
            ]);
        }

        $dataReview->nama = $request->nama;
        $dataReview->level = 'customer';
        $dataReview->rating = $request->rating;
        $dataReview->tanggal = date('Y-m-d');
        $dataReview->review = $request->review;

        $post = $dataReview->save();

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
        $data = Review::find($id);
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
        $dataReview = Review::find($id);
        if (empty($dataReview)) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Update',
            ],404);
        }

        $rules = [
            'nama'=>'required',
            'rating'=>'required',
            'review'=>'required',
        ];

        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Masuk',
                 'data'=>$validator->errors()
            ]);
        }

        $dataReview->nama = $request->nama;
        $dataReview->level = 'customer';
        $dataReview->rating = $request->rating;
        $dataReview->tanggal = date('Y-m-d');
        $dataReview->review = $request->review;

        $post = $dataReview->save();

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
        $dataReview = Review::find($id);
        if (empty($dataReview)) {
            return response()->json([
                'status'=>false,
                'message'=>'Data Tidak Didelete',
            ],404);
        }

        $post = $dataReview->delete();

        return response()->json([
            'status'=>true,
            'message'=>'Data Didelete'
        ]);
    }


}
