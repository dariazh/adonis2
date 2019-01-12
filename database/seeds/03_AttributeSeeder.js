'use strict'

const Type = use('App/Models/Type');
const Attribute = use('App/Models/Attribute');
const Factory = use('Factory');
const Database = use('Database')


class AttributeSeeder {
  async run () {
      await Attribute.query().delete();

      const { rows: types } = await Type.all();

      await Promise.all(
          types.map(type => Factory.model('App/Models/Attribute').createMany(2, { type_id: type.id }))
      );

  }


}

module.exports = AttributeSeeder