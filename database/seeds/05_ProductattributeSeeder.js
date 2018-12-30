'use strict'

/*
|--------------------------------------------------------------------------
| ProductattributeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

const Database = use('Database');
const ProductAttribute = use('App/Models/ProductAttribute');

class ProductattributeSeeder {
  async run () {
    await ProductAttribute.query().delete();

    await Database.table('product_attributes').insert(
        [{
          value: 5,
          attribute_id: 21,
          product_id: 27
        }
        ]
    )
  }
}

module.exports = ProductattributeSeeder;
