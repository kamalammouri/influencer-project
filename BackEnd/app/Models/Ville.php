<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


use App\Models\InfluenceurInfo;
use App\Models\Quartier;
class Ville extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'ville',
    ];
    protected $hidden = [ 'id' ];

    public function quartier(){
        return $this->hasMany(Quartier::class);
    }
    public function influenceurQuartier(){
        return $this->hasOneThrough(InfluenceurInfo::class, Quartier::class,'ville_id','quartier_id','id','id');

        /* return $this->hasOneThrough(InfluenceurInfo::class, Quartier::class,'ville_id','quartier_id','id','id');
        'ville_id', // Foreign key on the quartiers table...
        'quartier_id', // Foreign key on the influenceur_infos table...
        'id', // Local key on the villes table...
        'id' // Local key on the quartiers table...*/
    }
}
