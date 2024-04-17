<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\User;
use App\Notifications\ReservationNotification;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    // this data will come from a button inside a form that will be submitted
    public function create(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'service_id' => 'required',
            'reservation_date' => 'required',
        ]);

        $reservation = new Reservation();
        $reservation->user_id = $request->user_id;
        $reservation->service_id = $request->service_id;
        $reservation->reservation_date = $request->reservation_date;
        $reservation->save();

        $admin = User::where('role', 'admin')->first();

        if ($admin) {
            $admin->notify(new ReservationNotification($reservation));
        }

        return response()->json(['message' => 'Reservation created successfully']);
    }
}
