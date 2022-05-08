<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
class JWTRoleAuth extends BaseMiddleware
{
    public function handle($request, Closure $next, $role = null)
    {
        try {
            $token_role = JWTAuth::parseToken()->getClaim('role');
            $user = JWTAuth::parseToken()->authenticate();
            if (!$user || $token_role != $role) {
                return response()->json(['message'=>'You are not authenticate or Invalid Token Role']);
            }
            else{
                return $next($request);
            }
        }
        catch (TokenExpiredException $e) {
            return response()->json(['message'=>'Your token has expired. Please, login again.']);
        }
        catch (TokenInvalidException $e) {
            return response()->json(['message'=>'Your token is invalid. Please, login again.']);
        }
        catch (JWTException $e) {
            return response()->json($e->getMessage());
            //return $next($request);
        }

    }
}
