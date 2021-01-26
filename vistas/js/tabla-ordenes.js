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
        },
        { render: (data, type, row) => {
          return `<div class="btn-group">
                        <button class="btn btn-warning btn-sm btnModalEditarProducto" title='Editar Producto' 
                        idProducto='${row.id}'' nombre='${row.name}' description='${row.description}'  
                        precio='${row.price}' imagen='${row.img}'
                        data-toggle="modal" data-target="#modalProducto">
                          <i class="fa fa-pencil"></i>
                        </button> 
                        <button class="btn btn-danger btn-sm btnEliminarProducto" 
                         idProducto='${row.id}''>
                          <i class="fa fa-trash"></i>
                        </button>
                  </div>`;
                  }
        },
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

/*========================================
=            Agregar Producto            =
========================================*/
$('.btnGuardarProducto').on('click', function(){

  const data = new FormData();
  data.append('nombre', $('#nombreProducto').val());
  data.append('descripcion', $('#descripcionProducto').val());
  data.append('precio', $('#precioProducto').val());
  data.append('imagen', $('#imagenProducto').val());

  fetch('http://apirest-tienda.evertec/registro_productos', {
   method: 'POST',
   body: data
  }).then((response) => response.json())
  .then((responseJson) => {

    if (responseJson.status == 200) {

      swal({
      title: "",
      text: responseJson.detalle,
      type: "success",
      showCancelButton: false,
      confirmButtonColor: "#318f8d",
      confirmButtonText: "Ok",
      closeOnConfirm: true
    },
    function(isConfirm){

      tabla.ajax.reload();
      $('#modalProducto').modal('hide');
  });

    }else{

      swal({
          type:"error",
          title: responseJson.detalle,
          showConfirmButton: true,
          confirmButtonText: "Cerrar"
        
      }).then(function(result){

      });
    }

  }).catch((error) => {

    console.error(error)
    
  });

})

$('.btnAbrirCrear').on("click", function(){

  $('.btnGuardarProducto').css('display','block');
  $('.btnEditarProducto').css('display','none');

})

/*===========================================
=            Llenar modal editar            =
===========================================*/
$(".tablaPdoductos").on("click", ".btnModalEditarProducto", function(){

  let nombre = $(this).attr('nombre');
  let id = $(this).attr('idProducto');
  let precio = $(this).attr('precio');
  let imagen = $(this).attr('imagen');
  let descripcion = $(this).attr('description');

  $('#nombreProducto').val(nombre);
  $('#descripcionProducto').summernote('code', descripcion);
  $('#precioProducto').val(precio);
  $('#imagenProducto').val(imagen);
  $('#idProducto').val(id);

  $('.btnGuardarProducto').css('display','none');
  $('.btnEditarProducto').css('display','block');

})

/*========================================
=            Editar Producto            =
========================================*/
$('.btnEditarProducto').on('click', function(){

  const data = new FormData();
  data.append('nombre', $('#nombreProducto').val());
  data.append('descripcion', $('#descripcionProducto').val());
  data.append('precio', $('#precioProducto').val());
  data.append('imagen', $('#imagenProducto').val());
  data.append('id', $('#idProducto').val());

  fetch('http://apirest-tienda.evertec/editar_producto', {
   method: 'POST',
   body: data
  }).then((response) => response.json())
  .then((responseJson) => {

    if (responseJson.status == 200) {

      swal({
      title: "",
      text: responseJson.detalle,
      type: "success",
      showCancelButton: false,
      confirmButtonColor: "#318f8d",
      confirmButtonText: "Ok",
      closeOnConfirm: true
    },
    function(isConfirm){

      tabla.ajax.reload();
      $('#modalProducto').modal('hide');
  });

    }else{

      swal({
          type:"error",
          title: responseJson.detalle,
          showConfirmButton: true,
          confirmButtonText: "Cerrar"
        
      })
    }

  })

})

/*========================================
=            Eliminar Producto            =
========================================*/
$(".tablaPdoductos").on("click", ".btnEliminarProducto", function(){

  let id = $(this).attr('idProducto');

  swal({
    title: '¿Esta seguro de eliminar este poroducto?',
    text: '¡Si no lo está, puede cancelar la acción!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, borrar producto!'
  },function(isConfirm){

    fetch('http://apirest-tienda.evertec/borrar_producto/'+id, {
     method: 'DELETE',
    }).then((response) => response.json())
    .then((responseJson) => {

      if (responseJson.status == 200) {

        swal({
        title: "",
        text: responseJson.detalle,
        type: "success",
        showCancelButton: false,
        confirmButtonColor: "#318f8d",
        confirmButtonText: "Ok",
        closeOnConfirm: true
      },
      function(isConfirm){

        tabla.ajax.reload();
        $('#modalProducto').modal('hide');
    });

      }else{

        swal({
            type:"error",
            title: responseJson.detalle,
            showConfirmButton: true,
            confirmButtonText: "Cerrar"
          
        })
      }

    })

  })
  
})