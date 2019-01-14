'use strict'
const Attribute = use('App/Models/Attribute');

class AttributeController {
    async index () {
        return Attribute.findAllAttributes()
    }

    async store({ params, request }) {
        const data = request.only(["name", "type_id"])
        return Attribute.createByAttributesId(data)
    }

    async show({ params }) {
        const {id} = params
        return Attribute.findByAttributesId(id);
    }

    async update ({ params}) {
        const {id} = params
        const data = {
            'id': id,
            'update_id': 'UU^9AH'
        }
        return Attribute.updateByAttributesId(data)
    }

    async destroy ({params, response}) {
        const { id } = params;
        return Attribute.deleteByAttributesId(id, response)
    }
}

module.exports = AttributeController