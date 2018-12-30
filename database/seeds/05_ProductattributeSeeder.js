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

    const types = [{
      value: 5,
      attribute_id: 19,
      product_id: 23
    }
    ];

    await ProductAttribute.createMany(types);
  }
}

module.exports = ProductattributeSeeder;
