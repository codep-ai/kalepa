<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>{{env('APP_NAME')}}</title>
    <link href="{{ mix('css/main.css') }}" type="text/css" rel="stylesheet" />
</head>

<body>
    <div id="app" > </div>
    <script>
        // init app data object
        var kalepa = {}; 
        kalepa.appData = {};
        kalepa.appData.pipeline = {};
        kalepa.appData.insight = {};
        kalepa.appData.appName = {!! json_encode(env('APP_NAME')) !!};
        kalepa.appData.routes = {
            'pipeline': {
                'testConnection': {!! json_encode(route('testConnection')) !!},
                'saveConnection': {!! json_encode(route('saveConnection')) !!},
            },
            'dataflow': {
                'list': {!! json_encode(route('dataflowList')) !!},
                'create': {!! json_encode(route('dataflowCreate')) !!}, 
            },
            'connection': {
                'create': {!! json_encode(route('connectionCreate')) !!}, 
                'list': {!! json_encode(route('connectionList')) !!}, 
                'meta': {!! json_encode(route('connectionMeta')) !!}, 
                'savetables': {!! json_encode(route('connectionSaveTables')) !!}, 
            },
            'datasource': {
                'preview': {!! json_encode(route('datasourcePreview')) !!},
                'getModels': {!! json_encode(route('getModels')) !!},
                'submitJob': {!! json_encode(route('submitJob')) !!},
                'list': {!! json_encode(route('datasourceList')) !!},
            }
        };
    </script>
    <script src="{{ mix('js/main.js') }}" type="text/javascript"></script>
</body>

</html>