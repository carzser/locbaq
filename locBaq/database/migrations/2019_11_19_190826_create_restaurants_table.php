<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRestaurantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurants', function (Blueprint $table) {
          $table->bigIncrements('idRestaurant');
          $table->string('Name');
          $table->string('Category');
          $table->string('Latitude');
          $table->string('Longitude');
          $table->integer('Score');
          $table->string('ScheduleOpen');
          $table->string('ScheduleClose');
        });

        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('restaurants');
    }
}
