'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductAttributesSchema extends Schema {
  up () {
    this.create('product_attributes', table => {
      table.increments();
      table
          .json('value').notNullable()
          .default(0);
      table
          .integer('attribute_id').notNullable()
          .index();
      table
          .foreign('attribute_id')
          .references('id')
          .on('attributes')
          .onDelete('cascade');
      table
          .integer('product_id').notNullable()
          .index();
      table
          .foreign('product_id')
          .references('id')
          .on('products')
          .onDelete('cascade');
    });
  }

  down () {
    this.drop('product_attributes')
  }
}

module.exports = ProductAttributesSchema
