/*============================================
=            VITRINA DE PRODUCTOS            =
============================================*/
$.ajax({

    url: rutaBackend+'/productos',
    method: 'GET',
    dataType: 'json',
    success: function(respuesta){
    	console.log("respuesta", respuesta);

    	for (var i = 0; i < respuesta.length; i++) {

    		let precio = Number(respuesta[i]['price'] - respuesta[i]['price']*0.9);

	    	$('.grillaProductos').append(`

	    		<li class="col-md-3 col-sm-6 col-xs-12">

					<!--=========================-->

					<figure>
						
						<a href="#">
							
							<img src="${respuesta[i]['img']}" alt="${respuesta[i]['name']}" class="img-responsive">

						</a>

					</figure>

					<!--=========================-->

					<h4>
						
						<small>
							
							<a href="">
								
								${respuesta[i]['name']}<br>

								<span class="label label-warning fontSize">Nuevo</span>

								<span class="label label-warning fontSize">90% off</span>

							</a>

						</small>

					</h4>

					<!--=========================-->

					<div class="col-xs-6 precio">

						<h2>
							
							<small>

								<strong class="oferta">COP $${respuesta[i]['price']}</strong>
							
							</small>

							<small>$${precio}</small>

						</h2>

					</div>

					<!--=========================-->

					<div class="col-xs-6 enlaces">

						<div class="btn-group pull-right">

							<button type="button" class="btn btn-default btn-xs deseos" idProducto="${respuesta[i]['id']}" data-toggle="tooltip" title="Agregar a mi lista de deseos">

								<i class="fa fa-heart" aria-hidden="true"></i>
								
							</button>

							<button type="button" class="btn btn-success btn-xs" onclick="llenarOrden(this)"  idProducto="${respuesta[i]['id']}" imagen="${respuesta[i]['img']}" titulo="${respuesta[i]['name']}" precio="${precio}" data-toggle="tooltip" title="Agregar a carrito y llenar orden">

								<i class="fa fa-shopping-cart" aria-hidden="true"></i>
								
							</button>

							<a href="">
								
								<button type="button" class="btn btn-default btn-xs deseos" data-toggle="tooltip" title="Ver producto">

									<i class="fa fa-eye" aria-hidden="true"></i>
								
								</button>

							</a>
							
						</div>
						
					</div>
					
				</li>`)

	    	$('.listaProductos').append(`<div class="col-xs-12">

				<!--=========================-->

				<div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
					
					<figure>

						<a href="#">
						
							<img src="${respuesta[i]['img']}" alt="${respuesta[i]['name']}" class="img-responsive">

						</a>

					</figure>

				</div>

				<!--=========================-->

				<li class="col-lg-10 col-md-7 col-sm-8 col-xs-12">

					<h1>
					
						<small>
							
							<a href="">
								
								${respuesta[i]['name']}

								<span class="label label-warning fontSize">Nuevo</span>

								<span class="label label-warning fontSize">90% off</span>

							</a>

						</small>

					</h1>

					<p class="text-muted">${respuesta[i]['description']}</p>

					<h2>
						<small>

							<strong class="oferta">COP $${respuesta[i]['price']}</strong>
						
						</small>

						<small>$${precio}</small>

					</h2>

					<div class="btn-group pull-right">

						<button type="button" class="btn btn-default btn-xs deseos" idProducto="${respuesta[i]['id']}" data-toggle="tooltip" title="Agregar a mi lista de deseos">

							<i class="fa fa-heart" aria-hidden="true"></i>
							
						</button>

						<button type="button" class="btn btn-success btn-xs" style="color=white" onclick="llenarOrden(this)" idProducto="${respuesta[i]['id']}" imagen="${respuesta[i]['img']}" titulo="${respuesta[i]['name']}" precio="${precio}" data-toggle="tooltip" title="Agregar a carrito y llenar orden">

							<i class="fa fa-shopping-cart" aria-hidden="true"></i>
							
						</button>

						<a href="">
							
							<button type="button" class="btn btn-default btn-xs" data-toggle="tooltip" title="Ver producto">

								<i class="fa fa-eye" aria-hidden="true"></i>
							
							</button>

						</a>
						
					</div>

				</li>

				<!--=========================-->

				<div class="col-xs-12">

					<hr>
					
				</div>

				<!--=========================-->
				
			</div>`)
    	}
    	
    }

})

/*=====  End of VITRINA DE PRODUCTOS  ======*/

function llenarOrden(elm){

	$('.nombreProducto small').empty();
	$('.precioProducto small').empty();

	let titulo = elm.getAttribute('titulo');
	let precio = elm.getAttribute('precio');
	let id_producto = elm.getAttribute('idProducto');

	$('#id_producto').val(id_producto);

	$('.nombreProducto small').append(titulo);
	$('.precioProducto small').append('$ '+precio);

	$('#modalOrden').modal("show");
}

/*=========================================
=            CONSULTAR ORDENES            =
=========================================*/
$('.btnConsultarOrden').on('click', function(){

	// fetch('http://apirest-tienda.evertec/registro_productos', {
 //   	method: 'POST',
 //   	body: data
 //  	}).then((response) => response.json())
 //  	.then((responseJson) => {

 //  	}
})



