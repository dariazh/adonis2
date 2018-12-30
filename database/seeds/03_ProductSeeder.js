'use strict';

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
const Product = use('App/Models/Product');

class ProductSeeder {
  async run () {
    await Product.query().delete();

    await Database.table('products').insert(
        [{
          name: 'fleece',
          price: 500,
          type_id: 127,
          user_id: 57,
          created_at: Database.fn.now()
        }
        ]
    )
  }
}

module.exports = ProductSeeder;
