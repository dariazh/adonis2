'use strict'

const Type = use('App/Models/Type');
const Attribute = use('App/Models/Attribute');


class AttributeSeeder {
  async run () {
    await Attribute.query().delete();

    const  type = await Type.pair('name','id');

    const Attributes = [
        { name: 'color', type_id: type.phone },
        { name: 'display', type_id: type.phone },
        { name: 'camera', type_id: type.phone },
        { name: 'capacity', type_id: type.laptop },
        { name: 'display', type_id: type.laptop },
        { name: 'location', type_id: type.laptop },
        { name: 'sensors', type_id: type.ebook },
        { name: 'waterproof ', type_id: type.ebook },
        { name: 'storage ', type_id: type.ebook },
    ]

      await Attribute.createMany(Attributes);

  }
}

module.exports = AttributeSeeder