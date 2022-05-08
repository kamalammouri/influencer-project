<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserAuthController;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\InfluenceurAuthController;
use App\Http\Controllers\InfluenceurInfoController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\JWTAuthController;
use Illuminate\Support\Facades\Auth;
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
Route::prefix('AdminAuth')->name('admin.')->group(function(){

    Route::post('/login', [AdminAuthController::class, 'login']);
    Route::post('/resetPasswordRaquest', [AdminAuthController::class, 'resetPasswordRaquest']);
    Route::post('/passwordResetProcess', [AdminAuthController::class, 'passwordResetProcess']);
    Route::get('/getAllInfluenceurs', [AdminController::class, 'getAllInfluenceurs']);
    Route::middleware(['jwt.role:admin'])->group(function(){

        Route::post('/logout', [AdminAuthController::class, 'logout']);
        Route::post('/refresh', [AdminAuthController::class, 'refresh']);
    });
});


Route::prefix('InfluenceurAuth')->middleware(['cors'])->name('influenceur.')->group(function(){

    Route::post('/login', [InfluenceurAuthController::class, 'login']);
    Route::post('/register', [InfluenceurAuthController::class, 'register']);
    Route::post('/resetPasswordRaquest', [InfluenceurAuthController::class, 'resetPasswordRaquest']);
    Route::post('/passwordResetProcess', [InfluenceurAuthController::class, 'passwordResetProcess']);

    Route::middleware(['jwt.role:influenceur'])->group(function(){
        Route::post('/logout', [InfluenceurAuthController::class, 'logout']);
        Route::post('/refresh', [InfluenceurAuthController::class, 'refresh']);

    });
});

Route::prefix('InfluenceurInfo')->name('influenceurInfo.')->group(function(){
    Route::middleware(['jwt.role:influenceur'])->group(function(){
        Route::get('/info', [InfluenceurInfoController::class, 'index']);
        Route::get('/info1', [InfluenceurInfoController::class, 'ok']);
    });
});



















Route::group([
    'middleware' => ['api','jwt.role:admin', 'jwt.auth'],'prefix'=>'AdminAuth'], function ($router) {
    //The administrator verifies the route
    Route::post('/logout', [AdminAuthController::class, 'logout']);
   });

   Route::group([
    'middleware' => ['JWTRole:user', 'jwt.auth'],
   ], function ($router) {
    //Mobile user authentication routing
    // ...
   });
