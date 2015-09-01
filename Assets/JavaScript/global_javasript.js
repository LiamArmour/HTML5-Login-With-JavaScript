	
/* Form Validation [START] */	
	$().ready(function() {
		$("#validate-form").validate({
			rules: {
				crewshirt_size: {
					required: "#crewshirt:filled"
				},
				coat_size: {
					required: "#coat:filled"
				}			
			}		
		});
				
	});
/* Form Validation [END] */	
	
	
/* Header Menu Drop down [START] */	
	$().ready(function() {

		$('.dropSettings').hide();		
		$('.clickSettings').click(function () {

			var theContent = $(this).next();

			if (!theContent.hasClass('open')) {
				$('.dropSettings').removeClass('open').slideUp();
				theContent.addClass('open').slideDown();
			} else {
				theContent.removeClass('open').slideUp();
			}
			return false;
		});		
		
	});	
	
/* Header Menu Drop down [END] */

	
/* Header Settings Drop down [START] */	
	$().ready(function() {

		$('.dropMenu').hide();		
		$('.clickMenu').click(function () {

			var theContent = $(this).next();

			if (!theContent.hasClass('open')) {
				$('.dropMenu').removeClass('open').slideUp();
				theContent.addClass('open').slideDown();
			} else {
				theContent.removeClass('open').slideUp();
			}
			return false;
		});
		
	});
/* Header Settings Drop down [START] */		


/* Table Drop down [START] */	
	function dropwindow(theclick,thedropdown){
			
		var theContent = $(theclick).next();

		if (!theContent.hasClass('open')) {
			$(thedropdown).removeClass('open').slideUp();
			theContent.addClass('open').slideDown();
		} else {
			theContent.removeClass('open').slideUp();
		}
		return false;
	
	};
/* Table Drop down [END] */	