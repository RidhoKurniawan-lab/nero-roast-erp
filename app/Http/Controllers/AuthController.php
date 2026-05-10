<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

// use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function create()
    {

        return Inertia::render('Auth/Login');
    }

    public function store(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (! Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'auth' => 'Incorrect email or password.',
            ]);
        }
        $request->session()->regenerate();

        return redirect()->intended('/dashboard')->with('success', 'You have successfully logged in.');
    }

    public function destroy(Request $request)
    {

        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->intended('/')->with('success', 'you have successfully logged out');
    }
}
