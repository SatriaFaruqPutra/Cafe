<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create('id_ID');
        for ($i = 0; $i < 10; $i++) {
            Review::create([
                'nama' => $faker->name,
                'level' => 'customer',
                'rating'=> $faker->numberBetween($min = 1, $max = 5),
                'tanggal'=> date($format = 'd-m-Y', $value = 'now'),
                'review'=> $faker->text($maxNbChars = 200)
            ]);
    }
}
}