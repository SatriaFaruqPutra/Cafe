<?php

use App\Http\Controllers\Api\GaleryController;
use App\Http\Controllers\Api\KategoriController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\PromoController;
use App\Http\Controllers\Api\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('review',[ReviewController::class, 'index']);
// Route::get('review/{id}',[ReviewController::class, 'show']);
// Route::post('review',[ReviewController::class, 'store']);
// Route::put('review/{id}',[ReviewController::class, 'update']);
// Route::delete('review/{id}',[ReviewController::class, 'destroy']);

Route::apiResource('review',ReviewController::class);
Route::apiResource('kategori',KategoriController::class);
Route::apiResource('galeri',GaleryController::class);
Route::apiResource('menu',MenuController::class);
Route::apiResource('promo',PromoController::class);
