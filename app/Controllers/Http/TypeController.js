'use strict'
const Type = use('App/Models/Type');

class TypeController {

    async index () {
       return Type.findAllTypes()
    }

    async store() {
        const data = {
            'id': 'phone'
        }

        return Type.createByTypesId(data)
    }

    async show({ params}) {
        const {id} = params
        return Type.findByTypesId(id);
    }


    async update ({ params}) {
        const {id} = params
        const data = {
            'id': id,
            'update_id': 'watch'
        }
        return Type.updateByTypesId(data)
    }

    async destroy ({params,response}) {
        const { id } = params;
        return Type.deleteByTypesId(id, response)
    }
}

module.exports = TypeController