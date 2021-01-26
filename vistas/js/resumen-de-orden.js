/*===================================================================
=            Llenando la informacion de resumen de orden            =
===================================================================*/

$(document).ready(function(){

	let datos = JSON.parse(localStorage.getItem("listaProducto"));
	console.log("datos", datos);

	$('#nombreResumen').append(datos[0]['nombre']);

	$('#correoResumen').append(datos[0]['email'])
	$('#telefonoResumen').append(datos[0]['telefono'])

	$('.tituloResumenOrden').append(datos[0]['nombre_producto'])
	$('.descripcionResumenOrden').append(datos[0]['descripcion_producto'])
	$('.precioResumen').append(datos[0]['precio_producto'])
	// $(".imgResumenOrden").attr("src",datos[0]['imagen_producto'])

	$('.imgResumenOrden').append(`<img src="${datos[0]['imagen']}" alt="${datos[0]['nombre_producto']}" class="img-thumbnail">`)


})

/*=====================================
=            PROCESAR PAGO            =
=====================================*/
$('.btnRealizarPago').on('click', function(){

	let datos = JSON.parse(localStorage.getItem("listaProducto"));

	var texto = $(datos[0]['descripcion_producto']).text();
	var precio = parseFloat(datos[0]['precio_producto']);

	const data = new FormData();
	data.append('precio', '500000');
	data.append('descripcion', 'texto');
	data.append('id_orden', datos[0]['id_orden']);

	fetch('http://apirest-tienda.evertec/pagar', {
	 method: 'POST',
	 body: data
	}).then((response) => response.json())
	.then((responseJson) => {
		console.log(responseJson);

		if (responseJson['requestId']) {

			// window.open(responseJson['processUrl'], '_blank');

		}

		

	}).catch((error) => {

		console.error(error)
		
	});

})

/*=====  End of PROCESAR PAGO  ======*/




