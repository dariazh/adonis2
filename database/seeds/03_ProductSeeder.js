'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use('Database');
const Type = use('App/Models/Type');
const User = use('App/Models/User');
const Product = use('App/Models/Product');

class ProductSeeder {
    async run() {
        await Product.query().delete();

        const type = await Type.pair('name', 'id');
        const user = await User.pair('username', 'id');


        await Database.table('products').insert(
            [
                {
                    name: 'iPhone',
                    price: 900,
                    type_id: type.phone,
                    user_id: user.test,
                    created_at: Database.fn.now()
                },
                {
                    name: 'iPhone 8 Plus',
                    price: 1000,
                    type_id: type.phone,
                    user_id: user.test,
                    created_at: Database.fn.now()
                }
            ]
        )
    }
}

module.exports = ProductSeeder
