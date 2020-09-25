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

$(function () {
	
	$('input[type="text"]').each(function(i, el) {
     setPlaceholder( $(this) );
  });
	
});













