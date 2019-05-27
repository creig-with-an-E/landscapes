<?php

use Illuminate\Http\Request;

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

/*
    -----------------------------------------
    Photographer routes

    The routes below are used to fetch photographer(s) data
 */
Route::get('photographer', 'PhotographersController@index');
Route::get('photographer/{id}','PhotographersController@findById');
Route::post('photographer','PhotographersController@store');