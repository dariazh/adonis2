'use strict'

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

module.exports = TypeSeeder
