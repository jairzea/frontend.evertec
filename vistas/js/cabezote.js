
console.log("rutaBackend", rutaBackendOculta);
/*=============================================
CABEZOTE
=============================================*/

$("#btnCategorias").click(function(){

	if(window.matchMedia("(max-width:767px)").matches){

		$("#btnCategorias").after($("#categorias").slideToggle("fast"))

	}else{

		$("#cabezote").after($("#categorias").slideToggle("fast"))
		
	}

		
})

/*==================================================
=            Añadir producto a la cesta            =
==================================================*/
$(document).ready(function(){

	if (localStorage.getItem('listaProducto')) {

		let datos = JSON.parse(localStorage.getItem("listaProducto"));

		$('.cantidadCesta').append('1');
		$('.sumaCesta').append(datos[0]['precio_producto'])
	}

})