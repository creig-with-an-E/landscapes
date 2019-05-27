<?php

namespace Landscape;

use Illuminate\Database\Eloquent\Model;

class Images extends Model
{
    public function photographers(){
        return $this->belongsTo(Photographers::class);
    }
}
