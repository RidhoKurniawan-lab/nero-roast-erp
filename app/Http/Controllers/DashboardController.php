<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use inertia\inertia;


class DashboardController extends Controller
{
    public function index() {
        return inertia::render('Dashboard/Index');
    }
}
