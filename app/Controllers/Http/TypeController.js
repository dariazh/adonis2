'use strict'

class TypeController {
    async index () {
        return [
            {
                typeController: "index"
            }
        ]
    }

    async store() {
        return [
            {
                typeController: "store"
            }
        ]
    }

    async show() {
        return [
            {
                typeController: "show"
            }
        ]
    }

    async update () {
        return [
            {
                typeController: "update"
            }
        ]
    }

    async destroy () {
        return [
            {
                typeController: "destroy"
            }
        ]
    }
}

module.exports = TypeController
