'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsAttributesSchema extends Schema {
  up () {
    this.create('products-attributes', table => {
      table.increments();
      table
          .integer('value').notNullable()
          .default(0);
      table
          .integer('attributes_id').notNullable()
          .index();
      table
          .foreign('attributes_id')
          .references('id')
          .on('attributes')
          .onDelete('cascade');
      table
          .integer('products_id').notNullable()
          .index();
      table
          .foreign('products_id')
          .references('id')
          .on('products')
          .onDelete('cascade');
    });
  }

  down () {
    this.drop('products_attributes')
  }
}

module.exports = ProductsAttributesSchema
