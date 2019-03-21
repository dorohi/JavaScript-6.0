$(document).ready(function () {
	$(".main_btna, .main_btn, a:contains('расписания')").click(showOverlay);
	$('.close').click(hideOverlay);

	function showOverlay(){
		$(".overlay").css({'opacity': '0','display': 'block'});
		$(".overlay").animate({
			opacity: 1
		}, 'slow');
		$('.modal').css({ 'display': 'block', 'top': '-600px', 'left': '-1000px'});
		$(".modal").animate({
			top: '0px',
			left: '0px'
		}, 1000);
	}
	function hideOverlay() {
		$(".overlay").animate({
			opacity: 0
		}, 'slow', 
		function (){
			$(".overlay").css('display', 'none');
		});

		$(".modal").animate({
			top: '1600px',
			left: '1600px'
		}, 1500,
		function () {
			$(".modal").css('display', 'none');
		});
	}
	$('.form-inline').on('submit', function (event) {
		event.preventDefault();
		$.post(
			"/server.php", 
			$('.form-inline').serialize(),
			onAjaxSuccess
		);

		function onAjaxSuccess(data) {
			hideOverlay();
			console.log(data);
		}
	});
});