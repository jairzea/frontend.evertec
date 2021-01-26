<?php

require_once "../controladores/ordenes.controlador.php";

class AjaxOrdenes{

	/*=============================================
	PROCESAR DATOS DE RESUMEN DE ORDEN
	=============================================*/	

	public $nombre;
	public $email;
	public $nombre_producto;
	public $descripcion_producto;
	public $precio_producto;

	public function ajaxProcesarDatos(){

		$datos = array('nombre' => $this->nombre,
					   'email' => $this->email,
					   'nombre_producto' => $this->nombre_producto,
					   'descripcion_producto' => $this->descripcion_producto,
					   'precio_producto' => $this->precio_producto );

		$respuesta = ControladorOrdenes::ctrOrdenes($datos);

		echo json_encode($respuesta);

	}

}

if ($_POST['nombre'] === '') {
	
	$procesarDatos = new AjaxOrdenes();
	$procesarDatos -> nombre = $_POST["nombre"];
	$procesarDatos -> email = $_POST["email"];
	$procesarDatos -> nombre_producto = $_POST["nombre_producto"];
	$procesarDatos -> descripcion_producto = $_POST["descripcion_producto"];
	$procesarDatos -> precio_producto = $_POST["precio_producto"];
	$procesarDatos -> ajaxProcesarDatos();

}else{

	$procesarDatos = new AjaxOrdenes();
	$procesarDatos -> nombre = $_POST["nombre"];
	$procesarDatos -> email = $_POST["email"];
	$procesarDatos -> nombre_producto = $_POST["nombre_producto"];
	$procesarDatos -> descripcion_producto = $_POST["descripcion_producto"];
	$procesarDatos -> precio_producto = $_POST["precio_producto"];
	$procesarDatos -> ajaxProcesarDatos();

}

