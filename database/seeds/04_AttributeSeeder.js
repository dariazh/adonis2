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
const Attribute = use('App/Models/Attribute');


class AttributeSeeder {
  async run () {
    await Attribute.query().delete();

    await Database.table('attributes').insert(
        [{
          name: 'color',
          type_id: 111,
        }
        ]
    )
  }
}

module.exports = AttributeSeeder;
