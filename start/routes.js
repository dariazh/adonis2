/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');


Route.group(() => {
    Route.resource('user', 'AuthController')
    Route.resource('product', 'ProductController')
    Route.resource('type', 'TypeController')
    Route.resource('attribute', 'AttributeController')
}).prefix('api/v1');

