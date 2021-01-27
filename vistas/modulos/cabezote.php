<?php

$url = Ruta::ctrRuta();

?>

<!--=====================================
TOP
======================================-->

<div class="container-fluid barraSuperior" id="top">
	
	<div class="container">
		
		<div class="row">
	
			<!--=====================================
			SOCIAL
			======================================-->

			<div class="col-lg-9 col-md-9 col-sm-8 col-xs-12 social">
				
				<ul>	

					<li>
						<a href="http://facebook.com/" target="_blank">
							<i class="fa fa-facebook redSocial facebookBlanco" aria-hidden="true"></i>
						</a>
					</li>

					<li>
						<a href="http://youtube.com/" target="_blank">
							<i class="fa fa-youtube redSocial youtubeBlanco" aria-hidden="true"></i>
						</a>
					</li>

					<li>
						<a href="http://twitter.com/" target="_blank">
							<i class="fa fa-twitter redSocial twitterBlanco" aria-hidden="true"></i>
						</a>
					</li>

					<li>
						<a href="http://google.com/" target="_blank">
							<i class="fa fa-google-plus redSocial googleBlanco" aria-hidden="true"></i>
						</a>
					</li>

					<li>
						<a href="http://instagram.com/" target="_blank">
							<i class="fa fa-instagram redSocial instagramBlanco" aria-hidden="true"></i>
						</a>
					</li>

				</ul>

			</div>

			<!--=====================================
			REGISTRO
			======================================-->

			<div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 registro">
				
				<ul>
					
					<li><a href="#modalIngreso" data-toggle="modal">Consultar mis ordenes</a></li>
					<li>|</li>
					<li><a href="<?php echo $url;?>administrador">Administrador</a></li>

				</ul>

			</div>	

		</div>	

	</div>

</div>

<!--=====================================
HEADER
======================================-->

<header class="container-fluid">
	
	<div class="container">
		
		<div class="row" id="cabezote">

			<!--=====================================
			LOGOTIPO
			======================================-->
			
			<div class="col-lg-3 col-md-3 col-sm-2 col-xs-12" id="logotipo">
				
				<a href="<?php echo $url ?>">
						
					<img src="vistas/img/plantilla/evertec-logo.png" class="img-responsive">

				</a>
				
			</div>

			<!--=====================================
			BLOQUE CATEGORÍAS Y BUSCADOR
			======================================-->

			<div class="col-lg-6 col-md-6 col-sm-8 col-xs-12">
					
				<!--=====================================
				BOTÓN CATEGORÍAS
				======================================-->

				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 backColor" id="btnCategorias">
					
					<p>CATEGORÍAS
					
						<span class="pull-right">
							<i class="fa fa-bars" aria-hidden="true"></i>
						</span>
					
					</p>

				</div>

				<!--=====================================
				BUSCADOR
				======================================-->
				
				<div class="input-group col-lg-8 col-md-8 col-sm-8 col-xs-12" id="buscador">
					
					<input type="search" name="buscar" class="form-control" placeholder="Buscar...">	

					<span class="input-group-btn">
						
						<a href="#">

							<button class="btn btn-default backColor" type="submit">
								
								<i class="fa fa-search"></i>

							</button>

						</a>

					</span>

				</div>
			
			</div>

			<!--=====================================
			CARRITO DE COMPRAS
			======================================-->

			<div class="col-lg-3 col-md-3 col-sm-2 col-xs-12" id="carrito">
				
				<a href="<?php echo $url;?>resumen-de-orden">

					<button class="btn btn-default pull-left backColor"> 
						
						<i class="fa fa-shopping-cart" aria-hidden="true"></i>
					
					</button>
				
				</a>	

				<p>TU CESTA <span class="cantidadCesta"></span> <br> COP $ <span class="sumaCesta"></span></p>	

			</div>

		</div>

		<!--=====================================
		CATEGORÍAS
		======================================-->

		<div class="col-xs-12 backColor" id="categorias">
			
			<div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
				
				<h4>
					<a href="#" class="pixelCategorias">Lorem Ipsum</a>
				</h4>
				
				<hr>

				<ul>
					
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
								
				</ul>

			</div>	

			<div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
				
				<h4>
					<a href="#" class="pixelCategorias">Lorem Ipsum</a>
				</h4>
				
				<hr>

				<ul>
					
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
								
				</ul>

			</div>	

			<div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
				
				<h4>
					<a href="#" class="pixelCategorias">Lorem Ipsum</a>
				</h4>
				
				<hr>

				<ul>
					
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
								
				</ul>

			</div>	

			<div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
				
				<h4>
					<a href="#" class="pixelCategorias">Lorem Ipsum</a>
				</h4>
				
				<hr>

				<ul>
					
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
								
				</ul>

			</div>

			<div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
				
				<h4>
					<a href="#" class="pixelCategorias">Lorem Ipsum</a>
				</h4>
				
				<hr>

				<ul>
					
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
								
				</ul>

			</div>	

			<div class="col-lg-2 col-md-3 col-sm-4 col-xs-12">
				
				<h4>
					<a href="#" class="pixelCategorias">Lorem Ipsum</a>
				</h4>
				
				<hr>

				<ul>
					
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
					<li><a href="#" class="pixelSubCategorias">Lorem Ipsum</a></li>
								
				</ul>

			</div>		

		</div>

	</div>

</header>

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