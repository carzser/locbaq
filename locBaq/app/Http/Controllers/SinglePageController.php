<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use app\restaurant;

class SinglePageController extends Controller
{
    public function index() {
        return view('app');
    }

    public function login(Request $request){

      $verificarlogin = true;

      $userdata = User::find($request['Email']);

      if($userdata == null){
        $verificarlogin = false;
        return ['Message' => 'el usuario no existe'];
      }else if($request['Password'] == $userdata->Password){
        return ['Message' => 'inicio exitoso', 'FirstName' => $userdata->FirstName, 'LastName' => $userdata->LastName];
      }else{
        return ['Message' => 'contraseña incorrecta'];
      }
      
    }

    public function register(Request $request){

      $verificar = false;

      $userdata = User::find($request['Email']);
      if($userdata == null){
        $verificar = true;
      }

      if($verificar == true){
        $usuarionuevo = User::create([
          'idUser' => $request['idUser'],
          'FirstName' => $request['FirstName'],
          'LastName' => $request['LastName'],
          'Email' => $request['Email'],
          'Password' => $request['Password'],
          'Cellphone' => $request['Cellphone']
        ]);

        return ['Message' => 'registro exitoso'];

        }else{
          return ['Message' => 'usuario ya existente'];
        }
    }

    public function getUser(Request $request){

      $userdata = User::find($request['Email']);

      return [
        'FirstName' => $userdata->FirstName,
        'LastName' => $userdata->LastName,
        'Email' => $userdata->Email,
        'Cellphone' => $userdata->Cellphone
      ];

    }


    public function updateUser(Request $request){

      $userdata = User::find($request['Email']);

      $userdata->FirstName = $request['FirstName'];
      $userdata->LastName = $request['LastName'];
      $userdata->Cellphone = $request['Cellphone'];

      $userdata->save();

      return ['Message' => 'datos actualizados'];

    }

    public function getRest(){
      $todosRestaurantes = restaurant::get();
      return todosRestaurantes;
    }

    public function createRest(Request $request){

      $verificar = false;

      $restaurantdata = restaurant::find($request['Email']);
      if($restaurantdata == null){
        $verificar = true;
      }

      if($verificar == true){
        $restaurantenuevo = restaurant::create([
          'Name' => $request['Name'],
          'Address' => $request['Address'],
          'Cellphone' => $request['Cellphone'],
          'Email' => $request['Email'],
          'EmailUser' => $request['EmailUser']
        ]);

        return ['Message' => 'registro exitoso'];

        }else{
          return ['Message' => 'restaurante ya existente'];
        }
    }
}
