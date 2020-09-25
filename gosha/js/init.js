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
	$('textarea.plhold').each(function(i, el) {
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

// *************

$(window).load(function() {
	$('#aj-loader').animate({'opacity':'0'},50,'swing', function(){
	     $(this).remove();
	});
});

$(document).ready(function() {
	
	//browsers --
  if( $.browser.msie && parseInt($.browser.version) == 10 ) {
		 
	}
	
	if( $.browser.msie && parseInt($.browser.version) == 9 ) {
		 
	}
  
	if( $.browser.msie && parseInt($.browser.version) == 8 ) {
		 
	}
	if( $.browser.msie ) {
		
	}
	
  if( $.browser.webkit ) {
		
  }
	if( $.browser.safari ) {
		 
	}
	if( $.browser.mozilla ) {
		 
	}
  if( $.browser.opera ) {
		
	}
	//browsers end -->
	
 $('.books-nav li span').click(function(e) {
    if ( $(this).parent('li').hasClass('current') ) return;
		$(this).parent('li').siblings('li').removeClass('current');
		$(this).parent('li').addClass('current');
		$(this).parents('.books-nav').toggleClass('two');
		
		$(this).parents('.intro-books').find('.book-content').each(function(i, el) {
       $(this).toggleClass('hidden');
    });
 });
 
 $('.float-btn').each(function(i, el) {
   $(this).append('<span class="lefter"></span>').append('<span class="righter"></span>');
 });

 var margin = ($(window).height() - $('.main').height())/2;
 if( $(window).height() > $('.main').height() + 20 ) $('.main').css('margin-top', margin +'px');	
	
 $(window).resize(function(e) {
    var margin = ($(window).height() - $('.main').height())/2;
		if( $(window).height() > $('.main').height() + 20 ) $('.main').css('margin-top', margin +'px');
		else $('.main').css('margin-top', '20px');
 });
 
 
 // Close Overlays  
	$('.close').click(function(e) {
		var ovl = $(this).parent();
		ovl.find('iframe').remove();
		ovl.fadeOut(200); $('.black').fadeOut(200);
	});
  $('.black').click(function(e) {
		$(this).fadeOut(200).siblings('.overlay').fadeOut(200).find('iframe').remove();
	});
	$('.closing').click(function(e) {
		var ovl = $(this).parent();
		ovl.fadeOut(200);
		ovl.find('iframe').remove();
		$('.black').fadeOut(200);
	});
	
	// Gala
	var count = 1,   // к-во елем.  в сдвиге галереи
	    s     = 940; // сдвиг в px
	
	$('#list1').click(function(e) {
		$('.black').fadeIn(200);
    $('#ovl1').fadeIn(200);
  });
	$('#list2').click(function(e) {
		$('.black').fadeIn(200);
    $('#ovl2').fadeIn(200);
  });

	$('.right-arr').click(function(e) {
		var _this= $(this); 
    var line = $(this).parent().parent('.overlay').find('.gal-line');
		var c_el = line.find('div').size();
		var left = parseInt(line.css('left'));
		if ( left/s > -1 * c_el + count) {
			$(this).siblings('.left-arr').removeClass('pass');
		  line.animate({'left': '-='+count*s+'px'},200,'swing', function(){
				 if ( parseInt(line.css('left'))/s <= -1 * c_el + count ) _this.addClass('pass');
			});
		}
		
  });
	
	$('.left-arr').click(function(e) {
		var _this= $(this);
		var line = $(this).parent().parent('.overlay').find('.gal-line');
		var c_el = line.find('div').size();
		var left = parseInt(line.css('left'));
		if ( left/s < 0 ) {
			$(this).siblings('.right-arr').removeClass('pass');
		  line.animate({'left': '+='+count*s+'px'},200,'swing',function(){
				if ( parseInt(line.css('left'))/s >= 0 ) _this.addClass('pass');
			});
		}
  });

  $('.apple').click(function(e) {
     $('.black').fadeIn(200);
     $('#alert').fadeIn(200);
  });
	
	$('.play-btn').click(function(e) {
     $('.black').fadeIn(200);
     $('#video').prepend('<iframe width="640" height="390" src="http://www.youtube.com/embed/moD8Fc0S1-w?rel=0" frameborder="0" allowfullscreen></iframe>').fadeIn(200);
		 
  });
	
	$('#pay-net').click(function(e) {
     $('.black').fadeIn(200);
     $('#paywin1').fadeIn(200);
  });
	
	$('#pay-cash').click(function(e) {
     $('.black').fadeIn(200);
     $('#paywin2').fadeIn(200);
  });
	
	$('#book1').click(function(e) {
     $('.black').fadeIn(200);
     $('#bookwin1').fadeIn(200);
  });
	
	$('#book2').click(function(e) {
     $('.black').fadeIn(200);
     $('#bookwin2').fadeIn(200);
  });
	
});











