$(document).ready(function () {

	$('#js-main-slider').pogoSlider({
		autoplay: true,
		autoplayTimeout: 2000,
		displayProgess: true,
		preserveTargetSize: true,
		targetWidth: 3000,
		targetHeight: 300,
		responsive: true
	}).data('plugin_pogoSlider');

	var transitionDemoOpts = {
		displayProgess: false,
		generateNav: false,
		generateButtons: false
	}

});