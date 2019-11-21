<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');

Route::post('/api/login','SinglePageController@login');

Route::post('/api/register','SinglePageController@register');

Route::post('/api/getUser','SinglePageController@getUser');

Route::post('/api/updateUser','SinglePageController@updateUser');

Route::post('/api/getRest','SinglePageController@getRest');

Route::post('/api/createRest','SinglePageController@createRest');
