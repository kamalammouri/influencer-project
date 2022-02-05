<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InfluenceurInfo;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class InfluenceurInfoController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('jwt.role:influenceur');
    }

    public function ok()
    {
        $insat = InfluenceurInfo::with('instagram','influenceur','adresse.ville')->get();
        return response()->json($insat);
    }
/*
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'nom' => 'required|string',
            'prenome'=> 'required|string',
            'date_naissance'=> 'required|date',
            'telephone'=> 'required|integer',
            'profession'=> 'nullable|string',
            'adresse_id'=> 'required|integer',
            'genre'=> 'required|string',
            'situation_familiale'=> 'required|string',
            'niveau_etude'=> 'required|string',
            'langue'=> 'required|string',
            'instagram'=> 'required|string|unique:influenceur-infos',
            'youtube'=> 'nullable|string',
            'facebook'=> 'nullable|string',
            'tiktok'=> 'nullable|string',
            'influenceur_id'=> 'required|integer',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors()->toJSON(), 400);
        }

        $InfluenceurInfo = InfluenceurInfo::create(array_merge(
            $validator->validated(),
            ['password' => Hash::make($request->password)]
        ));

        return response()->json([
            'message' => 'Influenceur infos successfully registered',
            'InfluenceurInfo' => $InfluenceurInfo
        ], 201);
    }*/
}
