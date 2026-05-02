<?php

namespace Database\Seeders;

use App\Models\Bean;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Yume Kaneshiro',
            'email' => 'yume@gmail.com',
        ]);

        Bean::factory(60)->create();
    }
}
