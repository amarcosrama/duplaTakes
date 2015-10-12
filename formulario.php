 <?php

 if(!empty($_POST['grupoCuerpo']) AND !empty($_POST['grupoMail'])){

// $to ="duplatakes@gmail.com";
$headers = "Content-Type: text/html; charset=iso-8859-1\n"; 
$headers .= "From:".$_POST['grupoMail']."\r\n";			
$tema="Contacto desde el Sitio Web";
$mensaje="
<table border='0' cellspacing='2' cellpadding='2'>
  <tr>
    <td align='center' bgcolor='#FFFFCC'><strong>E-mail:</strong></td>
    <td align='left'>$_POST[grupoMail]</td>
  </tr>
  <tr>
    <td align='center' bgcolor='#FFFFCC'><strong>Comentario:</strong></td>
    <td align='left'>$_POST[grupoCuerpo]</td>
  </tr>
</table>
";
@mail($to,$tema,$mensaje,$headers); 
     echo "Su mensaje ha sido enviado.<br /><a href='duplaTakes.html'>Volver</a>";
} else {
	echo "No se puede enviar el formulario, verifica los campos";
}
?>
