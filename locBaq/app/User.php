<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $primaryKey = 'Email';
    public $timestamps = false;
    protected $fillable = ['idUser', 'FirstName', 'LastName', 'Email', 'Password', 'Cellphone'];
}
