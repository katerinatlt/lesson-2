$().ready(function () {

	function animLogo() {
		var x = $(document).scrollTop();
		if (x > 0) {
			$('.logo').addClass('logo--small');
		} else {
			$('.logo').removeClass('logo--small');
		}
	}

	animLogo();
	$(document).scroll(
		function() {
			animLogo();
		}
	);
	
});