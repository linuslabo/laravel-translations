@component('mail::message')
{{__('Someone has invited you to join their translation team on')}} {{ config('app.name') }}.

@component('mail::button', ['url' => $link])
{{__('Accept Invitation')}}
@endcomponent

{{__('This invitation link will expire in 24 hours.')}}

{{__('Thanks')}},<br>
{{ config('app.name') }}
@endcomponent
