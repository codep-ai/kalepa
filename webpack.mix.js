const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({
    proxy: process.env.APP_URL,
    notify: false
});
mix.js('resources/js/main.js', 'public/js').vue();
mix.postCss('resources/css/main.css', 'public/css', [
    require('tailwindcss'),
]);
mix.alias({
    '@': 'resources/js',
    '@components': 'resources/js/components',
});