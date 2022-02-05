<?php

namespace App\Mail;


use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;

class RestPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $token ;
    public $email ;

     public function __construct($token,$email)
    {
        $this->token = $token;
        $this->email = $email;
    }

    public function build()
    {
        return $this
                ->subject('Reset Your 3wdev Password')
                ->markdown('Email.passwordReset')
                ->with(['token' => $this->token]);
    }
}
