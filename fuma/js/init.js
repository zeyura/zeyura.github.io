//zet 02.2013
function elementSupportsAttribute(el, attr) {
    var test = document.createElement(el);
    if (attr in test) { return true;} 
		else { return false;}
}

function setPlaceholder ( el ) {
	if( !elementSupportsAttribute('input', 'placeholder') ){
		var i =  el.attr('placeholder');
	el.val( i );
	el.focus( function(){
	 if( el.val() == i ){ el.val('') } 
	}).blur(function() {
	 if( el.val() == '' ){ el.val( i ) }
	});
	} 
}

$(function () {
	$('input[type="text"]').each(function(i, el) {
     setPlaceholder( $(this) );
  });
	$('input[type="password"]').each(function(i, el) {
     setPlaceholder( $(this) );
  });
	$('input.text').each(function(i, el) {
     setPlaceholder( $(this) );
  });
	$('textarea').each(function(i, el) {
     setPlaceholder( $(this) );
  });
});
// ******* set PH end

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

function addSpaces(nStr)// digit format
{
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ' ' + '$2');
  }
  return x1 + x2;
}

// **

$(document).ready(function() {
	
//browsers
    var _browser = navigator.userAgent; // for ie11
	
	if( $.browser.msie ) {
		$('#search_box input.text').css('top','1px');
		$('#search_btn').css('top','-2px');
	}
	if( _browser.indexOf('Trident/7.0') + 1 && _browser.indexOf('MSIE') == -1 ) { //alert('Hi, IE11!')
		$('#search_box input.text').css('top','1px');
		$('#search_btn').css('top','-2px'); 
	}
	if( $.browser.msie && parseInt($.browser.version) == 10 ) {
		 
	}
	if( $.browser.msie && parseInt($.browser.version) == 9 ) {
		
	}
	if( $.browser.msie && parseInt($.browser.version) == 8 ) {
		
	}
    if( $.browser.webkit ) {
		
    }
	if( $.browser.safari ) { //
	   
	}
	if( $.browser.mozilla ) {
		$('#z_callback').css('line-height', '17px');
		//$('#search_box input.text').css('top','1px');
		$('#search_btn').css('top','-1px');
		$('#top_block').css('box-shadow','0 1px 2px #333');
	}

//browsers end 
	 
// 	 history_section div's - ровняем высоту колонок
  var maxH = 0;
  $('.history_section .content>div').each(function(index, element) {
	  h = $(this).height();
      if( h > maxH ) maxH = h;
	  
	  //alert( $(this).height() )  
  });
  $('.history_section .content>div').each(function(index, element) {
	 $(this).height(maxH); 
  });
  $('.history_section .history').append('<div class="border-fix left-top"></div>');
  $('.history_section .history').append('<div class="border-fix left-bot"></div>');
  $('.history_section .history').append('<div class="border-fix right-top"></div>');
  $('.history_section .history').append('<div class="border-fix right-bot"></div>');
//
	 
// Close Overlays 

    $('#z_callback').click(function(e) {
        $('.ovl-master').fadeIn(200);  //css('display','block');
		$('#caller_ovl').css({display:'block', opacity:'1'});
    });
 
	$('.close').click(function(e) {
		var ovl = $(this).parent();
		if ( ovl.hasClass('overlay') ) {
			ovl.css({display:'none', opacity:'0'});
			ovl.parent('.ovl-master').fadeOut(200);
		}
		else {
			//ovl.fadeOut(200); $('.black').fadeOut(200);
		}
	});
    $('.black').click(function(e) {
		if ( $(this).parent().hasClass('ovl-master') ) {
		   $(this).parent().fadeOut(200);
			 $('.ovl-master .overlay').each(function(i, el) {
           $(this).css({display:'none', opacity:'0'});
       });
		}
		else {}
	});

	
	
	
//	$('.disselect').disableTextSelect();
});

$(window).load(function(e) {
	//$('body').css('display','block');	
    $('body').animate({opacity:'1', top:0}, 200);
});

