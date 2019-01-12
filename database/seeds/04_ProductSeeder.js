'use strict'

const Type = use('App/Models/Type');
const User = use('App/Models/User');
const Product = use('App/Models/Product');
const Attribute = use('App/Models/Attribute');
const Factory = use('Factory');

class ProductSeeder {
    async run() {
        await Product.query().delete();

        const {rows: users} = await User.all();
        const {rows: types} = await Type.all();

        await Promise.all(users.map(user =>
            Promise.all(types.map(type =>
                Factory.model('App/Models/Product').createMany(2, {type_id: type.id, user_id: user.id})
            ))
        ))

        const {rows: products} = await Product.all();
        const {rows: attributes} = await Attribute.all();

        await Promise.all(products.map(product =>
            Promise.all(attributes.filter(attribute => product.type_id === attribute.type_id).map(attribute =>
                Factory.model('App/Models/ProductAttribute')
                    .createMany(2, {attribute_id: attribute.id, product_id: product.id})
            ))
        ))
    }
}

module.exports = ProductSeeder