<div class="container-fluid productos">

  <div class="container">

    <!-- Main content -->
    <section class="content">

      <div class="container-fluid">

        <div class="row" style="margin-bottom: -15px !important;">

          <div class="col-12">

            <!-- Default box -->
            <div class="card card-info card-outline">

              <div class="card-header">

                <button class="btn btn-primary btn-sm btnAbrirCrear" data-toggle="modal" data-target="#modalProducto">Crear nuevo producto</button>

              </div>

              <div class="page-header">

                <table class="tablas table table-bordered table-striped tablaPdoductos" width="100%">
                  
                  <thead>

                      <tr>
                        <th style="width: 10px">#</th>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th style="width: 100px">Acciones</th>
                      </tr>

                  </thead>

                  <tbody>

                  </tbody>

                </table>

              </div>

              <!-- /.card-body -->
              <div class="card-footer">

              </div>

              <!-- /.card-footer-->
            </div>

            <!-- /.card -->
          </div>

        </div>

      </div>

    </section>

  </div>
  <!-- /.content -->
</div>

<!--=====================================
MODAL AGREGAR EMPRESA
======================================-->

<div id="modalProducto" class="modal fade" role="dialog">
  
  <div class="modal-dialog">

    <div class="modal-content">

      <form role="form" method="post" enctype="multipart/form-data">

        <!--=====================================
        CABEZA DEL MODAL
        ======================================-->

        <div class="modal-header" style="background:#3c8dbc; color:white">

          <button type="button" class="close" data-dismiss="modal">&times;</button>

          <h4 class="modal-title">Agregar producto</h4>

        </div>

        <!--=====================================
        CUERPO DEL MODAL
        ======================================-->

        <div class="modal-body">

          <div class="box-body">

            <!-- ENTRADA PARA EL NOMBRE -->
            
            <div class="form-group">
              
              <div class="input-group">
              
                <span class="input-group-addon"><i class="fa fa-th"></i></span> 

                <input type="text" class="form-control input" name="nombreProducto" id="nombreProducto" placeholder="Ingresar nombre del producto" required>

              </div>

            </div>

              <!-- ENTRADA PARA LA DESCRIPCION -->

             <div class="form-group row">

              <div class="col-xs-12">
              
                <div class="input-group">
                
                  <textarea class="textarea" name="descripcionProducto" id="descripcionProducto"></textarea>

                </div>

              </div>

            </div>

           <!-- ENTRADA PARA EL PRECIO -->

             <div class="form-group">
              
              <div class="input-group">
              
                <span class="input-group-addon"><i class="fa fa-usd"></i></span> 

                <input type="number" class="form-control input" name="precioProducto" id="precioProducto" placeholder="Precio Producto" required>

              </div>

            </div>

            <!-- ENTRADA PARA EL REPRESENTANTE -->

            <div class="form-group row">

              <div class="col-xs-12">
                
                <div class="input-group">
                
                  <span class="input-group-addon"><i class="fa fa-photo"></i></span> 

                    <input type="text" class="form-control input" name="imagenProducto" id="imagenProducto" placeholder="Ingresar link de imagen" required>
                    <input type="hidden" name="idProducto" id="idProducto" required>

                </div>

              </div>

            </div>

        </div>

      </div>

        <!--=====================================
        PIE DEL MODAL
        ======================================-->

        <div class="modal-footer">

          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Salir</button>

          <button type="button" class="btn btn-primary btnGuardarProducto pull-right">Guardar Producto</button>
          <button type="button" class="btn btn-success btnEditarProducto pull-right" style="display: none">Guardar Cambios</button>

        </div>

      </form>

    </div>

  </div>

</div>