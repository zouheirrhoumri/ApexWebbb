<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\User;
use App\Notifications\PriceSetNotification;
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
            'description' => 'required',
        ]);

        $reservation = new Reservation();
        $reservation->user_id = $request->user_id;
        $reservation->service_id = $request->service_id;
        $reservation->reservation_date = date("Y-m-d H:i:s");
        $reservation->description = $request->description;
        $reservation->save();

/*        $admin = User::where('role', 'admin')->first();

        if ($admin) {
            $admin->notify(new ReservationNotification($reservation));
        }*/

        return response()->json(['message' => 'Reservation created successfully']);
    }

    public function setPrice(Request $request, Reservation $reservation)
    {
        $request->validate([
            'price' => 'required|numeric',
        ]);

        $reservation->price = $request->price;
        $reservation->save();
        $reservation->user->notify(new PriceSetNotification($reservation));

        return response()->json(['message' => 'Price set successfully']);
    }

    public function respondToPrice(Request $request, Reservation $reservation)
    {
        $request->validate([
            'accepted' => 'required|boolean',
        ]);

        if ($request->accepted) {
            // handle price acceptance...
        } else {
            // handle price refusal...
        }

        return response()->json(['message' => 'Response recorded successfully']);
    }
}
