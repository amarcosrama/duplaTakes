// Aparición y desaparición del control trabajos

function controlTrabajos(){
    var controlLateral = $('.controlLateral');
    controlLateral.slideToggle('medium');
    return;
}

// Control de pestañas

function verSlider(){
    var activar = $(this).attr('id');
    var ventanaNueva = $('.'+activar);
    
    //No es la ventana activa actualmente? ->
    if (!(ventanaNueva.hasClass('activo')))  
    {
        var ventanaAnteriorActiva = $('.activo');
    
        // Excepción para plegar control trabajos
        if (ventanaAnteriorActiva.hasClass('trabajos')){    
            controlTrabajos();  
        }
        $('.activo').hide().removeClass('activo');
        ventanaNueva.show().addClass('activo');
        
        // Excepción para desplegar control trabajos
        if (ventanaNueva.hasClass('trabajos')){
            controlTrabajos();   
        }
    }
    return;        
}


// Aparición del botón play en cada imagen de "trabajos"

function imgShow(e){
    var imagen = $(this).find('img');
    var altura = imagen.position();
    altura.left=altura.left+(imagen.width()/2);
    altura.top=altura.top+(imagen.height()/2);
    var boton =  imagen.siblings('.botonPlay');
    boton.css({color: 'white', visibility: 'visible', left: altura.left , top: altura.top})
    imagen.fadeTo( "fast", 0.75 );
    e.stopPropagation;   
    return;
}


// Desparición del botón play en cada imagen de "trabajos"

function imgHide(e) {
    var imagen = $(this).find('img');
    imagen.fadeTo( "fast", 1 ); 
    $('.botonPlay').css("visibility", "hidden");
    e.stopPropagation();
    return;
}

// Transición entre páginas de trabajo

function transicionTrabajos(){
    var paginasDeTrabajos = 2;   // Limita el número de páginas en la pestaña trabajos
    
    var botonPulsado = $(this).attr('id');
    var valorIndice = $('indice').html();
    if (botonPulsado=="trabajosIzda"){
        if (valorIndice<=1) return;
        else{ 
            valorIndice--;
            $('indice').html(valorIndice);
            var paginaParaActivar = $('#trabajos'+valorIndice);
            var paginaParaDesactivar = $('.trabajosVisible');
            paginaParaDesactivar.removeClass('trabajosVisible');
            paginaParaDesactivar.fadeOut(200, function(){
                paginaParaActivar.addClass('trabajosVisible').fadeIn(200);
            }); 
            return; 
        }
    }
    else{
        if (valorIndice>=paginasDeTrabajos) return;
        else{
            valorIndice++;
            $('indice').html(valorIndice);
            var paginaParaActivar = $('#trabajos'+valorIndice);
            var paginaParaDesactivar = $('.trabajosVisible');
            paginaParaDesactivar.removeClass('trabajosVisible');
            paginaParaDesactivar.fadeOut(200, function(){
                paginaParaActivar.addClass('trabajosVisible').fadeIn(200);
            }); 
            return; 
        }
    }
    return;
       
}


// Validar campos pestaña contacto

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
    alert('error');
    return true; // Si esta todo bien, devolvemos Ok, positivo
}

//Validación formulario mail contacto

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

// Escala la zona interactiva 'imagenEquipo' al tamaño de 'fotoBase', la imagen proporcionada de referencia

function escalarFotoEquipo(){
    var jarenauer = $('.imagenEquipo');
    var fotoGrande = $('.fotoBase');
    jarenauer.height(fotoGrande.height());
    return;
}

// Activa los espacios interactivos dentro de la foto en la pestaña 'Equipo'

function activarFoto (){
    
    var fotoClick = $(this);
    var espacioClick = $('.clicable');
    espacioClick.hide();
    $(".zonaHover").each(function() {
    $(this).removeClass("zonaHover");
    });
    
    if (fotoClick.hasClass('fotoSarro')){
        var fotoGrande = $('.fotoBase');
        fotoGrande.fadeTo(300, 0.2);
        var imagenPinchada = $('.imgEquipo');
        imagenPinchada.attr("src","Fotos/sarroDifusa.png");
        imagenPinchada.show(300, function(){;
        $('.equipoAtras').show();
        $('.textoClick').show()});
        return;
    }
    else if (fotoClick.hasClass('fotoHugo')){
        var fotoGrande = $('.fotoBase');
        fotoGrande.fadeTo(300, 0.2);
        var imagenPinchada = $('.imgEquipo');
        imagenPinchada.attr("src","Fotos/hugoDifusa.png");
        imagenPinchada.show(300, function(){;
        $('.equipoAtras').show()});
        return;
    }   
    else if (fotoClick.hasClass('fotoDani')){
        var fotoGrande = $('.fotoBase');
        fotoGrande.fadeTo(300, 0.2);
        var imagenPinchada = $('.imgEquipo');
        imagenPinchada.attr("src","Fotos/daniDifusa.png");
        imagenPinchada.show(300, function(){;
        $('.equipoAtras').show()});
        return;
    }
    
    return;
}

// Desactiva opción elegida en la foto de 'equipo', rollback a estado inicial

function deshacerEquipo(){
    
    var imagenEquipo = $('.imgEquipo');
    imagenEquipo.removeAttr("src");
    imagenEquipo.hide(300);
    $('.equipoAtras').hide();
    var fotoGrande = $('.fotoBase');
    fotoGrande.fadeTo(300, 1);
    var espacioClick = $('.clicable');
    espacioClick.show();
    $('.imagenEquipo div').each(function() {
    $(this).addClass("zonaHover");
    $('.textoClick').hide()
    });
    
}


$(document).ready(function() {
    
    // Sincronizo pestaña inicial a visualizar
	$('.interactivo').hide();
    $('.activo').show();
    
    // Selecciono primera ficha de pestaña trabajos a mostrar por defecto
    $('.trabajosRow').hide();
    $('.trabajosVisible').show();
    
    // Pongo en espera activa las pestañas y el icono de Dupla
    $('#slider-main').click(verSlider);
    $('.navegacion a').click(verSlider);
    
    // Pongo en espera activa el control de paginado de la pestaña trabajos
    $('.controlesTrabajos *').click(transicionTrabajos);
    
    // Espera activa para la validación mail y el envío del formulario
    $('#emailContacto').blur(validarMail);
    $('#formContacto').submit(validar);
 /*   $('#equipo').click(function() {
            setTimeout(peter, 400);
                       }); */
    
    // Difuminado de entrada para la imagen de 'equipo'. Solo primera vez para agilizar navegación
    $('#equipo').one("click", function() {
        var fotoGrande = $('.fotoBase');
        fotoGrande.fadeTo(300, 1);
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

});