'use strict'

const Product = use('App/Models/Product');

class ProductController {
    async index () {
        return Product.findAllProducts()
    }

    async store({ params, request }) {
        const data = request.only(['name', 'price', 'type_id', 'user_id', 'created_at'])
        return Product.createByProductsId(data)
    }

    async show({ params }) {
        const {id} = params
        return Product.findByProductsId(id);
    }

    async update ({ params}) {
        const {id} = params
        const data = {
            'id': id,
            'update_id': 'OillPl'
        }
        return Product.updateByProductsId(data)
    }

    async destroy ({params, response}) {
        const { id } = params;
        return Product.deleteByProductsId(id, response)
    }

}

module.exports = ProductController;