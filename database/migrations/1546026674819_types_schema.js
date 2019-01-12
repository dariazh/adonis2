'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypesSchema extends Schema {
  up () {
    this.create('types', (table) => {
      table.increments();
      table
          .string('name', 30).notNullable();
    })
  }

  down () {
    this.drop('types')
  }
}

module.exports = TypesSchema
