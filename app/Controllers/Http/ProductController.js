'use strict';
const Product = use('App/Models/Product');


class ProductController {
    async index ({ params, response }) {
        const products = await Product.all();

        return products
    }

    async view({ params, response }) {
        const product = await Product.findOrFail(params.id);
    }

    async create({ params, response }) {


    }

    async edit ({ params, response }) {
        const product = await Product.findOrFail(params.id);

    }

    async delete ({ params, response }) {
        const product = await Product.findOrFail(params.id);

        await product.delete();
    }

}

module.exports = ProductController;
