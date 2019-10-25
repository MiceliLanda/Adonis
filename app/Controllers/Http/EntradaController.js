'use strict'
const entra = use('App/Models/Entrada')
class EntradaController {

    async index (){

        let entrada = await entra.query().with('productos').with('proveedores').fetch()
        return response.json(entrada)
    }
    
    async create ({ response,request }) {
        const add = new entra();
        add.fecha = request.input('fecha')
        add.proveedor_id = request.input('proveedor_id')
        add.producto_id = request.input('producto_id')
        add.total = request.input('total')
        await add.save()
        return response.json(add)
      }
    
      async update ({ params, request, response }) {
        const ent = await entra.find(params.id)
        ent.fecha = request.input('fecha')
        ent.proveedor_id = request.input('proveedor_id')
        ent.producto_id = request.input('producto_id')
        ent.total = request.input('total')
        await ent.save()
        return response.json(ent)
      }
    
    
      async destroy ({ params, request, response }) {
        const ent = await entra.find(params.id);
        await ent.delete()
        return response.json(ent)
      }
}

module.exports = EntradaController
