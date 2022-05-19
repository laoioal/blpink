$(document).ready(function(){
	$(document.frm.gen).change(function(){
		var sgen = $(this).val();
		$('#avtfr').stop().slideUp(500, function(){
			if(sgen == 'M'){
				$('#favt').css('display', 'none');
				$('#mavt').css('display', 'block');
				$('#avtfr').stop().slideDown(500);
			} else {
				$('#mavt').css('display', 'none');
				$('#favt').css('display', 'block');
				$('#avtfr').stop().slideDown(500);
			}			
		});
		
	});
	
	// 아이디체크버튼 클릭이벤트
	$('#idck').click(function(){
		// 할일
		// 입력한 아이디 꺼내오고
		var sid = $('#id').val();
		
		if(!sid){
			// 입력내용이 없는 경우
			$('#id').focus();
			alert('* 아이디를 입력하세요!');
			return;
		}
		// 전달해서 사용가능 유무 판단하고
		$.ajax({
			url: '/blpink/idck.black',
			type: 'post',
			dataType: 'json',
			data: {
				id: sid
			},
			success: function(data){
				var result = data.result;
				$('#idmsg').removeClass('w3-text-green w3-text-red');
				
				// 뷰에 보여주고
				if(result == 'OK'){
					// 입력한 아이디가 사용가능한 경우
					$('#idmsg').html('* 사용 가능한 아이디 입니다! *');
					$('#idmsg').addClass('w3-text-green');
				} else {
					// 입력한 아이디가 사용불가능한 경우
					$('#idmsg').html('* 사용 불가능한 아이디 입니다! *');
					$('#idmsg').addClass('w3-text-red');
				}
				$('#idmsg').css('display', 'block');
			},
			error: function(){
				alert('### 통신 에러 ###');
			}
		});
		
	});
	
	// 비밀번호 입력이벤트
	$('#pw').change(function(){
		// 할일
		// 입력된 데이터 읽어온다.
		var pw = $(this).val();
		if(pw != '12345'){
			$('#pwmsg').html('# 비밀번호는 12345 만 가능합니다.');
			$('#pwmsg').removeClass('w3-text-green w3-text-red').addClass('w3-text-red')
		} else {
			$('#pwmsg').html('* 정확한 비밀번호입니다. *');
			$('#pwmsg').removeClass('w3-text-green w3-text-red').addClass('w3-text-green');
		}
		$('#pwmsg').css('display', 'block');
	});
	
	// 비밀번호 입력 이벤트
	$('#repw').keyup(function() {
		// 할일
		// 입력된 데이터 읽어온다.
		var pw = $('#pw').val();
		var repw = $(this).val()
		if(pw != repw) {
			$('#repwmsg').html('# 비밀번호가 일치하지 않습니다.');
			$('#repwmsg').removeClass('w3-text-green w3-text-red').addClass('w3-text-red')
		} else {
			$('#repwmsg').html('* 비밀번호가 일치합니다. *');
			$('#repwmsg').removeClass('w3-text-green w3-text-red').addClass('w3-text-green');
		}
		$('#repwmsg').css('display', 'block');
	});
	
	$('#jbtn').click(function() {
		
		var name = $('#name').val();
		var id = $('#id').val();
		var pw = $('#pw').val();
		var repw = $('#repw').val();
		var mail = $('#mail').val();
		var tel = $('#tel').val();
		var ckgen = $('[name="gen"]');
		var gen = '';
		var ckano = $('[name="ano"]');
		var ano = '';
		var repwmsg = $('#repwmsg').html();
		var idck = $('#idmsg').html();
		for(var i = 0 ; i < ckgen.length; i++) {
			if(ckgen.eq(i).is(':checked')) {
				gen = ckgen.eq(i).val();
			}
		}
		for(var i = 0 ; i < ckano.length; i++) {
			if(ckano.eq(i).is(':checked')) {
				ano = ckano.eq(i).val();
			}
		}


		if(!name) {
			alert('이름을 입력해주세요');
			$('#name').focus();
			return;
		} else if(!id) {
			alert('아이디를 입력해주세요');
			$('#id').focus();
			return;
		} else if(!pw) {
			alert('비밀번호를 입력해주세요');
			$('#pw').focus();
			return;
		} else if(!repw) {
			alert('비밀번호 확인해해주세요');
			$('#repw').focus();
			return;
		} else if(!mail) {
			alert('메일을 입력해주세요');
			$('#mail').focus();
			return;
		} else if(!tel) {
			alert('전화번호를 입력해주세요');
			$('#tel').focus();
			return;
		} else if(!gen) {
			alert('성별을 선택해주세요');
			return;
		} else if(!ano) {
			alert('아바타를 선택해주세요');
			return;
		} else if (repwmsg != '* 비밀번호가 일치합니다. *') {
			alert('비밀번호가 일치하지 않습니다.');
			$('#repw').focus();
			repw = '';
			return;
		} else if (idck != '* 사용 가능한 아이디 입니다! *') {
			alert('아이디를 확인해주세요.');
			$('#id').focus();
			id = '';
			return;
		} 
		
		else {
		
			$('#frm').attr('action', '/blpink/join.black');
			$('#frm').submit();
		}
/*
		var id = $('#id').val();
		var pw = $('#pw').val();
		var name = $('#name').val();
		var mail = $('#mail').val();
		var tel = $('#tel').val();
		
		var gen = $('[name="gen"]:checked').val();
		var ano = $('[name="ano"]:checked').val();
		
		var el = $('#id, #pw, #name, #mail, #tel');
		
		for(var i = 0 ; i < el.length ; i++ ){
			var txt = $(el).eq(i).val();
			if(!txt){
				alert('# 필수 입력사항을 확인하세요!');
				$(el).eq(i).focus();
				return;
			}
		}
		if(!(gen && ano)){
			alert('# 필수 선택 사항을 확인하세요!');
			return;
		}
		
		if(!(id && pw && name && mail && tel && gen && ano)){
			
			alert('# 필수 입력사항을 확인하세요!');
			return;
		}
		
		$('#frm').attr('action', '/whistle/member/joinProc.blp').submit();
*/		
		
		
	});
		$('#hbtn').click(function() {
			$(location).attr('href', '/blpink/main.black')
		})
		$('#rbtn').click(function() {
			document.frm.reset();
			$('#pwmsg, #repwmsg').css('display', 'none');
		})
		
	
});