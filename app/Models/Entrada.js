'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Entrada extends Model {
    static get table (){
        return 'entradas'
    }
}

module.exports = Entrada
