<?php

use Illuminate\Database\Seeder;


class PhotographerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('photographers')->delete();
        $json = File::get("database/data/landscapes.json");
        $data = json_decode($json);
        foreach ($data as $obj){
            App\Photographers::create(array(
                "name" => $obj->name,
                "phone"=>$obj->phone,
                "email"=>$obj->email,
                "profile_picture"=>$obj->profile_picture,
            ));
            foreach ($obj->album as $pic){
                App\Images::create(array(
                   "title"=> $pic->title,
                   "description"=> $pic->description,
                   "img"=>$pic->img,
                   "date"=>$pic->date,
                   "featured"=>$pic->featured
                ));
            }
        }

    }
}
