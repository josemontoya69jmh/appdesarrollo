/*$(window).load(function() {

});
*/



$( document ).ready(function() {
	
	    $('.flexslider').flexslider({
        animation: "slide"
        /*controlNav: "thumbnails"*/
		 /*controlsContainer: '.flex-container'*/
    });
	
	
	
	
	
	
	
	
	
	$( ".page-scroll" ).on( "click", function() {
  var pulsado= $(this).text();

  
});
	
	
	//animacion de los titulos
	//a estos previamente hay que ponerles la classe none
	
	
	
		 $(window).scroll(function(){
			                            //Poner las animaciones a cero cuando sube
								    		
										 
											if($(window).scrollTop()==0){
												
															<!--servicios	-->		
											 $('h2.nadaservicios').removeClass('animated bounceInLeft')							
									      $('h2.nadaservicios').addClass("none"); 
                                         
										   $('hr.nadaservicios').removeClass('animated rollIn"')
										  $('hr.nadaservicios').addClass("none");
										  
								
                                          
										  
                                        <!-- equipo-->
										 
										  $('h2.nadaequipo').removeClass('animated zoomInDown')
										 $('h2.nadaequipo').addClass("none"); 
                                          
										  $('hr.nadaequipo').removeClass('animated zoomInDown')
										  $('hr.nadaequipo').addClass("none");
										 
                                          
										  
										 
										  
										<!--  cotacto-->
										  
                                          
									     $('h2.nadacontacto').removeClass('animated bounceInRight')
										 $('h2.nadacontacto').addClass("none"); 
                                          
										  $('hr.nadacontacto').removeClass('animated zoomInDown')
										  $('hr.nadacontacto').addClass("none")
									
									
									
									
										   
										 }  
    							 	   //Fin de pòneracero cuando sube
									   
									    //animate tituloservicios
									   
									    var tituloservicios=($(document).height() - $(window).height());
										
										
										
										
										
    							 		if($(window).scrollTop()>tituloservicios*0.10){

    							 			
									      $('h2.nadaservicios').addClass("animated bounceInLeft"); 
                                          $('h2.nadaservicios').removeClass('none')
										  
										  $('hr.nadaservicios').addClass("animated rollIn"); 
                                          $('hr.nadaservicios').removeClass('none')
										  
										
										 
										   
										 }  
										 
										 
										 
										 
										 //fin de animate tituloserviciosservicios
										   
										   

    							 			  //animate tituloequipo
									   
									    var tituloequipo=($(document).height() - $(window).height());
										
										
										
										
										
    							 		if($(window).scrollTop()>tituloequipo*0.30){
											
    							 			
									      $('h2.nadaequipo').addClass("animated zoomInDown"); 
                                          $('h2.nadaequipo').removeClass('none')
										  
										  $('hr.nadaequipo').addClass("animated zoomInDown"); 
                                          $('hr.nadaequipo').removeClass('none')
										  
									
										
										 }  
										 
										 
										 
										 
										 //fin de animate tituloequipo
											
											
											
												  //animate titulocontacto
									   
									    var titulocontacto=($(document).height() - $(window).height());
										
										
										
										
										
    							 		if($(window).scrollTop()>titulocontacto*0.60){
											
    							 			
									      $('h2.nadacontacto').addClass("animated bounceInRight"); 
                                          $('h2.nadacontacto').removeClass('none')
										  
										  $('hr.nadacontacto').addClass("animated zoomInDown"); 
                                          $('hr.nadacontacto').removeClass('none')
										  
									
										   
										 }  
										 
										 
										 
										 
										 //fin de animate titulocontacto
											
											
											
											
											
											
											
											
											
											
							    
								});//fin de scrooll
								
	
	
	
	
	
	
	

});