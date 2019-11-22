<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class restaurant extends Model
{
    protected $primaryKey = 'Email';
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = ['Name', 'Address', 'Cellphone', 'Email', 'Descr'];
}
