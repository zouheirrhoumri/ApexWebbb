<?php

namespace Database\Factories;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::pluck('id');
        $blog = Blog::pluck('id');
        return [
            'content' => fake()->paragraph(),
            'user_id' => fake()->randomElement($user),
            'blog_id' => fake()->randomElement($blog),
        ];
    }
}
