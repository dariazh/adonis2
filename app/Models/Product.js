'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    static get updatedAtColumn() {
        return null;
    }

    type() {
        return this.belongsTo('App/Models/Type');
    }

    users() {
        return this.belongsTo('App/Models/User');
    }

    product_attributes() {
        return this.belongsToMany('App/Models/ProductAttribute');
    }
}

module.exports = Product
