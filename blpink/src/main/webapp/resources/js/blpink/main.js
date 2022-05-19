/**
	/resources/js/whistle/main.js
 */
 $(function(){
	// 회원가입버튼 클릭 이벤트
	$('#jbtn').click(function() {
		$(location).attr('href', '/blpink/JoinForm.black' );	
	});
	$('#lbtn').click(function() {
		$(location).attr('href', '/blpink/loginForm.black');
	})
	
	$('#obtn').click(function(){
		$(location).attr('href', '/blpink/logout.black');
	});
	
	$('#mlbtn').click(function(){
		$(location).attr('href', '/whistle/member/memberList.blp');
	})
	$('#ibtn').click(function() {
		$(location).attr('href', '/blpink/myInfo.black');
	})
	
});