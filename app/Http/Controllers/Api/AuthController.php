<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'email|required|unique:users',
            'password' => 'required|confirmed',
        ]);

        $validatedData['password'] = bcrypt($request->password);

        $user = User::create($validatedData);

        $accessToken = $user->createToken('authToken')->accessToken;

        return response()->json(['access_token' => $accessToken]);
    }

    public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required',
        ]);

        if (!auth()->attempt($loginData)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;

        return response()->json(['access_token' => $accessToken]);
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function logout()
    {
        if(auth()->check()){
            auth()->user()->token()->revoke();
            return response()->json(['message' => 'Successfully logged out']);
        }else{
            return response()->json(['error' =>'Something is wrong'], 500);
        }
    }

    public function refresh()
    {

    }
}
