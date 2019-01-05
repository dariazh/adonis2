'use strict'

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

    async update () {
        return [
            {
                attributeController: "update"
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
