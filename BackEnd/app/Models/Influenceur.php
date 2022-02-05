<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use App\Models\InfluenceurInfo;
class Influenceur extends Authenticatable implements JWTSubject
{
    use HasFactory;

    protected $fillable = [ 'email','password','role'];
    protected $hidden = [ 'id','password','created_at','updated_at'];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return ['role'=>'influenceur'];
    }

    public function influenceur_info()
    {
        return $this->hasOne(InfluenceurInfo::class);
    }
}
