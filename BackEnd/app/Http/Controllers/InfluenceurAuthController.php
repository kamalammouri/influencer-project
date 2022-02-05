<?php

namespace App\Http\Controllers;

use App\Models\Influenceur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
class InfluenceurAuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.role:influenceur', ['except' => ['login']]);
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        if (!$token = auth()->guard('influenceur-api')->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized','message' => 'Invalid Email or Password'], 401);
        }

        return $this->CreateNewToken($token);
    }

    protected function CreateNewToken($token)
    {
        return response()->json([
            'message' => 'Influenceur successfully loggin',
            'status' => 200,
            'access_token' => $token,
            'expires_in' => auth()->guard('influenceur-api')->factory()->getTTL() * 120,
            'Influenceur' => auth()->guard('influenceur-api')->user()
        ]);
    }

    public function logout()
    {
        auth()->guard('influenceur-api')->logout();
        return response()->json([ 'status' => 'success','message' => 'Influenceur successfully logged out.'], 200);
    }

    public function refresh()
    {
        return $this->CreateNewToken(auth()->guard('influenceur-api')->refresh());
    }
}
