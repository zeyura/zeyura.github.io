function Galery(){

var elem = $('#a3'),
    largeImg = $('#largeImg'),
    ul = $('#thumbs'),
	imgs = $('li', ul),   
	as = $('a', ul),  len = as.length, 
	PREV = $('#gal-prev'),
	NEXT = $('#gal-next'),
	width = 100, 
	count = 1,
    position = 0,
	left = 0,
	vis = 5,
	d = 100, // duration
	ease = "easeOutCirc"

// autoloader
as.each(function(i) { 
    var url = $(this).attr('href');
	img = $('<img>').attr('src', url)
});
  
showThumbnail('img/galery/1l.jpg', 'Jaguar XKR', 550, 247)
PREV.addClass('off')
// ----------------------
as.hover(mOver, mOut)

as.click(function(){
      showThumbnail($(this).attr('href'), $(this).attr('title'), $(this).attr('data-w'),  $(this).attr('data-h'))
      return false;
})

$('.carousel').on('selectstart', false)

PREV.mousedown(function(){
  if (position >= 0) return
  var newPos = Math.min(position + width*count, 0)
  
  ul.animate({'margin-left': newPos+'px'}, 400, ease)
  position = newPos
  left -=1
  if(left == 0) PREV.addClass('off')
  if(left == len - vis - 1 ) NEXT.removeClass('off')
})

NEXT.mousedown(function(){
  if (position <= -width*(imgs.length-vis)) return; // right position
  var newPos = Math.max(position-width*count, -width*(imgs.length-count));

  ul.animate({'margin-left': newPos+'px'}, 400, ease)
  position = newPos
  left +=1
  if(left == 1) PREV.removeClass('off')
  if(left == len - vis ) NEXT.addClass('off')
})

function mOver(){
	$('img', this).animate({'width': '104px', 'height': '54px', 'margin-top': '0', opacity:0.8}, d)
	 ul.stop().animate({'margin-left': position - 4}, d)
}

function mOut(){
	$('img', this).stop().animate({'width': '96px', 'height': '50px', 'margin-top': '2px', opacity:1}, d)
	 ul.stop().animate({'margin-left': position }, d)
}

function showThumbnail(href, title, w, h){
  var elW = elem.outerWidth(),
  elH = elem.outerHeight() - 61
  
  largeImg.animate({opacity:0}, 200, ease, function(){
	  
  largeImg.attr('src', href)
  largeImg.attr('alt', title)
  largeImg.css('left', (elW - w)/2 + 'px')
  largeImg.css('top', (elH - h)/2 + 'px')
  largeImg.animate({opacity:1}, 4*d, ease)
  })
}

}