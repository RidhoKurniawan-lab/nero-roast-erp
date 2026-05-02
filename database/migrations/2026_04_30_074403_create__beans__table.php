<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('beans', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('origin');
            $table->enum('species', ['Arabica', 'Robusta', 'Liberica', 'Excelsa']);
            $table->string('variety');
            $table->string('processing_method');
            $table->unsignedTinyInteger('grade')->unsigned()->comment('Scale 1-6');
            $table->integer('altitude_min')->nullable()->comment('Ketinggian minimum dalam mdpl');
            $table->integer('altitude_max')->nullable()->comment('Ketinggian maksimum dalam mdpl');
            $table->year('crop_year')->nullable();
            $table->decimal('stock_kg', 10, 2)->default(0);
            $table->decimal('price_per_kg', 15, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beans');
    }
};
