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

    async edit () {
        return [
            {
                typeController: "edit"
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
