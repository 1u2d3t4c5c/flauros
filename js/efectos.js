$(document).ready(function() {
  	$('.contenido').hide();

	$('#mostrar-1').on('click', function(){
	 	$('#contenido-1').slideToggle(1000);
	 	$('#mostrar-1').toggleClass('rotar');
	})

	$('#mostrar-2').on('click', function(){
	 	$('#contenido-2').slideToggle(1000);
	 	$('#mostrar-2').toggleClass('rotar');
	})

	$('#mostrar-3').on('click', function(){
	 	$('#contenido-3').slideToggle(1000);
	 	$('#mostrar-3').toggleClass('rotar');
	})

	$('#mostrar-4').on('click', function(){
	 	$('#contenido-4').slideToggle(1000);
	 	$('#mostrar-4').toggleClass('rotar');
	})
});

$(document).ready(function() {
	var acercaDe = $('#acerca-de').offset().top,
    trabajos = $('#trabajos').offset().top,
    servicios = $('#servicios').offset().top,
    contacto = $('#contacto').offset().top

  	$('#btn-acerca-de').on('click', function(e){
   		e.preventDefault();
    	$('html, body').animate({
      	scrollTop: acercaDe
    	}, 500);
  	});

  	$('#btn-trabajos').on('click', function(e){
    	e.preventDefault();
    	$('html, body').animate({
      	scrollTop: trabajos
    	}, 500);
  	});

  	$('#btn-servicios').on('click', function(e){
   		e.preventDefault();
    	$('html, body').animate({
      	scrollTop: servicios
    	}, 500);
  	});

  	$('#btn-contacto').on('click', function(e){
   		e.preventDefault();
    	$('html, body').animate({
      	scrollTop: contacto
    	}, 500);
  	});
});

// CAROUSEL PUCK RUN //

var btn = document.getElementById("1");
    var btn2 = document.getElementById("2");
    var btn3 = document.getElementById("3");
    var foto1 = document.getElementById("foto1");
    var foto2 = document.getElementById("foto2");
    var foto3 = document.getElementById("foto3");

    let temporizador;
    let temporizador2;
    let temporizador3;

    clearTimeout(temporizador2);
    clearTimeout(temporizador3);

    window.onload = function() {
      foto1.style.opacity = '1';
      btn.setAttribute('class','actual');
      temporizador = setTimeout(cambioColor2, 5000);
      foto4.style.opacity = '1';
      btn4.setAttribute('class','actual');
      temporizador4 = setTimeout(cambioColor5, 5000);
      foto7.style.opacity = '1';
      btn7.setAttribute('class','actual');
      temporizador7 = setTimeout(cambioColor8, 5000);
      foto10.style.opacity = '1';
      btn10.setAttribute('class','actual');
      temporizador10 = setTimeout(cambioColor11, 5000);
    }
    function cambioColor() {
      foto1.style.opacity = '1';
      foto2.style.opacity = '0';
      foto3.style.opacity = '0';
      btn.setAttribute('class','actual');
      btn2.removeAttribute('class','actual');
      btn3.removeAttribute('class','actual');
      temporizador = setTimeout(cambioColor2, 5000);;
      clearTimeout(temporizador2);
      clearTimeout(temporizador3);
    }
    function cambioColor2() {
      foto1.style.opacity = '0';
      foto2.style.opacity = '1';
      foto3.style.opacity = '0';
      btn2.setAttribute('class','actual');
      btn.removeAttribute('class','actual');
      btn3.removeAttribute('class','actual');
      temporizador2 = setTimeout(cambioColor3, 5000);
      clearTimeout(temporizador);
      clearTimeout(temporizador3);
    }
    function cambioColor3() {
      foto1.style.opacity = '0';
      foto2.style.opacity = '0';
      foto3.style.opacity = '1';
      btn3.setAttribute('class','actual');
      btn2.removeAttribute('class','actual');
      btn.removeAttribute('class','actual');
      temporizador3 = setTimeout(cambioColor, 5000);;
      clearTimeout(temporizador2);
      clearTimeout(temporizador);
    }
    
    
    btn.addEventListener('click', cambioColor);
    btn2.addEventListener('click', cambioColor2);
    btn3.addEventListener('click', cambioColor3);

// CAROUSEL COMPUTER DEFENSE //

    var btn4 = document.getElementById("4");
    var btn5 = document.getElementById("5");
    var btn6 = document.getElementById("6");
    var foto4 = document.getElementById("foto4");
    var foto5 = document.getElementById("foto5");
    var foto6 = document.getElementById("foto6");

    let temporizador4;
    let temporizador5;
    let temporizador6;

    clearTimeout(temporizador5);
    clearTimeout(temporizador6);

    function cambioColor4() {
      foto4.style.opacity = '1';
      foto5.style.opacity = '0';
      foto6.style.opacity = '0';
      btn4.setAttribute('class','actual');
      btn5.removeAttribute('class','actual');
      btn6.removeAttribute('class','actual');
      temporizador4 = setTimeout(cambioColor5, 5000);;
      clearTimeout(temporizador5);
      clearTimeout(temporizador6);
    }
    function cambioColor5() {
      foto4.style.opacity = '0';
      foto5.style.opacity = '1';
      foto6.style.opacity = '0';
      btn5.setAttribute('class','actual');
      btn4.removeAttribute('class','actual');
      btn6.removeAttribute('class','actual');
      temporizador5 = setTimeout(cambioColor6, 5000);
      clearTimeout(temporizador4);
      clearTimeout(temporizador6);
    }
    function cambioColor6() {
      foto4.style.opacity = '0';
      foto5.style.opacity = '0';
      foto6.style.opacity = '1';
      btn6.setAttribute('class','actual');
      btn5.removeAttribute('class','actual');
      btn4.removeAttribute('class','actual');
      temporizador6 = setTimeout(cambioColor4, 5000);;
      clearTimeout(temporizador5);
      clearTimeout(temporizador4);
    }
    
    
    btn4.addEventListener('click', cambioColor4);
    btn5.addEventListener('click', cambioColor5);
    btn6.addEventListener('click', cambioColor6);

    // CAROUSEL PUCK RUN //

	var btn7 = document.getElementById("7");
    var btn8 = document.getElementById("8");
    var btn9 = document.getElementById("9");
    var foto7 = document.getElementById("foto7");
    var foto8 = document.getElementById("foto8");
    var foto9 = document.getElementById("foto9");

    let temporizador7;
    let temporizador8;
    let temporizador9;

    clearTimeout(temporizador8);
    clearTimeout(temporizador9);

    function cambioColor7() {
      foto7.style.opacity = '1';
      foto8.style.opacity = '0';
      foto9.style.opacity = '0';
      btn7.setAttribute('class','actual');
      btn8.removeAttribute('class','actual');
      btn9.removeAttribute('class','actual');
      temporizador7 = setTimeout(cambioColor8, 5000);;
      clearTimeout(temporizador8);
      clearTimeout(temporizador9);
    }
    function cambioColor8() {
      foto7.style.opacity = '0';
      foto8.style.opacity = '1';
      foto9.style.opacity = '0';
      btn8.setAttribute('class','actual');
      btn7.removeAttribute('class','actual');
      btn9.removeAttribute('class','actual');
      temporizador8 = setTimeout(cambioColor9, 5000);
      clearTimeout(temporizador7);
      clearTimeout(temporizador9);
    }
    function cambioColor9() {
      foto7.style.opacity = '0';
      foto8.style.opacity = '0';
      foto9.style.opacity = '1';
      btn9.setAttribute('class','actual');
      btn8.removeAttribute('class','actual');
      btn7.removeAttribute('class','actual');
      temporizador9 = setTimeout(cambioColor7, 5000);;
      clearTimeout(temporizador8);
      clearTimeout(temporizador7);
    }
    
    
    btn7.addEventListener('click', cambioColor7);
    btn8.addEventListener('click', cambioColor8);
    btn9.addEventListener('click', cambioColor9);

// CAROUSEL COMPUTER DEFENSE //

    var btn10 = document.getElementById("10");
    var btn11 = document.getElementById("11");
    var btn12 = document.getElementById("12");
    var foto10 = document.getElementById("foto10");
    var foto11 = document.getElementById("foto11");
    var foto12 = document.getElementById("foto12");

    let temporizador10;
    let temporizador11;
    let temporizador12;

    clearTimeout(temporizador11);
    clearTimeout(temporizador12);

    function cambioColor10() {
      foto10.style.opacity = '1';
      foto11.style.opacity = '0';
      foto12.style.opacity = '0';
      btn10.setAttribute('class','actual');
      btn11.removeAttribute('class','actual');
      btn12.removeAttribute('class','actual');
      temporizador10 = setTimeout(cambioColor11, 5000);;
      clearTimeout(temporizador11);
      clearTimeout(temporizador12);
    }
    function cambioColor11() {
      foto10.style.opacity = '0';
      foto11.style.opacity = '1';
      foto12.style.opacity = '0';
      btn11.setAttribute('class','actual');
      btn10.removeAttribute('class','actual');
      btn12.removeAttribute('class','actual');
      temporizador11 = setTimeout(cambioColor12, 5000);
      clearTimeout(temporizador10);
      clearTimeout(temporizador12);
    }
    function cambioColor12() {
      foto10.style.opacity = '0';
      foto11.style.opacity = '0';
      foto12.style.opacity = '1';
      btn12.setAttribute('class','actual');
      btn11.removeAttribute('class','actual');
      btn10.removeAttribute('class','actual');
      temporizador12 = setTimeout(cambioColor10, 5000);;
      clearTimeout(temporizador11);
      clearTimeout(temporizador10);
    }
    
    
    btn10.addEventListener('click', cambioColor10);
    btn11.addEventListener('click', cambioColor11);
    btn12.addEventListener('click', cambioColor12);