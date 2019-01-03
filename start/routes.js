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



// Those routes should be only accessible
// when you are not logged in
/*Route.group(() => {
    Route.get('login', 'AuthController.create')
    Route.post('login', 'AuthController.store')

    Route.get('register', 'AuthController.register');
    Route.post('register', 'AuthController.store')

    Route.get('product/:id/view', 'ProductController.view');

}).middleware(['guest'])

// Those routes should be only accessible
// when you are logged in
Route.group(() => {
    Route.get('logout', 'AuthController.delete')

    Route.get('product/:id/view', 'ProductController.view');
}).middleware(['auth']);

// Those routes should be only accessible
// when you is administrator
Route.group(() => {
    Route.get('product', 'ProductController.index');

    Route.get('product/:id/view', 'ProductController.view');

    Route.post('product/create', 'ProductController.create');

    Route.put('product/:id/edit', 'ProductController.edit');
    Route.patch('product/:id/edit', 'ProductController.edit');

    Route.delete('product/:id/delete', 'ProductController.delete');
}).middleware(['auth', 'is:administrator']);*/

Route.group(() => {
    //Route.get('product', 'ProductController.index')
    Route.resource('users', 'AuthController')
    Route.resource('product', 'ProductController')
    Route.resource('type', 'TypeController')
    Route.resource('attribute', 'AttributeController')
}).prefix('api/v1');

