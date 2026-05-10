<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBeanRequest;
use App\Models\Bean;
use Illuminate\Http\Request;
use inertia\inertia;

class BeanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $beans = Bean::latest('created_at')->paginate(10);

        return inertia::render('Beans/Index', ['beans' => $beans]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $Methods = Bean::distinct()->pluck('processing_method');

        return inertia::render('Beans/Add', ['methods' => $Methods]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBeanRequest $request)
    {
        $credentials = $request->validated();

        Bean::create($credentials);

        return redirect()->route('Beans.index')->with('success', 'Coffee beans added successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
