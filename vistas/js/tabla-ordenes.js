/*=======================================
=            TABLA DE IRDENES           =
=======================================*/
$(document).ready(function(){

  tabla = $('.tablaOrdenes').DataTable({
      "ajax": {
        'method':'get',
        "url": "http://apirest-tienda.evertec/ver_ordenes_productos",
        "dataSrc": "",
        "dataType": 'json',
         "data": d => {},
      },
      "columns": [
        { "data": "id_orden" },
        { "data": "nombre" },
        { "data": "telefono" },
        { "data": "email" },
        { "data": "referencia_orden" },
        { "data": "created_at" },
        { render: (data, type, row) => {
          return `<div>
                        <a href="${row.url_pago}">Url de pago</a>
                  </div>`;
                  }
        },
        { "data": "nombre_producto" },
        { "data": "precio_producto" },
        { "data": "estado" },
        { render: (data, type, row) => {
          return `<figure>
                        <img style="width:50%" src="${row.img}" alt="${row.name}">
                  </figure>`;
                  }
        }
      ],
      destroy: true,
      responsive: true,
      "order": [[ 0, "desc" ]],
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

})