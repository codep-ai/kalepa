<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class DataflowFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'name' => $this->faker->sentences(4, true),
            'description' => $this->faker->sentences(4, true),
        ];
    }
}
