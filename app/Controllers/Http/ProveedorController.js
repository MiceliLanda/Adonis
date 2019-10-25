'use strict'
const prove = use ('App/Models/Proveedor')

class ProveedorController {

    async index (){

        let provs = await prove.all()
        return response.json(provs)
     
    }
    
    async create ({ response,request }) {
        const add = new prove();
        add.nombre = request.input('nombre')
        add.email = request.input('email')
        add.telefono = request.input('telefono')
        await add.save()
        return response.json(add)
      }
    
      async update ({ params, request, response }) {
        const provs = await prove.find(params.id)
        provs.nombre = request.input('nombre')
        provs.email = request.input('email')
        provs.telefono = request.input('telefono')
        await provs.save()
        return response.json(provs)
      }
    
    
      async destroy ({ params, request, response }) {
        const provs = await prove.find(params.id);
        await provs.delete()
        return response.json(provs)
      }
   
}

module.exports = ProveedorController
