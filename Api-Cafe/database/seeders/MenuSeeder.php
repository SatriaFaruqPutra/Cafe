<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create('id_ID');
        for ($i = 0; $i < 10; $i++) {
            Menu::create([
                'idkategori' => $faker->numberBetween($min = 1, $max = 10),
                'menu' => $faker->name,
                'gambar'=> $faker->image($dir = null, $width = 640, $height = 480),
                'deskripsi'=>$faker->text($maxNbChars = 50),
                'harga'=> $faker->numberBetween($min = 1000, $max = 9000)
            ]);
    }
    }
}
