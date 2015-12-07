var scrolled = 0;
var svg_performance_position = 0;
var svg_performance_interval = 4000;
var activateSVG = 0;

function colorСhangeMenu() {
	if (scrolled != 0) {
		$('nav').addClass('scrolled');
	} else {
		$('nav').removeClass('scrolled');
	}
}

/* интерактивное резюме - анимация svg */

function CheckSvgPerformancePosition() {
	$('.resume__performance line').attr('class', '');
	$('.resume__performance circle').attr('r', '5');
	$('#dot-shadow-1, #dot-shadow-2, #dot-shadow-3, #dot-shadow-4, #dot-shadow-5').attr('r', '5');
	$('.resume__performance circle').attr('class', '');
	$('.resume__info').removeClass('active');
	if (svg_performance_position == 1) {
		$('.resume__performance #v-line-1').attr('class', 'active');
		//
		$('.resume__performance #dot-1').attr('r', '10');
		$('#dot-shadow-1').attr('r', '15');
		$('.resume__performance #dot-1').attr('class', 'active');
		//
		$('#resume__info-1').addClass('active');
	} else if (svg_performance_position == 2) {
		$('.resume__performance #v-line-1').attr('class', '');
		$('.resume__performance #v-line-2').attr('class', 'active');
		//
		$('.resume__performance #h-line-1').attr('class', 'active');
		//
		$('.resume__performance #dot-2').attr('r', '10');
		$('#dot-shadow-2').attr('r', '15');
		$('.resume__performance #dot-2').attr('class', 'active');
		//
		$('#resume__info-2').addClass('active');
	} else if (svg_performance_position == 3) {
		$('.resume__performance #v-line-1').attr('class', '');
		$('.resume__performance #v-line-2').attr('class', '');
		$('.resume__performance #v-line-3').attr('class', 'active');
		//
		$('.resume__performance #h-line-1').attr('class', 'active');
		$('.resume__performance #h-line-2').attr('class', 'active');
		//
		$('#resume__info-3').addClass('active');
		//
		$('.resume__performance #dot-3').attr('r', '10');
		$('#dot-shadow-3').attr('r', '15');
		$('.resume__performance #dot-3').attr('class', 'active');
	} else if (svg_performance_position == 4) {
		$('.resume__performance #v-line-1').attr('class', '');
		$('.resume__performance #v-line-2').attr('class', '');
		$('.resume__performance #v-line-3').attr('class', '');
		$('.resume__performance #v-line-4').attr('class', 'active');
		//
		$('.resume__performance #h-line-1').attr('class', 'active');
		$('.resume__performance #h-line-2').attr('class', 'active');
		$('.resume__performance #h-line-3').attr('class', 'active');
		//
		$('.resume__performance #dot-4').attr('r', '10');
		$('#dot-shadow-4').attr('r', '15');
		$('.resume__performance #dot-4').attr('class', 'active');
		//
		$('#resume__info-4').addClass('active');
	} else if (svg_performance_position == 5) {
		$('.resume__performance #v-line-1').attr('class', '');
		$('.resume__performance #v-line-2').attr('class', '');
		$('.resume__performance #v-line-3').attr('class', '');
		$('.resume__performance #v-line-4').attr('class', '');
		$('.resume__performance #v-line-5').attr('class', 'active');
		//
		$('.resume__performance #h-line-1').attr('class', 'active');
		$('.resume__performance #h-line-2').attr('class', 'active');
		$('.resume__performance #h-line-3').attr('class', 'active');
		$('.resume__performance #h-line-4').attr('class', 'active');
		//
		$('.resume__performance #dot-5').attr('r', '10');
		$('#dot-shadow-5').attr('r', '15');
		$('.resume__performance #dot-5').attr('class', 'active');
		//
		$('#resume__info-5').addClass('active');
	}
}

$(document).ready(function() {
	window.onscroll = function() {
		// изменяем цвет меню при скролле
		scrolled = $(window).scrollTop();
		colorСhangeMenu();
		console.log(scrolled + 'px');
		// Если доскроллили то включаем интервал
		if (scrolled > 800 && activateSVG == 0) {
			activateSVG = 1;
			//
			svg_performance_position = 1;
			CheckSvgPerformancePosition();
			var svg_interval = setInterval(function() {
				svg_performance_position = svg_performance_position + 1;
				if (svg_performance_position > 5) {
					svg_performance_position = 1;
				};
				//alert(svg_performance_position)
				CheckSvgPerformancePosition();
			}, svg_performance_interval);
		}
	}
});

$(document).ready(function() {
	$('#dot-1').hover(function() {
		alert()
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});
});


$(document).ready(function() {;
	//$('.resume__performance line').attr('class', '');
	svg_performance_position = 0;
	CheckSvgPerformancePosition()
});

/* /интерактивное резюме - анимация svg */

/* карты */
$(document).ready(function() {
	if($('#map').length > 0){
	        
	            function init() {
	                // Basic options for a simple Google Map
	                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	                var mapOptions = {
	                    // How zoomed in you want the map to start at (always required)
	                    zoom: 17,
	                    scrollwheel: false,

	                    // The latitude and longitude to center the map (always required)
	                    center: new google.maps.LatLng(55.692853529206445, 37.60625419573978), 

	                    // How you would like to style the map. 
	                    // This is where you would paste any style found on Snazzy Maps.
	                    styles:[
								  {
								    "stylers": [
								      { "hue": "#e6ff00" },
								      { "saturation": -100 },
								      { "gamma": 1.69 },
								      { "lightness": 10 }
								    ]
								  }
								]
	                };

	                // Get the HTML DOM element that will contain your map 
	                // We are using a div with id="map" seen below in the <body>
	                var mapElement = document.getElementById('map');     

	                // Create the Google Map using our element and options defined above



	                // Let's also add a marker while we're at it
	                var image = 'assets/img/svg/map-mark.svg';
	                var marker = new google.maps.Marker({
	                    position: new google.maps.LatLng(55.692914, 37.609902000000034),
	                    map: map,
	                    title: 'г. Москва, Севастопольский проспект, д. 3, корп. 2',
	                    icon: image,
	                    animation: google.maps.Animation.BOUNCE
	                });

	            var map = new google.maps.Map(mapElement, mapOptions);

	            marker.setMap(map);
	            }
	        google.maps.event.addDomListener(window, 'load', init);
	}
});
