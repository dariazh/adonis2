'use strict'


class ProductController {
    async index () {
        return [
            {
                productController: "index"
            }
        ]
    }

    async store() {
        return [
            {
                productController: "store"
            }
        ]
    }

    async show() {
        return [
            {
                productController: "show"
            }
        ]
    }

    async update () {
        return [
            {
                productController: "update"
            }
        ]
    }

    async destroy () {
        return [
            {
                productController: "destroy"
            }
        ]
    }
}

module.exports = ProductController;