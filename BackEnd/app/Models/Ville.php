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
}
