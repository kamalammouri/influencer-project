<?php

namespace App\Http\Controllers;



use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Carbon\Carbon;

use App\Http\Requests\UpdatePasswordRequest;
use App\Mail\RestPasswordMail;
use App\Models\Admin;

class AdminAuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.role:admin', ['except' => ['login','resetPasswordRaquest','passwordResetProcess']]);
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        if (!$token = auth()->guard('admin-api')->attempt($validator->validated())) {
            return response()->json(['error' => 'Email or Password is incorrect.'],401);
        }

        return $this->CreateNewToken($token);
    }

    protected function CreateNewToken($token)
    {
        return response()->json([
            'message' => 'Admin successfully loggin',
            'status' => 200,
            'access_token' => $token,
            'expires_in' => auth()->guard('admin-api')->factory()->getTTL() * 120,
            'Admin' => auth()->guard('admin-api')->user()
        ]);
    }

    public function logout()
    {
        auth()->guard('admin-api')->logout();
        return response()->json([ 'status' => 'success','message' => 'Admin successfully logged out.'], 200);
    }

    public function refresh()
    {
        return $this->CreateNewToken(auth()->guard('admin-api')->refresh());
    }


    // ---------------------------Admin password reset Request ------------------------------------- //
    public function resetPasswordRaquest(Request $request)
    {
        $email = $request->email;

        if(!$this->validEmail($email)){
            return response()->json([
                    'success'=>false,
                    'message'=>'Not found email addresse !'],404);
        }

        $token = $this->createOrFindToken($email);
        Mail::to($email)->send(new RestPasswordMail($token,$email));

        return response()->json([
                        'success'=>true,
                        'message' => 'Reset Email is send successfully, please check your email addresse',
                        'email'=> $email
                        ],200);
    }

    private function validEmail($email)
    {
        return !!Admin::where('email', $email)->first();
    }

    private function createOrFindToken($email){

        $old_token = DB::table('password_resets')->where('email',$email)->first();
        if($old_token){
            return $old_token->token;
        }

        $new_token = Str::random(60);
        $this->saveTokenDB($new_token,$email);
        return $new_token;
    }

    private function saveTokenDB($token,$email){
        DB::table('password_resets')->insert([
            'email'=> $email,
            'token'=> $token,
            'created_at'=> Carbon::now()
        ]);
    }

    // --------------------------- Admin password Update ------------------------------------- //
    public function passwordResetProcess(UpdatePasswordRequest $request){
        return $this->updatePasswordRow($request)->count() > 0 ? $this->resetPassword($request) : $this->tokenNotFoundError();
    }

      // Verify if token is valid
      private function updatePasswordRow($request){
         return DB::table('password_resets')->where([
             'email' => $request->email,
             'token' => $request->passwordToken
         ]);
      }

      // Token not found response
      private function tokenNotFoundError() {
          return response()->json([
            'success'=>false,
            'message'=>'Your email is wrong, or token expired !'],404);
      }

      // Reset password
      private function resetPassword($request) {
          // find email
          $adminData = Admin::where('email', $request->email)->first();

          // update password
          $adminData->update([
            'password'=>bcrypt($request->password)
          ]);
          // remove verification data from db
          $this->updatePasswordRow($request)->delete();

          // reset password response
          return response()->json([
          'success'=>true,
          'message' => 'Password has been updated.',
          ],200);
      }

}
