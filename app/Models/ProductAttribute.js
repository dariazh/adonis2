'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductAttribute extends Model {
    static get updatedAtColumn() {
        return null;
    }

    static get createdAtColumn() {
        return null;
    }
    /**/
    products() {
    return this.belongsTo('App/Models/Product');
}

attributes() {
    return this.belongsTo('App/Models/Attribute');
}
/**/
}

module.exports = ProductAttribute
