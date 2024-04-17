<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all();
        return response()->json(['services' => $services]);
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        $service = new Service();
        $service->name = $request->name;
        $service->description = $request->description;
        $service->save();
    
        return response()->json(['message' => 'Service created successfully']);
    }

    public function update(Request $request, Service $service)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        $service->name = $request->name;
        $service->description = $request->description;
        $service->save();
    
        return response()->json(['message' => 'Service updated successfully']);
    }

    public function delete(Service $service)
    {
        $service->delete();
        return response()->json(['message' => 'Service deleted successfully']);
    }

}
