<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="{{ asset('css/app.css') }}" rel="stylesheet"></link>

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
        <div>
          <div id="app">
            <new-database-list></new-database-list>
          </div>
          <script>
            var appData = {};
            appData.databases = {!! json_encode($databases) !!};
            appData.tables = {!! json_encode($tables) !!};
          </script>
          <script src="{{ asset('js/app.js') }}"></script>
        </div>
    </body>
</html>