<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;

class StatsController extends Controller
{
    function index()
    {
        $usersCount = count(User::all());
        $servicesCount = count(Service::all());
        $reservations = Reservation::with('service')
            ->with('user')
            ->get();
        $reservationsCount = count($reservations);

        return response()->json([
            'data' => [
                'usersCount' => $usersCount,
                'servicesCount' => $servicesCount,
                'reservationsCount' => $reservationsCount,
                'reservations' => $reservations
            ],
            'message' => 'success'
        ]);
    }
}
