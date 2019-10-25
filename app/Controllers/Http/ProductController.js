'use strict'
const product = use ('App/Models/Product')
class ProductController {

async index (){

    let products = await product.all()
    return response.json(products)
 
}

async create ({ response,request }) {
    const add = new product();
    add.nombre = request.input('nombre')
    add.precio = request.input('precio')
    add.cantidad = request.input('cantidad')
    add.marca = request.input('marca')
    add.codigo = request.input('codigo')
    add.fecha = request.input('fecha')
    add.proveedor = request.input('proveedor')
    await add.save()
    return response.json(add)
  }

  async update ({ params, request, response }) {
    const products = await product.find(params.id)
    products.nombre = request.input('nombre')
    products.precio = request.input('precio')
    products.cantidad = request.input('cantidad')
    product.marca = request.input('marca')
    products.codigo = request.input('codigo')
    products.fecha = request.input('fecha')
    products.proveedor = request.input('proveedor')
    await products.save()
    return response.json(products)
  }


  async destroy ({ params, request, response }) {
    const producto = await product.find(params.id);
    await producto.delete()
    return response.json(producto)
  }














}

module.exports = ProductController
