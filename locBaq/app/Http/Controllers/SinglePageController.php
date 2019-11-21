<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class SinglePageController extends Controller
{
    public function index() {
        return view('app');
    }

    public function login(){
      return 'hola';
    }

    public function register(Request $request){
      
      
      
      /*console.log($request.config.data);
      $usuarioNuevo = new App\User;
      
      
      $usuarioNuevo->idUser = 1;
      $usuarioNuevo->FirstName = $request->Name;
      $usuarioNuevo->LastName = $request->LastName;
      $usuarioNuevo->Email = $request->Email;
      $usuarioNuevo->Password = $request->Password;
      $usuarioNuevo->Cellphone = $request->Phone;
      

      $usuarioNuevo->save();

      return 'ok';*/

     

      User::table('users')->insert([
        ['idUser' => '3', 'FirstName' => $request->FirstName, 'LastName' => $request->LastName, 'Email' => $request->Email, 'Password' => $request->Password, 'Cellphone' => $request->Cellphone]
        
    ]);

      return(['message' => 'agregado']);

      
    }
}
