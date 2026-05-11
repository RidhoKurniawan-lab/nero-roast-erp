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

        $methods = Bean::distinct()->pluck('processing_method');

        return inertia::render('Beans/Add', ['methods' => $methods]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBeanRequest $request)
    {
        $credentials = $request->validated();

        Bean::create($credentials);

        return redirect()->route('beans.index')->with('success', 'Coffee beans added successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Bean $bean)
    {
        return inertia::render('Beans/Show', ['bean'=> $bean]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bean $bean)
    {

        $Methods = Bean::distinct()->pluck('processing_method');

        return inertia::render('Beans/Edit', ['beans' => $bean, 'methods'=> $Methods]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreBeanRequest $request, Bean $bean)
    {
        $credentials = $request->validated();

        $bean->update($credentials);

        return redirect()->route('beans.index')->with('success','Coffee beans successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bean $bean)
    {
        $bean->delete();

        return redirect()->route('beans.index')->with('success', 'Bean deleted successfully!');
    }
}
