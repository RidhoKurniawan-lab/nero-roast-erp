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
        Schema::create('stock_logs', function (Blueprint $table) {
            $table->id();

            // relation to beans
            $table->foreignId('bean_id')->constrained('beans')->onDelete('cascade');

            //type of log
            $table->enum('type', ['in', 'out', 'adjusment'])->index();

            //the stock
            $table->decimal('quantity', 12,2);

            //before and after transaction
            $table->decimal('balance_before',12,2);
            $table->decimal('balance_after',12,2);

            // reference
            $table->string('reference')->nullable();

            // notes
            $table->string('note')->nullable();

            //user input
            $table->foreignId('user_id')->constrained('users');

            // timestamp
            $table->timestamps();

            //indexing
            $table->index(['created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_log');
    }
};
