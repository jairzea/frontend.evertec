/*=======================================
=            TABLA DE IRDENES           =
=======================================*/
$(document).ready(function(){

  email = localStorage.getItem("emaiOrdenes");
  
  $('.nombreOrdenesUsr').append(email);

  tabla = $('.tablaOrdenesUsuarios').DataTable({
      "ajax": {
        'method':'post',
        "url": rutaBackend+"/ver_ordenes_usuario",
        "dataSrc": "",
        "dataType": 'json',
         "data": d => { 
            d.email = email;
        },
      },
      "columns": [
        { "data": "id_orden" },
        { "data": "nombre" },
        { "data": "telefono" },
        { "data": "email" },
        { "data": "referencia_orden" },
        { "data": "url_pago" },
        { "data": "nombre_producto" },
        { "data": "precio_producto" },
        { "data": "estado" },
        { render: (data, type, row) => {
          return `<figure>
                        <img src="${row.imagen_producto}" style="width:50%"  alt="${row.name}">
                  </figure>`;
                  }
        },
        { "data": "created_at" },
        { "data": "boton" },
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

$('.tablaOrdenesUsuarios').on('click', '.btnReintentarPago', function(){

  let username = $(this).attr('id_cliente');
  let password = $(this).attr('llave_secreta');

  let headers = new Headers();

  headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
  
  fetch(rutaBackend+'/orden_activa', {
   method: 'GET',
   headers: headers
  }).then((response) => response.json())
  .then((responseJson) => {

    let datos = responseJson.orden;

    var listaOrden = [];

    localStorage.clear()

    /*===========================================================
    =            Agregar informacion al localstorage            =
    ===========================================================*/
    listaOrden.push({'nombre' : datos[0]['nombre'],
             'email' : datos[0]['email'],
             'nombre_producto' : datos[0]['nombre_producto'],
             'descripcion_producto': datos[0]['descripcion_producto'],
             'id_orden': datos[0]['id_orden'],
             'telefono': datos[0]['telefono'],
             'imagen': datos[0]['imagen_producto'],
             'precio_producto': datos[0]['precio_producto']})

    localStorage.setItem("listaProducto", JSON.stringify(listaOrden))

    window.location = rutaOculta+"resumen-de-orden";


  }).catch((error) => {

    console.error(error);
    
  });
})
