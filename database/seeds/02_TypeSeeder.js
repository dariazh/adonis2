'use strict';

/*
|--------------------------------------------------------------------------
| TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Type = use('App/Models/Type');


class TypeSeeder {
  async run () {
    await Type.query().delete();

    const Types = [
      {name: 'laptop'},
      {name: 'ebook'},
      {name: 'phone'}
    ];

    await Type.createMany(Types);
  }

}

module.exports = TypeSeeder;