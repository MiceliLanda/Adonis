'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedorSchema extends Schema {
  up () {
    this.create('proveedors', (table) => {
      table.increments()
      table.string('nombre').unique().notNullable()
      table.string('email').notNullable()
      table.string('telefono',50).unique().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('proveedors')
  }
}

module.exports = ProveedorSchema
