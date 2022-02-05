@component('mail::message')
# Reset Password

Reset or change your password.

@component('mail::button', ['url' => 'http://localhost:4200/admin/reset-process?token='.$token.'&email='.$email])
Change Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
