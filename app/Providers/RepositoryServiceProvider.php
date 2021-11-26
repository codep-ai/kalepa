<?php

namespace App\Providers;

use App\Interfaces\DataflowRepositoryInterface;
use App\Repositories\DataflowRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind(DataflowRepositoryInterface::class, DataflowRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
