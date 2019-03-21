$(document).ready(function () {
	$(".main_btna, .main_btn, a:contains('расписания')").click(showOverlay);
	$('.close').click(hideOverlay);

	function showOverlay(){
		$(".overlay").css({'opacity': '0','display': 'block'});
		$(".overlay").animate({
			opacity: 1
		}, 'slow');
		$('.modal').css({'display': 'block','top': '-600px'});
		$(".modal").animate({
			top: '0px'
		}, 'slow');
	}
	function hideOverlay() {
		$(".overlay").animate({
			opacity: 0
		}, 'slow', function (){
			$(".overlay").css('display', 'none');
		});
		
		$(".modal").animate({
			top: '-600px'
		}, 'slow', function(){
			$(".modal").css('display', 'none');
		});
	}
});