<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSessionRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'sometimes|string',
            'weight' => 'sometimes|numeric',
            'height' => 'sometimes|numeric',
            'chest_measurement' => 'sometimes|numeric',
            'waist_measurement' => 'sometimes|numeric',
            'hips_measurement' => 'sometimes|numeric',
            'distance_run' => 'sometimes|integer',
            'status' => 'sometimes|string',
        ];
    }
}
