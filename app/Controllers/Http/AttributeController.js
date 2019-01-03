'use strict'

const Attribute = use('App/Models/Attribute');

class AttributeController {
    async index () {
        return [
            {
                attributeController: "index"
            }
        ]
    }

    async store() {
        return [
            {
                attributeController: "store"
            }
        ]
    }

    async show() {
        return [
            {
                attributeController: "show"
            }
        ]
    }

    async edit () {
        return [
            {
                attributeController: "edit"
            }
        ]
    }

    async destroy () {
        return [
            {
                attributeController: "destroy"
            }
        ]
    }
}

module.exports = AttributeController
