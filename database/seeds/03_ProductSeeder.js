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
        await Product.createMany(Products)


        /*Product_attribute*/


         const attrs = await Attribute.all();
         const attr_row = attrs.rows
         const products = await Product.createMany(Products)

            // console.log(attrs, '1')
            //console.log(products, '2')



        //const prod = await Product.findBy('name', 'iPhone 8 Plus')
        //const attr = await Attribute.findBy('name', 'camera')

        //console.log(prod, attr)

       /* await prod.product_attributes().attach(attr, (row) => {
            row.value = 5
            if (attr.id = 'iPhone') {
                console.log('true')
            }else{
                console.log('false')
            }
        })*/


        products.forEach(product => {
                attr_row.forEach(attr => {
                    if (product.type_id === attr.type_id) {
                        product.product_attributes().attach(attr, (row) => {
                            row.value = 5
                        })
                    }
                })
            })



    }
}

module.exports = ProductSeeder