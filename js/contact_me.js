
//------------------------------------------------------------------------------------
$(function() {
	
	var controlcampos=true;
	
	var validaremail= false;
	
	//funcion validar email
		function validar_email(valor)
	{
		// creamos nuestra regla con expresiones regulares.
		var filter = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
		// utilizamos test para comprobar si el parametro valor cumple la regla
		if(filter.test(valor))
			return true;
		else
			return false;
	}
	
	//fin de funcion validar email
	
$('#email').keyup(function() {	
	
	if($("#email").val() == '')
		{
			//alert("Ingrese un email");
			
			 validaremail= false;
			 $('.danger').text("Ingrese un email");
			
			
		}else if(validar_email($("#email").val()))
		{
				validaremail= true;
            $('.danger').text("");
			//alert("Email valido");
		}else
		
		{
			
			 validaremail= false;
			 $('.danger').text("correo no valido");
			//alert("El email no es valido");
		}
		
		
	
		
});
	
	
	
	
	
	







$('#name').focus(function() {
    $('#success').html('');
});


  /* $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
*/
$('#enviar').click(function() {
	
	
	
                event.preventDefault();
	
	
	   
			//alert(validaremail);
	
	
            var name = $("input#name").val();
            var email = $("input#email").val();
            //var phone = $("input#phone").val();
            var message = $("textarea#message").val();
          
     
     if (name==null){
		 controlcampos=false;
		 
		 }else{
			 
			 
			 controlcampos=true;
			 
			 };
        if (message==null){
		 controlcampos=false;
		 
		 }else{
			 
			 
			 controlcampos=true;
			 
			 };



if (validaremail&&controlcampos){
        $.ajax({
				
				url: "http://appdesarrollo.es/mail/contact_me.php",
                //url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    //phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
				
				
                success: function() {
                    // Success message
                    $('#success').html("<div class='success'>");
                    $('#success > .success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
						
						
                    $('#success > .success')
                        .append("<strong>Tu mensaje ha sido enviado. </strong>");
						
						
                    $('#success > .success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
				
				
				
				
				
				
				
                error: function() {
                    // Fail message
                    $('#success').html("<div class='danger'>");
					
                    $('#success > .danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
					
					
                        .append("</button>");
						
						
                    $('#success > .danger').append("<strong>Lo sentimos,  parece que mi servidor de correo no está respondiendo. Por favor, inténtelo de nuevo más tarde!</strong>");
					
                    $('#success > .danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            });



}else{
	
	
	//alert("Por favor, compruebe el Email y/o relleno todos los campos.");
	
	 $('#success').html("<div class='danger'>");
	 
                    $('#success > .danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .danger').append("<strong>Por favor, compruebe el Email y/o que todos los campos esten rellenos</strong>");
                    $('#success > .danger').append('</div>');
	
	
	
	
	};


});//Fin de click



});//fin de la funcion principal