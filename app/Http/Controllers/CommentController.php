<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, $postId)
{
    $request->validate([
        'content' => 'required',
    ]);

    $comment = new Comment();
    $comment->content = $request->content;
    $comment->user_id = auth()->user()->id;
    $comment->post_id = $postId;
    $comment->save();

    return response()->json(['message' => 'Comment Added successfully']);
}
    
}
