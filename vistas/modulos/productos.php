<div class="container-fluid productos">

	<div class="container">

		<div class="row">

			<!--===================================
			BARRA TITULO
			====================================-->

			<div class="col-xs-12 tituloDestacado">

				<!--=========================-->

				<div class="col-sm-6 col-xs-12">

					<h1><small>PRODUCTOS DESTACADOS</small></h1>

				</div>

				<!--=========================-->

				<div class="col-sm-6 col-xs-12">

					<a href="productos">

						<button class="btn btn-default backColor pull-right">

							VER MÁS <span class="fa fa-chevron-right"></span>

						</button>

					</a>
					
				</div>

				<!--=========================-->

			</div>

			<div class="clearfix"></div>

			<hr>

		</div>

		<!--===================================
		VITRINA DE PRODUCTOS EN CUADRICULA
		====================================-->

		<ul id="grid" class="grillaProductos">


		</ul>

		<!--===================================
		VITRINA DE PRODUCTOS EN LISTA
		====================================-->

		<ul id="list" style="display: none;" class="listaProductos">
		

		</ul>
		
	</div>
	
</div>


<!--===================================
MODAL PARA LLENAR ORDEN DE PRODUCTO
====================================-->
<div id="modalOrden" class="modal fade modalFormulario" role="dialog">

  <div class=" modal-content modal-dialog">
  
	  <div class="modal-body modalTitulo">
	  
	    <h3 class="backColor">Registrar Orden</h3>

	    <button type="button" class="close" data-dismiss="modal">&times;</button>
	  
	  </div>

	   <!--===================================
		INFORMACIÓN DEL PRODUCTO
	   ====================================-->

	  <div class="modal-body infoProducto text-center bg-info">

	  	<div class="row">

	  		<div class="col-xs-6">
	  			
	  			<h3>

	  				<small class="text-uppercase">Nombre del Producto</small>
	  			
	  			</h3>

	  		</div>

	  		<div class="col-xs-6 nombreProducto">
	  			
	  			<h3>

	  				<small class="text-uppercase"></small>
	  			
	  			</h3>

	  		</div>
	  		
	  	</div>

	  	<div class="row">

	  		<div class="col-xs-6">
	  			
	  			<h3>

	  				<small class="text-uppercase">Precio del Producto</small>
	  			
	  			</h3>

	  		</div>

	  		<div class="col-xs-6 precioProducto">
	  			
	  			<h3>

	  				<small class="text-uppercase"></small>
	  			
	  			</h3>

	  		</div>
	  		
	  	</div>
	  	  
	  </div>

	  <!--===================================
		REGISTRO FORMULARIO
	  ====================================-->

	  <form method="post" onsubmit="return registroOrden()">
	  	
	  	<hr>

	  	<!-- Email -->

	  	<div class="form-group">

	  		<div class="input-group">
	  			
	  			<span class="input-group-addon">
	  				
	  				<i class="glyphicon glyphicon-envelope"></i>

	  			</span>

	  			<input type="email" class="form-control" name="regEmail" id="regEmail" placeholder="Correo electronico" required>
	  			<input type="hidden" class="form-control" name="id_producto" id="id_producto" required>

	  		</div>

	  	</div>

	  	<!-- Nombre -->

	  	<div class="form-group">

	  		<div class="input-group">
	  			
	  			<span class="input-group-addon">
	  				
	  				<i class="glyphicon glyphicon-user"></i>

	  			</span>

	  			<input type="text" class="form-control text-uppercase" name="regNombre" id="regNombre" placeholder="Nombre completo" required>

	  		</div>

	  	</div>

	  	<!-- Telefono -->

	  	<div class="form-group">

	  		<div class="input-group">
	  			
	  			<span class="input-group-addon">
	  				
	  				<i class="glyphicon glyphicon-phone"></i>

	  			</span>

	  			<input type="number" class="form-control" name="regTelefono" id="regTelefono" placeholder="Telefono" required>

	  		</div>
	  		
	  	</div>

	  	<input type="button" class="btn btn-default backColor btn-block text-uppercase btnRegistrarOrden" value="Registrar y ver resumen de la orden">

	  </form>
	  
	  <!--===================================
		PIE DE PAGINA MODAL
	  ====================================-->

	  <div class="modal-footer">

	    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	  
	  </div>

  </div>

</div>

<!--===================================
MODAL PARA CONSULTAR ORDENES
====================================-->
<div id="modalIngreso" class="modal fade modalFormulario" role="dialog">

  <div class=" modal-content modal-dialog">
  
	  <div class="modal-body modalTitulo">
	  
	    <h3 class="backColor">Ingrese su email para consultar ordenes</h3>

	    <button type="button" class="close" data-dismiss="modal">&times;</button>
	  
	  </div>

	  <!--===================================
		REGISTRO FORMULARIO
	  ====================================-->

	  <form method="post">

	  	<!-- Email -->

	  	<div class="form-group">

	  		<div class="input-group">
	  			
	  			<span class="input-group-addon">
	  				
	  				<i class="glyphicon glyphicon-envelope"></i>

	  			</span>

	  			<input type="email" class="form-control" name="emaiConsulta" id="emaiConsulta" placeholder="Correo electronico" required>

	  		</div>

	  	</div>

	  	<input type="button" class="btn btn-default backColor btn-block text-uppercase btnConsultarOrden" value="Consultar ordenes">

	  </form>
	  
	  <!--===================================
		PIE DE PAGINA MODAL
	  ====================================-->

	  <div class="modal-footer">

	    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	  
	  </div>

  </div>

</div>