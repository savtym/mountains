$(function() {
	let currentTopPosition = $(window).scrollTop();
	$(window).scroll(function() {
		let scrollTop = $(window).scrollTop();
		let isHeader = scrollTop > 0 && scrollTop < currentTopPosition;
    currentTopPosition = scrollTop;
		if (isHeader) {
			$('.navbar').addClass('fixed');
		} else {
			$('.navbar').removeClass('fixed');
		}
	});
});