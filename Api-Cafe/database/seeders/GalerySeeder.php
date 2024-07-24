<?php

namespace Database\Seeders;

use App\Models\Galery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GalerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create('id_ID');
        for ($i = 0; $i < 10; $i++) {
            Galery::create([
                'menu' => $faker->word,
                'gambar' => $faker->image($dir = null, $width = 640, $height = 480),
            ]);
    }
    }
}
