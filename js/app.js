(function($, document, window){
	
	$(document).ready(function(){

		$('#subscription-form').submit(function(event) {
			event.preventDefault();
			$(this).remove();
			var newBlock = document.createElement('div');
			newBlock.classList.add('form-submitted');
			newBlock.innerHTML = `
				Bedankt voor het inschrijven
			`;
			var formBlock = document.getElementById('form-block');
			formBlock.appendChild(newBlock);
			return false;
		})
		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		$(".offer img, .news img").panr({
			sensitivity: 15,
			scale: false,
			scaleOnHover: true,
			scaleTo: 1.2,
			scaleDuration: 0.25,
			panY: true,
			panX: true,
			panDuration: 1.25,
			resetPanOnMouseLeave: false
		});

		$(`.testimonial-slider`).flexslider({
			directionNav: false,
			controlNav: true
		});

		/* if( $(".map").length ) {
			$('.map').gmap3({
				map: {
					options: {
						maxZoom: 14,
						scrollwheel: false
					}  
				},
				marker:{
					address: "Chau. de Roodebeek 206, 1200 Bruxelles, België",
					// options: {
					// 	icon: new google.maps.MarkerImage(
					// 		"images/map-marker.png",
					// 		new google.maps.Size(43, 53, "px", "px")
					// 	)
					// }
				}
			},
			"autofit" );
	    	
	    } */
	});

	$(window).load(function(){

	});

})(jQuery, document, window);