<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreBeanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],

            'origin_country' => ['required', 'string', 'max:255'],
            'origin_region' => ['nullable', 'string', 'max:255'],
            'sub_origin' => ['nullable', 'string', 'max:255'],

            'species' => ['required', 'in:Arabica,Robusta,Liberica,Excelsa'],
            'variety' => ['required', 'string', 'max:255'],
            'processing_method' => ['required', 'string', 'max:255'],
            'grade' => ['required', 'integer', 'min:1', 'max:6'],

            'altitude_min' => ['nullable', 'integer', 'min:1200'],
            'altitude_max' => ['nullable', 'integer', 'max:1600', 'gte:altitude_min'],

            'crop_year' => [
                'nullable',
                'digits:4',
                'integer',
                'min:'.(date('Y') - 4),
                'max:'.date('Y'),
            ],
            'price_per_kg' => ['nullable','numeric','min:0',],
        ];
    }
}
