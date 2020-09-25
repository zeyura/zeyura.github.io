//zet
function Menu(sel){
	var elem = $(sel)
	    cont = $('#right-cont')
		wrapper = $('#content')
		
	function init(){
	elem.on('click', 'li', open)
	$('li', elem).hover(menuOver, menuOut)
	elem.on('selectstart', 'li', false)
	}
	
	function menuOver(){
		if($(this).attr('n') == 2){
			switch(curTheme){
			  case 'blue': $('.loading img', this).attr('src', 'img/load-anim-bl.gif'); break;
			  case 'gold': $('.loading img', this).attr('src', 'img/load-anim-bl-g.gif')
			}
		}
		$(this).find('span').stop().css('opacity', 1)
	}
	
	function menuOut(){
		if($(this).attr('n') == 2) $('.loading img', this).attr('src', 'img/load-anim.gif')
		var id = $(this).attr('id'), sp = $(this).find('span')	
		if( id != curActiv ) sp.animate({opacity:0}, 400, 'linear')
	}
	
	function open(){
		var durTime = 200, d = 40
		    id = $(this).attr('id')
			n = $(this).attr('n')

		if(!isOpen){
			if(!winLoad && n == 2){ showLoadImg(); return }
			curActiv = id, curN = n
			wrapper.animate({width:wrWidth}, durTime)
			elem.animate({width:elMin}, durTime)
			$('li', elem).animate({height:'60px', paddingLeft:'50px'}, durTime).addClass('menu-open')
		    cont.delay(d).animate({width:contWidth, height:contHeight}, durTime)
			isOpen = true
			$(this).trigger({
               type: 'menu-select',
               val: n,
			   stat: 'open'
            });
		}
		else{
			if( curActiv == id ){// close
			$(this).find('span').animate({opacity:0}, 200, 'linear')
			cont.animate({width:'0px', height:'0px'}, durTime/2)
			wrapper.delay(d).animate({width:'250px'}, durTime/2)
			elem.delay(d).animate({width:'250px'}, durTime)
			$('li', elem).delay(d).animate({height:'40px',  paddingLeft:'30px'}, durTime).removeClass('menu-open')
			isOpen = false, curActiv = '', curN = -1
			$(this).trigger({
               type: 'menu-select',
               val: n,
			   stat: 'close'
            });
			}
			else{ // change window
			if(!winLoad && n == 2){ showLoadImg(); return }
			   $('li', elem).eq(curN).find('span').animate({opacity:0}, 200, 'linear')
			   $(this).trigger({
               type: 'menu-select',
               val: n,
			   stat: 'change'
            });
			curActiv = id
			}
		}
	}
	init();
}
// ----
function Action(opt){
	var elem = $('#right-cont'),
	    n = opt.val,
		status = opt.stat,
		a = $('article', elem).eq(n),
		t = 200;

	if( status == 'open' ){ 
		if(n == 2){ 
		   portIsOpen = true ; 
		   if(!sliderStat) sliderStart();
		}
	    a.delay(100).animate({left: '0px'}, t, e_metod);
	}
	else {
	if( status == 'close' ){
		a.animate({left: contWidth}, t-200, e_metod); 
	    portIsOpen = false;
	    if(sliderStat) sliderStop();				 
	}
		else{
			if( n == 2 ){
			     portIsOpen = true ;
			     if(!sliderStat) sliderStart();
			}
			else { portIsOpen = false; 
			     if(sliderStat) sliderStop()
			}
			$('article', elem).eq(curN).animate({left: '-' + contWidth}, t, e_metod, function(){
				$(this).css('left', contWidth); curN = n
			})
			a.animate({left: '0px'}, t, e_metod)
		}
	}
}

function showLoadImg(){
		 $('.loading').css({display:'block', top:'2px'});

}
//---
function ScrollBar(sel, menu){
	var A = $(sel), elem = A.find('section'), sWrap = elem.prev('.scroll-bar-wrap'), sBar = sWrap.find('.scroll-bar'), scroller = sWrap.find('.scroller'),
		self = document.getElementById(sel.slice(1)),
		elH = elem.outerHeight(), text = elem.find('.text-wrapper'), textH = text.outerHeight(), 
		top = 0, t = 0,//text coords
		mDown = false, 
		downY, startY,
		Max = elem.outerHeight() - scroller.outerHeight(),
		textS = textH - elH

		if(textS > 0){
			 sWrap.css('display', 'block')
		     init() 
		}
		
       // -- INIT ---
		function init(){
		  sWrap.css('height', elH+'px');
		  if(msie8){
		  elem.css('padding-right', '95px')
		  $('.text-wrapper').css('padding-bottom', '30px')
		  }

	      scroller.mousedown(mouseDown)
		  sWrap.mousemove(mouseMove)
		  A.mouseup(mouseUp)
		  A.mouseleave(mouseUp)
		  $(window).keydown(keyDW)
		  
	      A.on('selectstart', false)
		  	  
		  // ---- mousewheel -------
		  if ( self.addEventListener) {
              self.addEventListener ("mousewheel", mouseScroll, false);  // IE9+, Opera, Chrome/Safari
              self.addEventListener ("DOMMouseScroll", mouseScroll, false);  // Firefox 
           } else { // IE<9
              self.attachEvent ("onmousewheel", mouseScroll);
           }
		  
	    }
//------
        function keyDW(event){
			var e = event
			if(e.ctrlKey) return;
			if( curActiv != menu ) return;
			
		    var d, k
			$.browser.opera ? k = 3 : k = 1
		    if(e.which == 38) d = -20
			if(e.which == 40) d = 20
			top += d*k
			t = Math.round(textS*top/Max)
			scrMove(1)
		    textMove(1)
		}

		function mouseDown(e){
           downY = e.pageY
		   mDown = true
		   startY = top
		}
		
		function mouseMove(e){
		   if (!mDown) return
		   A.css('cursor', 'pointer')
		   scroller.attr('active', '1')
		   top = startY + e.pageY - downY
		   t = Math.round(textS*top/Max)
		   scrMove(0)
		   textMove(0)
		}
		
		function mouseUp(){
		   if(mDown){
		   mDown = false
		   elem.css('cursor', 'default')
		   scroller.removeAttr('active')
		   A.css('cursor', 'default')
		   }
		}
		
		function mouseScroll(event){
			  e = event, k = 12

              if (!e.wheelDelta) {
                  e.wheelDelta = -40*e.detail // Firefox
              }
			  if(textS > 50) k -= textS / 50
			  if(k < 2) k = 2
			  
                t -= e.wheelDelta / k
				top = Math.round(Max*(t/textS))
			    textMove(1)
				scrMove(1)
				
              e.preventDefault ? e.preventDefault() : (e.returnValue = false)
		}
		
		function scrMove(st){
		   if(top < 0) top = 0
		   if(top > Max) top = Max
		   st ? scroller.stop().animate({top: top+'px'}, 500, 'easeOutCirc') : scroller.css('top', top+'px')
		}
		
		function textMove(st){
			var k = 0
			if(msie8) k = 5
			if(t < 0) t = 0
		    if(t > textS) t = textS + k
			st ? text.stop().animate({top: -t+'px'}, 500, 'easeOutCirc') : text.css('top', -t+'px')
		}
}

// --

function sliderStart(){
	 $('#slider').data('nivoslider').start();
	 sliderStat = true
}
function sliderStop(){ 
	 $('#slider').data('nivoslider').stop();
	 sliderStat = false
}

// --

function Portfolio(){
	var elem = $('#a3'), win = $('.port'),  len = win.length,
	    PREV = $('#port-prev'), 
	    NEXT = $('#port-next'),
		TITLE = $('#port-title'),
		arrClass = ['pt-slider', 'pt-galery', 'pt-map', 'pt-geostarter'],
		curNumber,
		t = 400 // duration
		
		
	function init(){
		curNumber = 0

		win.eq(curNumber).css('left', '0px') //показ начал окно
		TITLE.addClass(arrClass[curNumber])
		PREV.addClass('off')
		if(!msie8) $('.a-link').attr('title', 'Кликните картинку для перехода на сайт doberman.ru')
		
		PREV.click(function(){
			changeWin(-1)
		})
	
	    NEXT.click(function(){
			changeWin(1)
		})
		
		$('#slider a').click(function(){
			// +
		})
	}
	
	function changeWin(st){
		if(st == -1){
		   if(curNumber > 0){// left
		      if(curNumber == len - 1) NEXT.removeClass('off')
	          win.eq(curNumber).animate({left: contWidth}, t, e_metod)
			  win.eq(curNumber - 1).animate({left: "0px"}, t, e_metod)
			  TITLE.removeClass(arrClass[curNumber])
			  curNumber -= 1
			  TITLE.addClass(arrClass[curNumber])
			  changeSlider()
			  if(curNumber == 0) PREV.addClass('off')
		   }
		}
	    if(st == 1){
		   if(curNumber < len-1){// right
		      if(curNumber == 0) PREV.removeClass('off')
		      win.eq(curNumber).animate({left: '-' + contWidth}, t, e_metod)
		      win.eq(curNumber + 1).animate({left: "0px"}, t, e_metod)
			  TITLE.removeClass(arrClass[curNumber])
			  curNumber += 1
			  TITLE.addClass(arrClass[curNumber])
			  changeSlider()
			  if(curNumber == len - 1) NEXT.addClass('off')
		   }
		}
	}
	
	function changeSlider(){
		if( win.eq(curNumber).attr('id') == 'slider-wrapper' && sliderStat == false){
			sliderStart()
		}
		if( win.eq(curNumber).attr('id') != 'slider-wrapper' && sliderStat == true){
			sliderStop()
		}
	}
	init()
}