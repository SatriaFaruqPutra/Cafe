<?php

namespace Database\Seeders;

use App\Models\Promo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PromoSeeder extends Seeder
{ 
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create('id_ID');
        for ($i = 0; $i < 10; $i++) {
            Promo::create([
                'idmenu' => $faker->numberBetween($min = 1, $max = 10),
                'promo' => $faker->randomDigit,
                'deskripsi'=> $faker->text($maxNbChars = 50),
            ]);
    }
    }
}
