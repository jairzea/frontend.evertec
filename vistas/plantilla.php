<!DOCTYPE html>
<html lang="es">
<head>

	<meta charset="UTF-8">

	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

	<meta name="title" content="Tienda Virtual">

	<meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam accusantium enim esse eos officiis sit officia">

	<meta name="keyword" content="Lorem ipsum, dolor sit amet, consectetur, adipisicing, elit, Quisquam, accusantium, enim, esse">

	<title>Tienda Virtual</title>

	<?php

		echo '<link rel="icon" href="vistas/img/plantilla/logotipo.png">';

		/*=============================================
		MANTENER LA RUTA FIJA DEL PROYECTO
		=============================================*/
		
		$url = Ruta::ctrRuta();

	?>

	<!--===================================
	PLUGINS DE CSS
	====================================-->

	<link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plugins/bootstrap.min.css">

	<link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plugins/font-awesome.min.css">

	<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Condensed" rel="stylesheet">

	<link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plugins/sweetalert.css">

	<!-- summernote -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">

	<!-- DataTables -->
    <link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plugins/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plugins/responsive.bootstrap4.min.css">

	<!--===================================
	HOJAS DE ESTILO PERSONALIZADAS
	====================================-->

	<link rel="stylesheet" href="<?php echo $url; ?>vistas/css/plantilla.css">

	<link rel="stylesheet" href="<?php echo $url; ?>vistas/css/cabezote.css">

	<link rel="stylesheet" href="<?php echo $url; ?>vistas/css/productos.css">

	<link rel="stylesheet" href="<?php echo $url; ?>vistas/css/resumen-orden.css">

	<!--===================================
	PLUGINS DE JAVASCRIPT
	====================================-->

	<script src="<?php echo $url; ?>vistas/js/plugins/jquery.min.js"></script>

	<script src="<?php echo $url; ?>vistas/js/plugins/bootstrap.min.js"></script>

	<script src="<?php echo $url; ?>vistas/js/plugins/sweetalert.min.js"></script>

	<!-- Summernote -->
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>

	<!-- DataTables -->
    <script src="<?php echo $url; ?>vistas/js/plugins/jquery.dataTables.min.js"></script>
    <script src="<?php echo $url; ?>vistas/js/plugins/dataTables.bootstrap4.min.js"></script>
    <script src="<?php echo $url; ?>vistas/js/plugins/dataTables.responsive.min.js"></script>
    <script src="<?php echo $url; ?>vistas/js/plugins/responsive.bootstrap4.min.js"></script>

</head>

<body>

<?php

/*=============================================
CABEZOTE
=============================================*/

include "modulos/cabezote.php";

/*=============================================
CONTENIDO DINAMICO
=============================================*/

if (isset($_GET["ruta"])) {

	$rutaActual = "modulos/".$_GET["ruta"].".php";

	if ($rutaActual == "modulos/administrador.php" || $rutaActual == "modulos/tabla-productos.php") {

		include "modulos/administrador.php";
		
		include "modulos/tabla-productos.php";

	}elseif ($rutaActual == "modulos/administrador.php" || $rutaActual == "modulos/tabla-ordenes.php"){

		include "modulos/administrador.php";
		
		include "modulos/tabla-ordenes.php";

	}else{

		include $rutaActual;

	}

}else{

	include "modulos/destacados.php";

	include "modulos/productos.php";

}

?>

<input type="hidden" value="<?php echo $url; ?>" id="rutaOculta">
<!--===================================
JAVASCRITP PERSONALIZADO
====================================-->

<script src="<?php echo $url; ?>vistas/js/cabezote.js"></script>
<script src="<?php echo $url; ?>vistas/js/plantilla.js"></script>
<script src="<?php echo $url; ?>vistas/js/ordenes.js"></script>
<script src="<?php echo $url; ?>vistas/js/resumen-de-orden.js"></script>
<script src="<?php echo $url; ?>vistas/js/tabla-productos.js"></script>
<script src="<?php echo $url; ?>vistas/js/tabla-ordenes.js"></script>

</body>
</html>