<?php

namespace Landscape\Http\Controllers;

use Illuminate\Http\Request;
use Landscape\Http\Resources\PhotographerResource;
use Landscape\Photographers;

class PhotographersController extends Controller
{
    public function index()
        /*
         * params: null
         * return: array of photographers, status 200
         */
        {
            return response(PhotographerResource::collection(Photographers::all()),200);
        }

    public function findById(Request $request, $id)
        /*
           params: Resquest object and $id which is part of query string
           return: jsonData. empty array and status 404 if not found
                   professional object if found and 200
         */
        {
            $photographer = Photographers::find($id);
            if(!$photographer){
                return response([],404);
            }
            return response(new PhotographerResource($photographer));
        }


    public function store(Request $request)
        /*
         * params: Request object
         * return: status 200
         */
        {
            Photographers::create([
                "name"=>$request->name,
                "email"=>$request->email,
                "phone"=>$request->phone,
                "bio"=>$request->bio,
                "profile_picture"=> $request->profile_picture

            ]);
            return response(null,200);
        }


    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
