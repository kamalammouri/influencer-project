<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


use App\Models\InstagramInfo;
use App\Models\Influenceur;
use App\Models\Quartier;
use App\Models\Ville;

class InfluenceurInfo extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function influenceur()
    {
        return $this->belongsTo(Influenceur::class);
    }

    public function instagram()
    {
        return $this->belongsTo(InstagramInfo::class);
    }

    public function adresse()
    {
        return $this->belongsTo(Quartier::class);
    }


    protected $fillable = [
        'nom',
        'prenome',
        'date_naissance',
        'telephone',
        'profession',
        'adresse_id',
        'genre',
        'situation_familiale',
        'niveau_etude',
        'langue',
        'instagram',
        'youtube',
        'facebook',
        'tiktok',
        'influenceur_id',
        'instagram_id'
     ];

    protected $hidden = [
        'influenceur_id',
        'instagram_id'
    ];

}
