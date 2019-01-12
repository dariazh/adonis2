/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

Factory.blueprint('App/Models/Type', (faker) => {
    return {
        name: faker.string({length: 5})
    }
})

Factory.blueprint('App/Models/Attribute', (faker, i, data) => {
    return {
        name: faker.string({length: 6}),
        type_id: data.type_id
    }
})

Factory.blueprint('App/Models/Product', (faker, i, data) => {
    return {
        name: faker.string({length: 6}),
        price: faker.integer({min:0, max: 100000}),
        type_id: data.type_id,
        user_id: data.user_id,
        created_at: faker.date({string: true})
    }
})

Factory.blueprint('App/Models/ProductAttribute', (faker, i, data) => {
    return {
        value: faker.integer({min:0, max: 100000}),
        attribute_id: data.attribute_id,
        product_id: data.product_id,
    }
})