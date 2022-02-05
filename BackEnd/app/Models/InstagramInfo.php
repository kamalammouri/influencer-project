<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\InfluenceurInfo;
class InstagramInfo extends Model
{
    use HasFactory;

    protected $hidden = ['id'];
    protected $guarded = [];

    public function influenceur_info()
    {
        return $this->hasOne(InfluenceurInfo::class);
    }

}

