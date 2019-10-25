'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntradaSchema extends Schema {
  up () {
    this.create('entradas', (table) => {
      table.increments()
      table.date('fecha').notNullable()
      table.integer('proveedor_id').unsigned().references('id').inTable('proveedors')
      table.integer('producto_id').unsigned().references('id').inTable('productos')
      table.float('total').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('entradas')
  }
}

module.exports = EntradaSchema
