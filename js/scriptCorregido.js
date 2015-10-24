/*function sincronizar(){
    var imgn = $('#myCarousel');
    
    var posicion = imgn.position(); //¿Offset?
   // alert(imgn.attr('id'));
    posicion.left=posicion.left+(imgn.width()/2);
    posicion.top=posicion.top+(imgn.height()/2);
    var boton = $('.playPortada *');
 //   alert(boton.attr('id'));
    boton.css({visibility:'hidden'})
    boton.css({top: posicion.top, left: posicion.left, position:'absolute', visibility:'visible'});
    var trabajos = $('.trabajos');
    var equipo = $('.equipo');
    var contacto = $('.contacto');
    var blog = $('.blog');
    trabajos.css({visibility:'visible'});
    equipo.css({visibility:'visible'});
    contacto.css({visibility:'visible'});
    blog.css({visibility:'visible'});
    return;
} */

function ocultarBoton(){
    var boton = $('.playPortada *');
 //   alert(boton.attr('id'));
    boton.css({visibility:'hidden'});   
}

function verSlider(){
        var activar = $(this).attr('id');
        var ventanaNueva = $('.'+activar);
    
        if (!(ventanaNueva.hasClass('activo'))){
           $('.activo').hide(200).removeClass('activo');
            ventanaNueva.show(200).addClass('activo');
            
         // Apaño para sincronizar boton al volver a acceder a slider-main
                
            var boton = $('.playPortada *');
 //         alert(boton.attr('id'));
            boton.css({visibility:'hidden'})
        }
    
        if (ventanaNueva.hasClass('slider-main')){
            
            setTimeout(sincronizar, 200);
            
        }
        return;
        
}



function imgShow(e){
    var imagen = $(this).find('img');
    var altura = imagen.position();
    altura.left=altura.left+(imagen.width()/2);
    altura.top=altura.top+(imagen.height()/2);
    var boton =  imagen.siblings('.botonPlay');
 //   boton.css("visibility", "visible", "color", "white", "left", "500px");
    boton.css({color: 'white', visibility: 'visible', left: altura.left , top: altura.top})
//  imagen.after("<a class='botonPlay glyphicon glyphicon-play-circle' href='"+link+"' style='color:white; left:"+altura.left+"px; top:"+altura.top+"px; position:absolute;'></a>");
    
//    imagen.after("<a class='botonPlay glyphicon glyphicon-play-circle' style='left:"+altura.left+"px; top:"+altura.top+"px; position:absolute; visibility:'visible''></a>");
      
    imagen.fadeTo( "fast", 0.75 );
    e.stopPropagation;   
    return;
}


function imgHide(e) {
    var imagen = $(this).find('img');
    imagen.fadeTo( "fast", 1 ); 
    $('.botonPlay').css("visibility", "hidden");
    e.stopPropagation();
    return;
}

/*function validate(){
    var imgn = $('.carousel-inner img').first();
    var posicion = imgn.position(); //¿Offset?
  //  alert(imgn.attr('id'));
    posicion.left=posicion.left+(imgn.width()/2);
    posicion.top=posicion.top+(imgn.height()/2);
    var boton = $('.playPortada *');
 //   alert(boton.attr('id'));
    boton.css({top: posicion.top, left: posicion.left, position:'absolute'});
    return;
} */

function sincronizar(){
    var imgn = $('#myCarousel');
    
    var posicion = imgn.position(); //¿Offset?
   // alert(imgn.attr('id'));
    posicion.left=posicion.left+(imgn.width()/2);
    posicion.top=posicion.top+(imgn.height()/2);
    var boton = $('.playPortada *');
 //   alert(boton.attr('id'));
    boton.css({top: posicion.top, left: posicion.left, position:'absolute', visibility:'visible'});
    var trabajos = $('.trabajos');
    var equipo = $('.equipo');
    var contacto = $('.contacto');
    var blog = $('.blog');
    trabajos.css({visibility:'visible'});
    equipo.css({visibility:'visible'});
    contacto.css({visibility:'visible'});
    blog.css({visibility:'visible'});
    return;
}



/* function enseniarTrabajos (){
    
    var botonTrabajos = $(this);
    if (!(botonTrabajos.hasClass('seleccionado')))
        {
        var botonAnterior = $('.seleccionado');
        botonAnterior.removeClass('seleccionado');
        var activarTrabajo = botonTrabajos.attr('class');
        var trabajosMostrar = $('#'+botonTrabajos.attr('class'));
        var rowVisible = $('.trabajosVisible');
        rowVisible.removeClass('trabajosVisible');
        trabajosMostrar.addClass('trabajosVisible');
        botonTrabajos.addClass('seleccionado');
        }
     return;  
} */


 function enseniarTrabajos (){
    
    var botonTrabajos = $(this);
    if (!(botonTrabajos.hasClass('seleccionado')))
        {
        var botonAnterior = $('.seleccionado');
        botonAnterior.removeClass('seleccionado');
        var activarTrabajo = botonTrabajos.attr('class');
        var trabajosMostrar = $('#'+botonTrabajos.attr('class'));
        var rowVisible = $('.trabajosVisible');
        rowVisible.removeClass('trabajosVisible');
        rowVisible.slideUp("slow").hide(500);
        trabajosMostrar.addClass('trabajosVisible');
        botonTrabajos.addClass('seleccionado');
        trabajosMostrar.show(500);
        }
     return;  
} 

function posicionBotones (){       
    var controles = $('.controlBotones');
    var trabajos = $('.trabajos');
    var posicion = $('.trabajos').position();
    controles.css({top: posicion.top+trabajos.height()-controles.height()})
    return;
}

function validarMail (){
    var formulario = $(this);
    if (formulario.val()==""){
        formulario.addClass('error');
    } else {
        formulario.removeClass('error');
    }
    
    if (formulario.value!=""){
        var dato = formulario.val();
        var expresion = /^([a-zA-Z0-9_.-])+@(([a-zA-z0-9-])+.)+([a-zA-Z0-9-]{2,4})+$/;
        if (!expresion.test(dato)) {
            formulario.addClass('error');
        } else {
            formulario.removeClass('error');
        }
    }
}

function validar(){
    var emailContacto = $('#emailContacto');
    var textoContacto = $('#textoContacto');
    if(emailContacto.val()=="") { //Si este campo está vacío
    alert('No has escrito tu e-Mail'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }

  if(textoContacto.val()=="") { //Si este campo está vacío
    alert('¡No has escrito nada!'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
    alert('hitler');
    return true; // Si esta todo bien, devolvemos Ok, positivo
}

function escalarFotoEquipo(){
    var jarenauer = $('.imagenEquipo');
    var fotoGrande = $('.fotoBase');
    jarenauer.height(fotoGrande.height());
    return;
}

function activarFoto (){
    
    var fotoClick = $(this);
    var espacioClick = $('.clicable');
    espacioClick.hide();
    $(".zonaHover").each(function() {
    $(this).removeClass("zonaHover");
    });
    
    if (fotoClick.hasClass('fotoSarro')){
        var fotoGrande = $('.fotoBase');
        fotoGrande.fadeTo(500, 0.2);
        var imagenPinchada = $('.imgEquipo');
        imagenPinchada.attr("src","Fotos/sarroDifusa.png");
        imagenPinchada.show(500, function(){;
        $('.equipoAtras').show();
        $('.textoClick').show()});
        return;
    }
    else if (fotoClick.hasClass('fotoHugo')){
        var fotoGrande = $('.fotoBase');
        fotoGrande.fadeTo(500, 0.2);
        var imagenPinchada = $('.imgEquipo');
        imagenPinchada.attr("src","Fotos/hugoDifusa.png");
        imagenPinchada.show(500, function(){;
        $('.equipoAtras').show()});
        return;
    }   
    else if (fotoClick.hasClass('fotoDani')){
        var fotoGrande = $('.fotoBase');
        fotoGrande.fadeTo(500, 0.2);
        var imagenPinchada = $('.imgEquipo');
        imagenPinchada.attr("src","Fotos/daniDifusa.png");
        imagenPinchada.show(500, function(){;
        $('.equipoAtras').show()});
        return;
    }
    
    return;
}

function deshacerEquipo(){
    
    var imagenEquipo = $('.imgEquipo');
    imagenEquipo.removeAttr("src");
    imagenEquipo.hide(500);
    $('.equipoAtras').hide();
    var fotoGrande = $('.fotoBase');
    fotoGrande.fadeTo(500, 1);
    var espacioClick = $('.clicable');
    espacioClick.show();
    $('.imagenEquipo div').each(function() {
    $(this).addClass("zonaHover");
    $('.textoClick').hide()
    });
    
}


$(document).ready(function() {
	$('.interactivo').hide();
    $('.activo').show();
    $('.trabajosRow').hide();
    $('.trabajosVisible').show();
  //  setTimeout(sincronizar, 200);
    setTimeout(posicionBotones, 300);
    $('#slider-main').click(verSlider);
    $('.navegacion a').click(verSlider);
    $('.numeroCirculo *').click(enseniarTrabajos);
    $('#emailContacto').blur(validarMail);
    $('#formContacto').submit(validar);
 /*   $('#equipo').click(function() {
            setTimeout(peter, 400);
                       }); */
    
    $('#equipo').one("click", function() {
        var fotoGrande = $('.fotoBase');
        fotoGrande.fadeTo(1000, 1);
        setTimeout(escalarFotoEquipo, 250);
        return;
    });
    $('.imagenEquipo a').click(activarFoto);
    $('.equipoAtras').click(deshacerEquipo);
    $('.trabajos .col-sm-3').mouseenter(imgShow);
    $('.trabajos .col-sm-3').mouseleave(imgHide);
    
    

    
    
    
    
    
    // BOOTSTRAP 3.0 - Open YouTube Video Dynamicaly in Modal Window
    // Modal Window for dynamically opening videos
$('a[href^="http://www.youtube.com"]').on('click', function(e){
  // Store the query string variables and values
	// Uses "jQuery Query Parser" plugin, to allow for various URL formats (could have extra parameters)
	var queryString = $(this).attr('href').slice( $(this).attr('href').indexOf('?') + 1);
	var queryVars = $.parseQuery( queryString );
 
	// if GET variable "v" exists. This is the Youtube Video ID
	if ( 'v' in queryVars )
	{
		// Prevent opening of external page
		e.preventDefault();
 
		// Variables for iFrame code. Width and height from data attributes, else use default.
	/* Antigua versión
        var vidWidth = 560; // default
		var vidHeight = 315; // default
        
    */
    /*  Nueva versión   */
        // Calculate default iFrame embed size based on current window size
// (these will only be used if data attributes are not specified)
        if ($(window).height() < $(window).width()) {
            var vidHeight = $(window).height() * 0.7;
            var vidWidth = vidHeight * 1.77777;
        } else {
            var vidWidth = $(window).width() * 0.9;
            var vidHeight = vidWidth / 1.77777;
        }
    /*  Hasta aquí      */
		if ( $(this).attr('data-width') ) { vidWidth = parseInt($(this).attr('data-width')); }
		if ( $(this).attr('data-height') ) { vidHeight =  parseInt($(this).attr('data-height')); }
		var iFrameCode = '<iframe width="' + vidWidth + '" height="'+ vidHeight +'" scrolling="no" allowtransparency="true" allowfullscreen="true" src="http://www.youtube.com/embed/'+  queryVars['v'] +'?rel=0&wmode=transparent&showinfo=0" frameborder="0"></iframe>';
 
		// Replace Modal HTML with iFrame Embed
		$('#mediaModal .modal-body').html(iFrameCode);
		// Set new width of modal window, based on dynamic video content
		$('#mediaModal').on('show.bs.modal', function () {
			// Add video width to left and right padding, to get new width of modal window
			var modalBody = $(this).find('.modal-body');
			var modalDialog = $(this).find('.modal-dialog');
			var newModalWidth = vidWidth + parseInt(modalBody.css("padding-left")) + parseInt(modalBody.css("padding-right"));
			newModalWidth += parseInt(modalDialog.css("padding-left")) + parseInt(modalDialog.css("padding-right"));
			newModalWidth += 'px';
			// Set width of modal (Bootstrap 3.0)
		    $(this).find('.modal-dialog').css('width', newModalWidth);
		});
 
		// Open Modal
		$('#mediaModal').modal();
	}
});
 
// Clear modal contents on close. 
// There was mention of videos that kept playing in the background.
$('#mediaModal').on('hidden.bs.modal', function () {
	$('#mediaModal .modal-body').html('');
});

(function($){var pl=/\+/g,searchStrict=/([^&=]+)=+([^&]*)/g,searchTolerant=/([^&=]+)=?([^&]*)/g,decode=function(s){return decodeURIComponent(s.replace(pl," "));};$.parseQuery=function(query,options){var match,o={},opts=options||{},search=opts.tolerant?searchTolerant:searchStrict;if('?'===query.substring(0,1)){query=query.substring(1);}while(match=search.exec(query)){o[decode(match[1])]=decode(match[2]);}return o;};$.getQuery=function(options){return $.parseQuery(window.location.search,options);};$.fn.parseQuery=function(options){return $.parseQuery($(this).serialize(),options);};}(jQuery));




    
    
});



$(window).resize(function() {
    
    // cuadrar parte interactiva equipo
    var jarenauer = $('.imagenEquipo');
    var fotoGrande = $('.fotoBase');
    jarenauer.height(fotoGrande.height());
    
    //
    
    var imgn = $('#myCarousel').first();
    var posicion = imgn.position(); //¿Offset?
  //  alert(imgn.attr('id'));
    posicion.left=posicion.left+(imgn.width()/2);
    posicion.top=posicion.top+(imgn.height()/2);
    var boton = $('.playPortada *');
  //  alert(boton.attr('id'));
 //   boton.css({fontSize:'55px'});
    boton.css({top: posicion.top, left: posicion.left, position:'absolute'});
    return;
});