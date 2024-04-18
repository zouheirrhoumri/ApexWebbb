<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function index()
    {
        return Project::all();
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        $project = new Project($request->all());
    
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $imagePath = $image->storeAs('images', $imageName, 'public');
            $project->image = '/storage/' . $imagePath;
        }
    
        $project->save();
    
        return response()->json($project, 201);
    }
    
    public function show(Project $project)
    {
        return $project;
    }
    
    public function update(Request $request, Project $project)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $imagePath = $image->storeAs('images', $imageName, 'public');
    
            // Delete the old image from the storage
            if ($project->image) {
                Storage::delete('public/' . $project->image);
            }
    
            $project->image = '/storage/' . $imagePath;
        }
    
        $project->update($request->all());
    
        return response()->json($project, 200);
    }
    public function destroy(Project $project)
    {
        $project->delete();
    
        return response()->json(null, 204);
    }
}
