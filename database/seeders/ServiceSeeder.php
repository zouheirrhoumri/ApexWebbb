<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Service::factory(5)->create();
    }
    //what is command to run this seeder?
    //php artisan db:seed --class=ServiceSeeder
    // what about the db:seed command?
    
}
