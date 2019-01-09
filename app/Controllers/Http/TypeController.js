'use strict'
const Type = use('App/Models/Type');
class TypeController {
    async index ({ params, response }) {
        return Type.findAll();
    }
    //параметр, что добавить?

    async store() {
        return Type.create('iPad')
    }

    async show({ params, response }) {
        const {id} = params
        return Type.findByName(id);
    }
//передать на что заменяем?
    async update ({ params, response }) {
        const {id} = params
        return Type.updateByName(id)
    }

    async destroy ({ params, response }) {
        const {id} = params
        return Type.deleteByName(id);
    }
}

module.exports = TypeController
//join , связь с другими таблицами?
//что нужно ретернить