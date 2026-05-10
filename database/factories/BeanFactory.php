<?php

namespace Database\Factories;

use App\Models\Bean;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Bean>
 */
class BeanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Data dummy untuk variasi kopi agar terlihat realistis
        $origins = ['Gayo', 'Lintong', 'Ijen', 'Toraja', 'Mount Halu', 'Sidikalang', 'Kintamani'];
        $processes = ['Full Wash', 'Natural', 'Honey', 'Wine', 'Semi-Wash', 'Anaerob'];
        $species = ['Arabica', 'Robusta', 'Liberica'];

        // Menentukan min altitude secara acak, lalu max altitude harus lebih tinggi
        $minAltitude = fake()->numberBetween(800, 1600);

        return [
            'name' => fake()->words(2, true).' '.fake()->randomElement($origins),
            'origin_country' => 'Indonesia',
            'sub_origin' => fake()->randomElement(['Mount Puntang', 'Cikole Village', 'XYZ Estate Garden']),
            'origin_region' => fake()->randomElement(['Aceh', 'Sumatera Utara', 'Jawa Barat', 'Sulawesi', 'Bali']),
            'species' => fake()->randomElement($species),
            'variety' => fake()->randomElement(['Sigararutang', 'S-795', 'Typica', 'Kartika', 'Andung Sari']),
            'processing_method' => fake()->randomElement($processes),
            'grade' => fake()->numberBetween(1, 6), // Sesuai range specialty 1-6
            'altitude_min' => $minAltitude,
            'altitude_max' => $minAltitude + fake()->numberBetween(100, 300),
            'crop_year' => fake()->year(),
            'stock_kg' => fake()->randomFloat(2, 5, 50), // Stok antara 5kg sampai 50kg
            'price_per_kg' => fake()->numberBetween(80000, 250000),
            'created_at' => now(),
        ];
    }
}
