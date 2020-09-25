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
// ******* Cart Fn
function changeSum() {// sum in cart / busket
		var s = 0;
		$('.checkout-cell').each(function(i, el) {
			 var c = +$(this).find('.prod-count input').val();
			 var p = parseFloat( $(this).find('.cur-price').text().replace(',', '.') );
			 s += c*p;
		});
		$('.checkout-summ b').text( s.toFixed(2).replace('.', ',') + ' грн.' )
}

function changeCreditRate( el ) {// sum in CreditBox
			var m = +el.val();
			var cp = el.parents('.cc-credits').find('.cc-credit-price em');
			var p = +parseFloat( el.parents('.cc-top-right').find('.cur-price').text().replace(',','.') );
			cp.text( (p / m).toFixed(2).replace('.', ',') );
}
// *************

$(function () {
	setPlaceholder( $('#search-inp'), 'Быстрый поиск');
	setPlaceholder( $('#email-inp'), 'Электронная почта');
	setPlaceholder( $('#password-inp'), 'Пароль');
//--- Cart tabs --- >
	 $('.busket-tab').click(function(e) {
		if( !$(this).hasClass('active') ) {
		  $(this).css('z-index',5).addClass('active');
			$('.bookmarks-tab').css('z-index',1).removeClass('active');
			$('.cart-div').css('display','block');
			$('.bookmarks-div').css('display','none');
		}
	 });
   $('.bookmarks-tab').click(function(e) {
		 if( !$(this).hasClass('active') ) {
		  $(this).css('z-index',5).addClass('active');
			$('.busket-tab').css('z-index',1).removeClass('active');
			$('.cart-div').css('display','none');
			$('.bookmarks-div').css('display','block');
		 }
	 });
//--- drop-nav  ---
	$('#catalog-link').hover(
	  function(e){
			$('.main-nav-catalog').stop(true).show(100);
		},
		function(e){
		  $('.main-nav-catalog').delay(500).hide(100);
	});
	$('.main-nav-catalog').hover(
	  function(e){
			$(this).stop(true).show(100);
		},
		function(e){
		  $(this).delay(500).hide(100);
	});
//--- footer drop-nav  ---
	$('.mf-catalog-ul>li>a').hover(
	  function(e){
			$(this).parents('.mf-catalog-ul').find('.main-nav-cell').hide();
			$(this).siblings('.main-nav-cell').stop(true).show(50);
		},
		function(e){
		  $(this).siblings('.main-nav-cell').delay(500).hide(100);
	});
	$('.mf-catalog-ul .main-nav-cell').hover(
	  function(e){
			$(this).stop(true).show(50);
		},
		function(e){
			$(this).delay(500).hide(100);
	});

// ---- Checkout & Cart  ---
	 
	$('.close-this').click(function(e) {
		$(this).parent().remove();
		changeSum();
	});
	
	$('.counter-arr-up').click(function(e) {
		var inp = $(this).siblings('.count-inp');
		var v = +inp.val();
		v++;
		inp.val( v );
		if( $(this).parent().hasClass('counter-credit') ) {
			 changeCreditRate( inp );
		}
		else changeSum();
	});
	
	$('.counter-arr-down').click(function(e) {
		var inp = $(this).siblings('.count-inp');
		var v = +inp.val();
		if( v > 1 ) {
			v--;
			inp.val( v );
			if( $(this).parent().hasClass('counter-credit') ) {
			 changeCreditRate( inp );
			}
			else changeSum();
		}
	});
	
	$('.count-inp').change(function(e) {
		  if( $(this).val() < 1 ) { $(this).val(1) }
			if( $(this).parent().hasClass('counter-credit') ) {
			 changeCreditRate( $(this) );
			}
			else changeSum();
	});
	changeSum();
// ----   --- 
	 
});

$(document).ready(function() {
	var params = {changedEl: '.cusel'};
	cuSel(params);

});

