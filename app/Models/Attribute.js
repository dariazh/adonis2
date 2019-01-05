'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Attribute extends Model {
    static get updatedAtColumn() {
        return null;
    }

    type() {
        return this.belongsTo('App/Models/Type');
    }

    product_attributes() {
        return this.manyThrough('App/Models/ProductAttribute');
    }
}

module.exports = Attribute
