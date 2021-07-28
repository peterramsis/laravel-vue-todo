<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

use App\Http\Controllers\TodoController;

Route::post("/todo/add" , [TodoController::class , "store"]);
Route::get("/todos" , [TodoController::class , "index"]);
Route::get("/todos/delete/{id}" , [TodoController::class , "delete"]);
Route::post("/todos/update/" , [TodoController::class , "update"]);
