'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

//producto
Route.post('productos/producto','ProductoController.index')
Route.post('productos/crear-producto','ProductController.create')
Route.post('productos/editar-productos/:id','ProductController.update')
Route.get('productos/delete-producto/:id','ProductController.destroy')

//Proveedor
Route.post('proveedores/proveedor','ProveedorController.index')
Route.post('proveedores/nuevo','ProveedorController.create')
Route.post('proveedores/editar/:id','ProveedorController.update')
Route.get('proveedores/eliminar/:id','ProveedorController.destroy')

//entradas
Route.post('entradas/entrada','EntradaController.index')
Route.post('entradas/nuevo','EntradaController.create')
Route.post('entradas/editar/:id','EntradaController.update')
Route.get('entradas/eliminar/:id','EntradaController.destroy')
