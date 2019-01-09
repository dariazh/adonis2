'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Attribute extends Model {
    static get updatedAtColumn() {
        return null;
    }

    static get createdAtColumn() {
        return null;
    }
    product_attributes() {
        return this.belongsToMany('App/Models/ProductAttribute');
    }
}

module.exports = Attribute
