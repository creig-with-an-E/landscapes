<?php

namespace Landscape\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PhotographerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "name"=>  $this->name,
            "phone"=> $this->phone,
            "email"=> $this->email,
            "bio"=> $this->bio,
            "album"=> $this->images,
            "profile_picture"=>$this->profile_picture,
        ];
    }
}
