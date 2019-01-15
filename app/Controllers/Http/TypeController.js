'use strict'
const Type = use('App/Models/Type');

class TypeController {

    async index () {
        return await Type.all()
    }

    async store({ request, response }) {
        const data = request.only(["name"])
        const createType = await Type.createNew(data)
        return response.status(201).json(createType)
    }

    async show({ params }) {
        const {id} = params
        return  await Type.findOrFail(id);
    }

    async update ({ params, request}) {
        const data = request.only(["name"])
        const {id} = params

        return Type.updateById(id,data)
    }

    async destroy ({params, response}) {
        const { id } = params;
        const delType = await Type.deleteById(id)
        return response.json(delType);
    }
}

module.exports = TypeController