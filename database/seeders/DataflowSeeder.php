<?php

namespace Database\Seeders;

use Database\Factories\DataflowFactory;
use App\Models\Dataflow;
use Illuminate\Database\Seeder;

class DataflowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Dataflow::factory()->times(5)->create();
    }
}
