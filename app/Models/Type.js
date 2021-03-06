'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Type extends Model {
    static get updatedAtColumn() {
        return null;
    }

    static get createdAtColumn() {
        return null;
    }

    attributes() {
        return this.belongsToMany('App/Models/Attribute');
    }
}

module.exports = Type
