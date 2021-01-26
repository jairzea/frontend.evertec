<?php

session_start();

class ControladorOrdenes{

	/*=============================================
	ALMACENAR DATOS EN SESSION
	=============================================*/

	public function ctrOrdenes($datos){

		$_SESSION['nombre'] = $datos['nombre'];
		$_SESSION['email'] = $datos['email'];
		$_SESSION['nombre_producto'] = $datos['nombre_producto'];
		$_SESSION['descripcion_producto'] = $datos['descripcion_producto'];
		$_SESSION['precio_producto'] = $datos['precio_producto'];

		if (isset($_SESSION['nombre'])) {
			
			echo '<script>

					window.location = "resumen-de-orden";

				</script>';


		}else{

			echo '<script>

					swal({
					  title: "Error al redireccionar",
					  text: "Hubo un error al redireccionar al resumen de la orden, por favor vuelva aintentarlo",
					  type: "error",
					  confirmButtonColor: "#318f8d",
					  closeOnConfirm: false
					})

				</script>';

		}

	}

}