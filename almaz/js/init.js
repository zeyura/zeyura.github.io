//zet 02.2013
function elementSupportsAttribute(el, attr) {
    var test = document.createElement(el);
    if (attr in test) { return true;} 
		else { return false;}
}

function setPlaceholder ( el, i) {
	if( !elementSupportsAttribute('input', 'placeholder') ){
	el.val( i );
	el.focus( function(){
	 if( el.val() == i ){ el.val('') } 
	}).blur(function() {
	 if( el.val() == '' ){ el.val( i ) }
	});
	} 
}

function stopPropagation(e) {
	if(e.stopPropagation) { e.stopPropagation() }
	else { e.cancelBubble = true; }
}

function checkmail(val) {
   reg = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
   if ( val.match(reg) ) { return true; }
	   return false;
}

function checkfone(val) {
   reg = /\+{0,1}\({0,1}[0-9]{0,4}\){0,1}\s{0,1}[0-9\-]{5,13}$/;
   if ( val.match(reg) ) { return true; }
	   return false;
}

$(function () {
	 
	var bc = + $('#tov').text(), t=''; 
	if( bc == 1) { t = 'Товар'}
	if( bc > 1 && bc < 5 ) { t = 'Товарa'}
  if( bc == 0 || bc > 4) { t = 'Товаров'}
  $('#ttext').text(t);
	
	setPlaceholder ( $('#search'), 'Поиск...');
	
	// Radio
	 $('.radio_label').click(function(e) {
			$(this).siblings('.radio_label').removeClass('active');
			$(this).addClass('active');
			$('#vote_val').val( $(this).attr('data-name') );
	 });
	 
	 $('#vote_btn').click(function(e) {
			voteSubmit();
	 });
	 
	 $('#vote_open').click(function(e) {
			$('.vote_base').hide(100);
			$('.vote_open').show(100);
	 });
	 
	 $('.vote_res_a').click(function(e) {
			$('.vote_base').hide();
			$('.vote_open').hide();
			$('.vote_result').show(100);
			showVoteResult();
	 });
});

//  voteSubmit  showVoteResult ------------
 function voteSubmit() {
		 if( !$('#vote_btn').hasClass('disable') ) {
			var v = $('#vote_val').val();
			if( v == '' ) { return; }
			 $.ajax({
				 url: '',
				 data: v,
				 dataType : "json",
				 error: function () { // поменять на success
						 $('#vote_btn').addClass('disable').text('Готово');
				 }               
			 });
			 
		 }
 }

 function showVoteResult() {
	 var  w = +$('.res_div').outerWidth();
		$('.vote_result .sp1').each(function(i, el) {
			 var p = +$(this).find('b').text(), end = w*p/100;
			 $(this).next('.res_div').find('p').animate({width:end+'px'},500);
		});
 }
// --------------- Категории ----------
 $(function () {
	 var t = 150;// animation time
	 
	 $('.cat_nav>li').click(function(e) {
		 if( !$(this).hasClass('open') ) {
			$('.cat_nav>li[class~="open"]').removeClass('open').find('ul').hide();
			$(this).addClass('open').find('ul').show(t);
		 }
		 else {
			 $(this).removeClass('open').find('ul').hide();
		 }
	 });
	
	 $('.category_button').click(function(e) {
		 var nav = $(this).parents('#category_ext').find('nav');
		 $(this).toggleClass('up');
		 if( $(this).hasClass('up') ) { nav.show(t); }
		 else { nav.hide(t); }
	 });
	
 });
 
// --------- Reg Form ------------ review_form
 
$(function () {
	 
	 $('.reg_text').focus(function(e) {
		 $(this).prev('strong').hide();
		 
	 });
	 
	 $('.reg_text').blur(function(e) {
		 if( $(this).val() == "" ) {
		   $(this).prev('strong').show();
		 }
	 });
	 
	 $('.reg_inp').focus(function(e) {
		 $(this).prev('strong').hide();
		 
	 });
	 
	 $('.reg_inp').blur(function(e) {
		 if( $(this).val() == "" ) {
		   $(this).prev('strong').show();
		 }
	 });
	 
	 $('#reg_submit').click(function(e) {
		    regSubmit();
	 });
});
 
function regSubmit() {
	var name = $('#reg_name').val(), mail = $('#reg_mail').val(), pass1 = $('#reg_pass').val(), pass2 = $('#reg_pass2').val(), cap = $('#reg_captcha').val();  
	if( name && checkmail(mail) && pass1 && cap ) {
		if( pass1 == pass2 ) { $('#reg_form').submit(); }
		else { alert('Пароли не совпадают!'); }
	}
}
// ---------  FILTER >> ------------

$(document).ready(function (){  // 
		var Min = 200, Max = 2000;
	
		$( "#slider-price" ).slider({
				animate:200,
				step:10,  // кратно max - min
				range: true,
				min: Min,
				max: Max,
				values: [Min, Max],
				slide: function( event, ui ) {
						$( "#amount1" ).text( ui.values[ 0 ] );
						$( "#amount2" ).text( ui.values[ 1 ] );
				}
		});
		$( "#amount1" ).text( $( "#slider-price" ).slider( "values", 0 ));
		$( "#amount2" ).text( $( "#slider-price" ).slider( "values", 1 ));
		
		var brand = '', size = '', smin, smax; // for Ajax

		$('#brand a').click(function(e) {
			 $(this).siblings('a').removeClass('selected');
			 $(this).addClass('selected');  //  select / cancel
			 brand = $(this).text();
		});
		
		$('#size a').click(function(e) {
			 $(this).siblings('a').removeClass('selected');
			 $(this).addClass('selected');  // select
			 size = $(this).text();
		});
		
		$('#clear_btn').click(function(e) {
				$('#brand a').removeClass('selected');
				$('#size a').removeClass('selected');
				brand = ''; size = '';
				$( "#slider-price" ).slider( "option", "values", [Min, Max] );
				$( "#amount1" ).text(Min);
				$( "#amount2" ).text(Max);
		});
		
		$('#filter_btn').click(function(e) {
				 
					$.ajax({ 
						 url:'',
						 data:[ brand, size, smin, smax ],
						 success: function(){   }
						 
					});
		});
});

// -----  Carusel
function caruselLeft(f) {
f = f || false;
if( !f ) {
	$('.carusel_line').animate({left:'+='+ w*step +'px'}, t);
	pos -= step;
} else {
	$('.carusel_line').animate({left: 0 +'px'}, t);
	pos = 1;
}
}

function caruselRight(f) {
f = f || false;
if( !f ) {
	$('.carusel_line').animate({left:'-='+ w*step +'px'}, t);
	pos += step;
} else {
	$('.carusel_line').animate({left:-w*(c-3) +'px'}, t);
	pos = c - 2;
}
}