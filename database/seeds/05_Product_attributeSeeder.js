'use strict'

/*
|--------------------------------------------------------------------------
| Product_attributeSeeder
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

class Product_attributeSeeder {
  async run () {
    await ProductAttribute.query().delete();
      const attribute = await Attribute.pair('name','id');
      const product = await Product.pair('name','id');

    await Database.table('product_attributes').insert(
        [{
          value: 5,
          attribute_id: attribute.color,
          product_id: product.iPhone,
        }
        ]
    )
  }
}

module.exports = Product_attributeSeeder;
//how get product.'iPhone 8 Plus'
