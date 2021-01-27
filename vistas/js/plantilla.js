/*=============================================
PLANTILLA
=============================================*/

/*----------  DATATABLE  ----------*/

$(".tablas").DataTable({

  "responsive": true,
  "autoWidth": false,
  "language": {

    "sProcessing":     "Procesando...",
    "sLengthMenu":     "Mostrar _MENU_ registros",
    "sZeroRecords":    "No se encontraron resultados",
    "sEmptyTable":     "Ningún dato disponible en esta tabla",
    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix":    "",
    "sSearch":         "Buscar:",
    "sUrl":            "",
    "sInfoThousands":  ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
    "sFirst":    "Primero",
    "sLast":     "Último",
    "sNext":     "Siguiente",
    "sPrevious": "Anterior"
    },
    "oAria": {
      "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    }

  }

});

var rutaOculta = $("#rutaOculta").val();
var rutaBackend = $("#rutaBackendOculta").val();

/*=============================================
Plugin summernote para el etxarea
=============================================*/
$(function () {
  $('.textarea').summernote()
});

// Aplicando tooltip
$('[data-toggle="tooltip"]').tooltip();

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

