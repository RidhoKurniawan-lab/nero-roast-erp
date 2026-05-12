<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(["bean_id","type", "quantity", "balance_before", "balance_after", "reference", "note", "user_id"])]

class StockLog extends Model
{
    public function bean() {
        return $this->belongsTo(Bean::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
