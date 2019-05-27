<?php

namespace Landscape;

use Illuminate\Database\Eloquent\Model;

class Photographers extends Model
{
    protected $fillable = ["name","phone","email"];

    public function images(){
        return $this->hasMany(Images::class);
    }
}
