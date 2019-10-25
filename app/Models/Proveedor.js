'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Proveedor extends Model {

    productos(){
        return this.belongsTo('App/Models/Product','producto_id')
      }
    
    proveedores(){
        return this.belongsTo('App/Models/Proveedor','proveedor_id')
      }
}

module.exports = Proveedor
