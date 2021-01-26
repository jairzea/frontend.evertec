/*===================================================================
=            Llenando la informacion de resumen de orden            =
===================================================================*/

$(document).ready(function(){

	let datos = JSON.parse(localStorage.getItem("listaProducto"));

	$('#nombreResumen').append(datos[0]['nombre']);

	$('#correoResumen').append(datos[0]['email'])
	$('#telefonoResumen').append(datos[0]['telefono'])

	$('.tituloResumenOrden').append(datos[0]['nombre_producto'])
	$('.descripcionResumenOrden').append(datos[0]['descripcion_producto'])
	$('.precioResumen').append(datos[0]['precio_producto'])

	$('.imgResumenOrden').append(`<img src="${datos[0]['imagen']}" alt="${datos[0]['nombre_producto']}" class="img-thumbnail">`)


})

/*=====================================
=            PROCESAR PAGO            =
=====================================*/
$('.btnRealizarPago').on('click', function(){

	let datos = JSON.parse(localStorage.getItem("listaProducto"));

	var texto = $(datos[0]['descripcion_producto']).text();

	const data = new FormData();
	data.append('precio', datos[0]['precio_producto']);
	data.append('descripcion', texto);
	data.append('id_orden', datos[0]['id_orden']);

	fetch('http://apirest-tienda.evertec/pagar', {
	 method: 'POST',
	 body: data
	}).then((response) => response.json())
	.then((responseJson) => {
		console.log(responseJson);

		if (responseJson['requestId']) {

			window.open(responseJson['processUrl'], '_blank');

		}else{

			swal({
	          type:"error",
	          title: responseJson,
	          showConfirmButton: true,
	          confirmButtonText: "Cerrar"
	        
	      	})
		}

		

	}).catch((error) => {

		console.error(error)
		
	});

})

/*=====  End of PROCESAR PAGO  ======*/

/*=======================================
=            Limpiar carrito            =
=======================================*/
$('.btnLimpiarCarrito').on('click', function(){

	localStorage.clear();
	location.reload();
	
})







