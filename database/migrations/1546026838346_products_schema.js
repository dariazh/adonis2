'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments();
      table.string('name', 60).notNullable();
      table.integer('price').notNullable().default(0);
      table.integer('type_id').notNullable().index();
      table.foreign('type_id').references('id').on('types').onDelete('cascade');
      table.integer('user_id').notNullable().index();
      table.foreign('user_id').references('id').on('users').onDelete('cascade');
      table.timestamp('created_at').defaultTo(this.fn.now());
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema