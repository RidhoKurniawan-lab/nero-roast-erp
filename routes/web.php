<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BeanController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('/', [AuthController::class,'create'])->name('login');
    Route::post('/login',[AuthController::class, 'store']);
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('Beans', BeanController::class);
});
