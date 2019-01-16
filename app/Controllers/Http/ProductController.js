'use strict'

const Product = use('App/Models/Product');

class ProductController {
    async index ({ request }) {
        return Product.findAll(request.only(['filters', 'order', 'sort']))
    }

    async store({ request }) {
        const data = request.only(['name', 'price', 'type_id', 'user_id', 'created_at'])
        return Product.createNew(data)
    }

    async show({ params, response }) {
        const {id} = params

        const showProd = await Product.findById(id);
        return response.json(showProd);
    }

    async update ({ params, request, response}) {
        const data = request.only(['name', 'price', 'type_id', 'user_id', 'created_at'])
        const {id} = params

        const showUpdateProd = await Product.updateById(id,data)
        return response.json(showUpdateProd);
    }

    async destroy ({params, response}) {
        const { id } = params;
        const delProd = await Product.deleteById(id)
        return response.json(delProd);
    }

}

module.exports = ProductController;