'use strict'

const Type = use('App/Models/Type');
const User = use('App/Models/User');
const Product = use('App/Models/Product');

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
