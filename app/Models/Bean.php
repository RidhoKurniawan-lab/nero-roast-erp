<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'sub_origin', 'origin_country', 'origin_region', 'species', 'variety', 'processing_method', 'grade', 'altitude_min', 'altitude_max', 'crop_year', 'stock_kg', 'price_per_kg'])]
class Bean extends Model
{
    use HasFactory;
}
