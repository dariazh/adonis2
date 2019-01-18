'use strict'
const Attribute = use('App/Models/Attribute');

class AttributeController {
    async index () {
        return await Attribute.all()
    }

    async store({ request, response }) {
        const data = request.only(["name", "type_id"])
        const createAttr = await Attribute.createNew(data)
        return response.status(201).json(createAttr)
    }

    async show({ params }) {
        const {id} = params
        return await Attribute.findOrFail(id);
    }

    async update ({ params, request}) {
        const data = request.only(["name", "type_id"])
        const {id} = params

        return Attribute.updateById(id,data)
    }

    async destroy ({params, response}) {
        const { id } = params;
        const delAttr = await Attribute.deleteById(id)
        return response.json(delAttr);
    }
}

module.exports = AttributeController