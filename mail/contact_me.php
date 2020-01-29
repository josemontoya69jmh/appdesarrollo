<img src="../apple-touch-icon.png" width="57" height="57" />
<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
 
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No se han recibido argumentos¡";
	return false;
   }else{
	
$name = $_POST['name'];
$email_address = $_POST['email'];

$message = $_POST['message'];


 $para='appdesarrollo.es@gmail.com';
  $titulo='Contacto AppDesarrollo';

  $mensaje = '
  
    <html>
<head>

<title>Nuevo contacto</title>
</head>
<body>

  <strong>Nombre:</strong>
  <br/>'
  .$name.'
    <br/>
  <strong>Email:</strong><br/>'
  .$email_address.'<br/>
  <strong>Mensaje:</strong>
  <br/>'
  .$message.'

</body>
</html>';





 $mensaje = str_replace("\n.", "\n..", $mensaje); 
 $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
//dirección del remitente 
$cabeceras .= "From: www.appdesarrollo.es <administracion@appdesarrollo.es>\r\n"; 

mail($para, $titulo, $mensaje, $cabeceras); 



	
// Create the email and send the message
//$to = 'josemontoya69@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
//$email_subject = "Nombre de contacto:  $name";
//$email_body = "Has recibido un mensaje de AppDesarrollo.\n\n"."Estos son los detalles:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
//$headers = "From: noreply@appdesarrollo.es\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
//$headers .= "Reply-To: $email_address";	
//mail($to,$email_subject,$email_body,$headers);



//CORREO PARA EL QUE ENVIA UNA SOLICIGTUD

 $para1=$email_address;
  $titulo1='Contacto AppDesarrollo';

  $mensaje1 = '
  
    <html>
<head>

<title>AppDesarrollo</title>
</head>
<body>

  <strong>Gracias por contactar con nosotros.</strong>
  <br/>'
  .'
    <br/>
  <strong>En breve contactaremos con usted.</strong><br/>'
 .'<br/>
 
  

</body>
</html>';





 $mensaje1 = str_replace("\n.", "\n..", $mensaje); 
 $cabeceras1  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras1 .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
//dirección del remitente 
$cabeceras1 .= "From: www.appdesarrollo.es <appdesarrollo.es@gmail.com>\r\n"; 

mail($para1, $titulo1, $mensaje1, $cabeceras1); 





















return true;	
}










		
?>