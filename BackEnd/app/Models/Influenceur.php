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

    protected $fillable = [ 'id','email','password'];
    protected $hidden = [ 'id','password'];

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
