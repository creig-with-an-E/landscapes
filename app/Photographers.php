<?php

namespace Landscape;

use Illuminate\Database\Eloquent\Model;

class Photographers extends Model
{
    protected $fillable = ["name","phone","email","bio","profile_picture"];

    public function images(){
        return $this->hasMany(Images::class);
    }
}
