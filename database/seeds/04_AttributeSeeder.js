'use strict';

/*
|--------------------------------------------------------------------------
| AttributeSeeder
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


class AttributeSeeder {
  async run () {
    await Attribute.query().delete();

    const  type = await Type.pair('name','id');

    await Database.table('attributes').insert(
        [{
          name: 'color',
          type_id: type.phone,
        }
        ]
    )
  }
}

module.exports = AttributeSeeder;
