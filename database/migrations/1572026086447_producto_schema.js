'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('nombre',50).notNullable()
      table.float('precio').notNullable()
      table.integer('cantidad').notNullable()
      table.string('marca',50).notNullable()
      table.string('codigo').unique().notNullable()
      table.date('fecha').notNullable()
      table.string('proveedor').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
