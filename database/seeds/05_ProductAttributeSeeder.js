'use strict'

/*
|--------------------------------------------------------------------------
| ProductAttributeSeeder
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
const Attribute = use('App/Models/Attribute');
const ProductAttribute = use('App/Models/ProductAttribute');

class ProductAttributeSeeder {
  async run () {
    await ProductAttribute.query().delete();

    const attribute = await Attribute.pair('name','id');
    const long_name = await Product.findByOrFail('name', 'iPhone 8 Plus')

    await Database.table('product_attributes').insert(
        [{
          value: 10,
          attribute_id: attribute.color,
          product_id: long_name.id,
        }
        ]
    )
  }
}

module.exports = ProductAttributeSeeder
