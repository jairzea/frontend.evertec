/*=============================================
VALIDAR EL REGISTRO DE LA ORDEN
=============================================*/

function registroOrden(){

	// Validar datos
	let nombre = $('#regNombre').val();

	if (nombre != "") {

		var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;

		if (!expresion.test(nombre)) {

			$('#regNombre').parrent().before('<div class"alert alert-warning"><strong>ERROR:</strong> No se permiten numeros y caracteres especiales</div>')

			return false;
		}

	}else{

		$('#regNombre').parrent().before('<div class"alert alert-warning"><strong>ATENCIÓN:</strong> El campo nombre es obligatorio</div>')

		return false;
	}
}