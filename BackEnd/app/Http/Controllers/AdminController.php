<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Ville;
use App\Models\Quartier;
use App\Models\Influenceur;
use App\Models\InstagramInfo;
use App\Models\InfluenceurInfo;

use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    //
    public function __construct(){
     //   $this->middleware('auth:admin-api');
    }


    public function getAllInfluenceur()
    {
        $insat = InfluenceurInfo::with('instagram','influenceur','adresse.ville')->get();
        return response()->json($insat);
    }

}
