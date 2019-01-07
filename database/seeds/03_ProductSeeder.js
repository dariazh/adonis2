'use strict'

const Database = use('Database');
const Type = use('App/Models/Type');
const User = use('App/Models/User');
const Product = use('App/Models/Product');
const Attribute = use('App/Models/Attribute');
const ProductAttribute = use('App/Models/ProductAttribute');

class ProductSeeder {
    async run() {
        await Product.query().delete();

        const type = await Type.pair('name', 'id');
        const user = await User.pair('username', 'id');

        const Products = [
            {
                name: 'Nook GlowLight Plus',
                price: 7400,
                type_id: type.laptop,
                user_id: user.test,
                created_at: Database.fn.now()
            },
            {
                name: 'Kindle Oasis 2',
                price: 11000,
                type_id: type.ebook,
                user_id: user.test,
                created_at: Database.fn.now()
            },
            {
                name: 'iPhone 8 Plus',
                price: 12500,
                type_id: type.phone,
                user_id: user.admin,
                created_at: Database.fn.now()
            }
        ]

        await Product.createMany(Products);

        /*Product_attribute*/
        await ProductAttribute.query().delete();
        const product = await Product.pair('name', 'id');

        const attr_1 = await Attribute.findBy('name', 'color')
        const attr_2 = await Attribute.findBy('name', 'display')

        const prod_name = await Product.findByOrFail('name', 'iPhone 8 Plus')

        const attrs = [attr_1.id, attr_2.id]


        await prod_name.product_attribute().attach([attr_1.id])

    }
}

module.exports = ProductSeeder