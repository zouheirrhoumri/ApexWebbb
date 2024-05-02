<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'service_id',
        'reservation_date',
        'description',
        'price'
    ];

    function service() {
        return $this->belongsTo(Service::class);
    }
    function user() {
        return $this->belongsTo(User::class);
    }
}
