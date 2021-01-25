/*=============================================
PLANTILLA
=============================================*/

var rutaOculta = $("#rutaOculta").val();

// Aplicando tooltip
$('[data-toggle="tooltip"]').tooltip();

$.ajax({

	url:"ajax/plantilla.ajax.php",
	success:function(respuesta){

		var colorFondo = JSON.parse(respuesta).colorFondo;
		var colorTexto = JSON.parse(respuesta).colorTexto;
		var barraSuperior = JSON.parse(respuesta).barraSuperior;
		var textoSuperior = JSON.parse(respuesta).textoSuperior;
		
		$(".backColor, .backColor a").css({"background": colorFondo,
											"color": colorTexto})

		$(".barraSuperior, .barraSuperior a").css({"background": barraSuperior, 
			                                       "color": textoSuperior})

	}


})

/*==============================
CUADRICULA O LISTA
==============================*/
$("#btnGrid").click(function(){

	$("#list").hide();
	$("#grid").show();

	$("#btnList").removeClass('backColor');
	$("#btnGrid").addClass('backColor');

})

$("#btnList").click(function(){

	$("#list").show();
	$("#grid").hide();

	$("#btnList").addClass('backColor');
	$("#btnGrid").removeClass('backColor');

})

$('.btnLlenarOrden').click(function(){

	$('.nombreProducto small').empty();
	$('.precioProducto small').empty();

	let titulo = $(this).attr('titulo');
	let precio = $(this).attr('precio');
	let id_producto = $(this).attr('idProducto');

	$('#id_producto').val(id_producto);

	$('.nombreProducto small').append(titulo);
	$('.precioProducto small').append('$ '+precio);

	$('#modalOrden').modal("show");
})