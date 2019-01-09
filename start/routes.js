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

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));
Route.group(() => {
    Route.get('/login', 'AuthController.login')
    Route.get('/register', 'AuthController.register')
    Route.get('/logout', 'AuthController.logout')

    Route.resource('product', 'ProductController').apiOnly()
    Route.resource('type', 'TypeController').apiOnly()
    Route.resource('attribute', 'AttributeController').apiOnly()
}).prefix('api/v1');