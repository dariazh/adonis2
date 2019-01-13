'use strict'

const Product = use('App/Models/Product');

class ProductController {
    async index ({params, request}) {
        return Product.findAllProducts()
    }

    /*async store() {
        const data = {
            'id': 'PPokIj',
            'price': '7865',
            'type_name': 'laptop',
            'user_name': 'admin'
        }

        return Product.createByProductsId(data)
    }*/

    async store({ request, response }) {
        const post = request.only(['name', 'value', 'product_id', 'type_id',]);

       const ju =  await Product.findOrFail(post.product_id);
        await Type.findOrFail(post.type_id);

        /*const model = new Attribute();
        model.name = post.name;
        model.type_id = post.type_id;

        await model.save();

        const productAttribute = new ProductAttributes();
        productAttribute.product_id = post.product_id;
        productAttribute.attribute_id = model.id;
        productAttribute.value = post.value;

        await productAttribute.save();*/

        return response.json(ju);
    }

    async show({params}) {
        const {id} = params
        return Product.findByProductsId(id)
    }

    async update({ params }) {
        const {id} = params
        const data = {
            'id': id,
            'update_id': 'oKYTgh'
        }
        return Product.updateByProductsId(data)
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