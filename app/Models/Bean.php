<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'sub_origin', 'origin_country', 'origin_region', 'species', 'variety', 'processing_method', 'grade', 'altitude_min', 'altitude_max', 'crop_year', 'stock_kg', 'price_per_kg'])]
class Bean extends Model
{
    use HasFactory;

    public function scopeFilter(Builder $query, array $filter)
    {
        $query->when($filter['search'] ?? null, function ($query, $search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                    ->orWhere('processing_method', 'like', "%$search%");
            });
        });

        $query->when($filter['species'] ?? null, function ($static, $species) {
            $static->where(function ($q) use ($species) {
                $q->where('species', $species);
            });
        });

        $query->when($filter['grade'] ?? null, function ($static, $grade) {
            $static->where(function ($q) use ($grade) {
                $q->where('grade', $grade);
            });
        });
    }


    public function stockLogs(){
        return $this->hasMany(StockLog::class);
    }
}
