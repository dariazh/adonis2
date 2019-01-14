'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttributesSchema extends Schema {
  up () {
    this.create('attributes', table => {
      table.increments();
      table.string('name', 30).notNullable();
      table.integer('type_id').notNullable().index();
      table.foreign('type_id').references('id').on('types').onDelete('cascade');
    });
  }

  down () {
    this.drop('attributes')
  }
}

module.exports = AttributesSchema