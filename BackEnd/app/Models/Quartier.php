<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Ville;
use App\Models\InfluenceurInfo;
class Quartier extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $fillable = [
        'id',
        'quartier',
        'postCode',
        'ville_id'
    ];
    protected $hidden = [
        'id',
        'ville_id'
    ];

    public function influceur_info(){
        return $this->hasMany(InfluenceurInfo::class);
    }

    public function ville(){
        return $this->belongsTo(Ville::class);
    }
}

