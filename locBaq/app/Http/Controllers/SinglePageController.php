<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SinglePageController extends Controller
{
    public function index() {
        return view('app');
    }

    public function login(){
      return 'hola';
    }

    public function register(Request $request){

      

      /*$user = new restaurant;

    
      

      $user->idRestaurant = $request->Name;
      $user->Name = $request->LastName;
      $user->Category = $request->Email;
      $user->Latitude = $request->Password;
      $user->Longitude = $request->Phone;
      $user->Score = '10';
      $user->ScheduleOpen = '100';
      $user->ScheduleClose = '200';
      $user->save();*/

      return 'hola';
      
   
    

    
    }
}
