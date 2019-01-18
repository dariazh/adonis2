'use strict'

const Product = use('App/Models/Product');

class ProductController {
    async index ({ request }) {
        return Product.findAll(request.only(['filters', 'order', 'sort']))
    }

    async store({ request, response }) {
        const data = request.only(['name', 'price', 'type_id', 'user_id', 'created_at'])
        const attr = request.input('attribute')
        const newProduct = await Product.createNew({
            data: data,
            attr: attr
        })

        return response.status(201).json(newProduct);

    }

    async show({ params, response }) {
        const {id} = params

        const showProd = await Product.findById(id);
        return response.json(showProd);
    }

    async update ({ params, request, response}) {
        const data = request.only(['name', 'price', 'type_id', 'user_id', 'created_at'])
        const {id} = params
        const attr = request.input('attribute')

        const showUpdateProd = await Product.updateById({id: id, data: data, attr:attr})
        return response.json(showUpdateProd);
    }

    async destroy ({params, response}) {
        const { id } = params;
        const delProd = await Product.deleteById(id)
        return response.json(delProd);
    }

}

module.exports = ProductController;