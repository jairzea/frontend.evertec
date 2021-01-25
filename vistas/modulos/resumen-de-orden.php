<?php  

print_r($_GET);

?>

<!--=========================
INFORMACION DEL CLIENTE
==========================-->

<div class="container-fluid well well-sm">

	<div class="container">

		<div class="row">

			<ul class="breadcrumb text-uppercase">

				<p>Hola <strong>Jair Zea</strong>, gracias por confiar en nostros, acontinuación te presentamos un resumen de tu orden:.</p>
				<p>Correo electronico: <strong>jairzeapaez@gmail.com</strong></p>
				<p>Telefono: <strong>3217098185</strong></p>
				
			</ul>
			
		</div>
		
	</div>
	
</div>

<!--=========================
TABLA RESUMEN DE ORDEN
==========================-->
<div class="container-fluid">

	<div class="container">

		<div class="panel panel-default">
			
			<!--=========================
			cabecera orden
			==========================-->

			<div class="panel-heading cabeceraOrden">

				<div class="col-md-6 col-sm-7 col-xs-12 text-center">

					<h3>

						<small>PRODUCTO</small>
					
					</h3>
					
				</div>

				<div class="col-md-2 col-sm-1 col-xs-12 text-center">

					<h3>

						<small>PRECIO</small>
					
					</h3>
					
				</div>

				<div class="col-sm-2 col-xs-0 text-center">

					<h3>

						<small>CANTIDAD</small>
					
					</h3>
					
				</div>

				<div class="col-sm-2 col-xs-0 text-center">

					<h3>

						<small>SUBTOTAL</small>
					
					</h3>
					
				</div>
				
			</div>

			<!--=========================
			cuerpo carrito
			==========================-->

			<div class="panel-body cuerpoOrden">
				
				<div class="row itemResumen">

					<!--========================-->

					<div class="col-sm-1 col-xs-12">

						<br>

						<center>
							 
							 <button class="btn btn-default backColor">
							 	
							 	<i class="fa fa-times"></i>

							 </button>

						</center>
						
					</div>

					<!--========================-->

					<div class="col-sm-1 col-xs-12">

						<figure>
							
							<img src="vistas/img/productos/accesorios/accesorio04.jpg" alt="accesorio_04" class="img-thumbnail">

						</figure>

					</div>

					<!--========================-->

					<div class="col-sm-4 col-xs-12">

						<br>
							
						<p class="tituloResumenOrden text-left">Collar de diamantes</p>
						<p class="descripcionResumenOrden text-left">Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Nemo delectus nihil quaerat cupiditate. Impedit minima exercitationem laudantium quos rerum, quod quas aliquid blanditiis omnis modi, molestias consequuntur placeat dicta, aspernatur.</p>

					</div>

					<!--========================-->

					<div class="col-md-2 col-sm-1 col-xs-12">

						<br>
							
						<p class="precioResumen text-center">COP $<span>100</span></p>

					</div>

					<!--========================-->

					<div class="col-md-2 col-sm-3 col-xs-8">

						<br>
								 
						<div class="col-xs-8">

							<center>
						 	
						 		<input type="number" class="form-control text-center" min="1" max="1" value="1" readonly>

						 	</center>

						</div>

					</div>

					<!--========================-->

					<div class="col-md-2 col-sm-1 col-xs-4 text-center">

						<br>

						<p>
							
							<strong>COP $<span>100</span></strong>
						</p>
						
					</div>
					
				</div>

				<div class="clearfix"></div>

				<hr>

				<!--=========================
				SUMA TOTAL
				==========================-->

				<div class="panel-body sumaOrden">

					<div class="col-md-4 col-sm-6 col-xs-12 pull-right well">

						<div class="col-xs-6 text-center">

							<h4>TOTAL:</h4>
							
						</div>

						<div class="col-xs-6">

							<h4 class="sumaSubTotal text-right">
								
								<strong>COP $<span>100</span></strong>

							</h4>
							
						</div>

					</div>

				</div>

			</div>

			<!--=========================
				BOTON CHECKOUT
				==========================-->

				<div class="panel-heading cabeceraCheckout">

					<button class="btn btn-default backColor btn-lg pull-right">REALIZAR PAGO</button>
					
				</div>

		</div>

	</div>

</div>

