<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;


// use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function create(){

        return inertia::render('Auth/Login');
    }

    public function store(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (! Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'auth' => 'Email atau password salah.',
            ]);
        }
        $request->session()->regenerate();
        return redirect()->intended('/dashboard')->with('success', 'Kamu telah berhasil Masuk.');
    }
}
