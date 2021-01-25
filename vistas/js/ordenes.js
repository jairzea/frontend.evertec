/*=============================================
VALIDAR EMAIL
=============================================*/

$('#regEmail').change(function(){

	$('.alertMail').empty();

	let email = $(this).val();

	var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	if (!expresion.test(email)) {

		$('#regEmail').parent().before('<div class="alertMail"><div class="alert alert-danger"><strong>ERROR:</strong> Escriba correctamente el correo electronico</div></div>');

		return false;
	}

})

/*=============================================
VALIDAR NOMBRE
=============================================*/

$('#regNombre').change(function(){

	$('.alertNombre').empty();

	let nombre = $(this).val();

	var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;

	if (!expresion.test(nombre)) {

		$('#regNombre').parent().before('<div class="alertNombre"><div class="alert alert-danger"><strong>ERROR:</strong> No se permiten números y caracteres especiales</div></div>');

		return false;
	}

})

/*=============================================
VALIDAR TELEFONO
=============================================*/

$('#regTelefono').change(function(){

	$('.alertTelefono').empty();

	let nombre = $(this).val();

	var expresion = /^[+0-9 ]*$/;

	if (!expresion.test(nombre)) {

		$('#regTelefono').parent().before('<div class="alertTelefono"><div class="alert alert-danger"><strong>ERROR:</strong> No se permiten caracteres especiales</div></div>');

		return false;
	}

})

$('.btnRegistrarOrden').on('click', function(){

	
	let nombre = $('#regNombre').val();
	let email = $('#regEmail').val();
	let telefono = $('#regTelefono').val();

	/*===Validar Email===*/
	if (email == "") {


		$('#regEmail').parent().before('<div class="alertMail"><div class="alert alert-warning"><strong>ATENCIÓN:</strong> El campo email es obligatorio</div></div>')

		return false;
	}

	/*===Validar Nombre===*/
	if (nombre == "") {

		$('#regNombre').parent().before('<div class="alertNombre"><div class="alert alert-warning"><strong>ATENCIÓN:</strong> El campo nombre es obligatorio</div></div>')

		return false;
	}

	/*===Validar telefono===*/
	if (telefono == "") {

		$('#regTelefono').parent().before('<div class="alertTelefono"><div class="alert alert-warning"><strong>ATENCIÓN:</strong> El campo telefono es obligatorio</div></div>')

		return false;
	}

	$.ajax({

        url: 'http://apirest-tienda.evertec/registro_ordenes',
        method: 'POST',
        dataType: 'json',
        data:{
          'nombre': $('#regNombre').val(),
          'email' : $('#regEmail').val(), 
          'telefono' : $('#regTelefono').val(),
          'id_producto' : $('#id_producto').val()
        },
        success: function(respuesta){

        	let username = respuesta['credenciales'].id_cliente;
			let password = respuesta['credenciales'].llave_secreta;

        	if (respuesta.status == 200) {

        		swal({
					  title: "",
					  text: respuesta.detalle,
					  type: "success",
					  showCancelButton: false,
					  confirmButtonColor: "#318f8d",
					  confirmButtonText: "¡Ir al resumen de orden!",
					  closeOnConfirm: false
					},
					function(isConfirm){
						if (isConfirm) {

							let headers = new Headers();

							headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
							fetch('http://apirest-tienda.evertec/orden_activa', {
							 method: 'GET',
							 headers: headers
							}).then((response) => response.json())
							.then((responseJson) => {

								let datos = responseJson.orden;

								window.location = `${rutaOculta}resumen-de-orden?nombre=${datos[0]['nombre']}&email=${datos[0]['email']}&nombre_producto=${datos[0]['nombre_producto']}&descripcion_producto=${datos[0]['descripcion_producto']}&precio_producto=${datos[0]['precio_producto']}`;

								// var data = {
								//     "nombre" : datos[0]['nombre'], 
								//     "email" : datos[0]['email'],
								//     "nombre_producto" : datos[0]['nombre_producto'],
								//     "descripcion_producto" : datos[0]['descripcion_producto'],
								//     "precio_producto" : datos[0]['precio_producto'],
								// };

								// var url = `${rutaOculta}resumen-de-orden`;

								// $.post(url, function(data){
								// 	window.location = `${rutaOculta}resumen-de-orden`
								// })

								// enviarDatos(data, url); // Ejecutar cuando se quiera enviar los datos

								// function enviarDatos(data, url){
								//     $.ajax({
								//             data: data,
								//             url: url,
								//             type: 'post',
								//             success:  function (response) {
								//                 window.location = `${rutaOculta}resumen-de-orden`
								//             },
								//             error: function (error) {
								//                 console.log(error); // Imprimir respuesta de error
								//             }
								//     });
								// }

							}).catch((error) => {

								console.error(error);
								
							});

							// window.location = rutaOculta+"resumen-de-orden";
						} 
				});

        	}else{

        		swal({
		            type:"error",
		            title: respuesta.detalle,
		            showConfirmButton: true,
		            confirmButtonText: "Cerrar"
		          
		        }).then(function(result){

		        });
        	}
        }

    })

})