<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;

class UserAuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $validated = $request->validated();

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        $token = $user->createToken('AuthToken')->plainTextToken;
    
        return response(compact('token', 'user'));
    }

    public function login(LoginRequest $request)
    {
        $validated = $request->validated();
        if (!Auth::attempt($validated)) {
            return response([
                'message' => 'Email adress or password is incorrect']);
        }

        /**  @var User */
        $user = Auth::user();

        if ($user->tokens()->delete()) {
            $user->tokens()->delete();
        }

        $token = $user->createToken('AuthToken')->plainTextToken;
    
        return response(compact('token', 'user'));
    }

    public function logout()
    {
        /** @disregard P1013  | tokens() marked as undefined but it works fine **/
        auth()->user()->tokens()->delete();
        return response('', 204);
    }
}
