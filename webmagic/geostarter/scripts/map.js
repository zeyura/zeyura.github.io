// 2012  zet
function Map(){
 var self = this;
 var isEnabled = true;
 this.isOpen = false;
 Render();
 
 this.getCont = function(sel){
  if($.browser.msie && parseInt($.browser.version) < 9 ){
	  $(sel).css({display:'block'});
    
  }
  else $(sel).css({display:'block',opacity:'0'}).animate({'opacity':1}, 200);
 }
 this.hideCont = function(sel){ 
  $(sel).css('display', 'none') ;
 }
 
 function Render(){
  for(var i = 0; i < lands.length; i++){ 
	 var s = getLand(lands[i].ct); 
	 $(s).find('ul').append( '<li><a href="#" >'+lands[i].n+'</a></li>' ); 
  }
 }
 function getLand(c){
	switch(c){
	  case 'sa': return '#menu-sam';
	  case 'na': return '#menu-nam';	
	  case 'cam': return '#menu-cam';	
	  case 'ca': return '#menu-car';	
	  case 'af': return '#menu-afr';	
	  case 'az': return '#menu-azia';	
	  case 'eu': return '#menu-euro';	
	  case 'oc': return '#menu-ocean';	
	}
 }
 
 this.showMenu = function(event, sel){
	event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true); 
    var e = event || window.event ;
   if (this.isOpen) this.hideMenu(); 
   var mapOff = $('#map').offset();
   var mapW = $('#map').outerWidth();
   if(e.pageX == null ){//IE<9
	 var html = document.documentElement
     var body = document.body
     e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0)
     e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0)
   }
   var X = e.pageX - mapOff.left,
       Y = e.pageY - mapOff.top,
       W = $(window).outerWidth(),
       H = $(window).outerHeight(),
	   h = $(sel).outerHeight();
   if(e.pageX > (W - 120)) X -= 110;   
   if(X > (mapW - 120)) X = mapW - 130;
   var wY = e.pageY - $(document).scrollTop();
   if( wY > (H - h)) Y -= wY - H + h;
   if(Y < -mapOff.top) Y = 10 - mapOff.top;
   
   $(sel).css({'left': X - 5, 'top': Y - 30, 'display': 'block', 'opacity': 0})
         .animate({opacity: "1", top: '+=20px'}, 200, 'swing', function(){ self.isOpen = true });
   
 }
 
 this.hideMenu = function(){
	$('.menu-cont').each(function(i) {
        $(this).hide();
    }); 
	self.isOpen = false;
 }
 
}

var menu = {citys:['Шанхай', 'Сан-Паулу', 'Стамбул', 'Карачи', 'Токио', 'Мумбаи', 'Нью-Дели', 'Москва', 'Сеул', 'Пекин', 'Джакарта', 'Рио-де-Жанейро', 'Мехико', 'Киншаса', 'Нью-Йорк', 'Каир', 'Лагос', 'Лондон', 'Лима', 'Богота', 'Тегеран' ],
			rivers:['Амазонка', 'Нил', 'Янцзы', 'Миссисипи', 'Хуанхе', 'Обь', 'Парана', 'Меконг', 'Амур', 'Лена', 'Конго', 'Макензи', 'Нигер', 'Енисей', 'Волга', 'Инд', 'Юкон', 'Дунай', 'Ориноко' ],
			meers:['Филиппинское', 'Коралловое', 'Аравийское', 'Южно-Китайское', 'Море Уэдделла', 'Карибское', 'Средиземное', 'Тасманово', 'Берингово', 'Бенгальский залив' ],
			lakes:['Каспийское море', 'Верхнее', 'Виктория', 'Гурон', 'Мичиган', 'Танганьика', 'Байкал', 'Малави', 'Эри', 'Чад', 'Виннипег', 'Балхаш'],
			insels:['Гренландия', 'Новая Гвинея', 'Калимантан', 'Мадагаскар', 'Баффинова Земля', 'Суматра', 'Хонсю', 'Великобритания', 'Виктория', 'Элсмир', 'Сулавеси', 'Ява', 'Ньюфаундленд', 'Куба'],
			wodp:['Анхель', 'Тугела', 'Три сестры', 'Олоупена', 'Умбилла', 'Виннуфоссен', 'Балайфоссен', 'Пуукаоку'],
			wulkans:['Охос-дель-Саладо', 'Льюльяйльяко', 'Сан-Педро', 'Котопахи', 'Килиманджаро', 'Орисаба', 'Эльбрус', 'Попокатепетль', 'Ключевская сопка', 'Рейнир', 'Тахумулько', 'Этна', 'Гекла', 'Кракатау'],
			bergs:['Джомолунгма', 'Чогори', 'Канченджанга', 'Аннапурна', 'Аконкагуа', 'Мак-Кинли', 'Килиманджаро', 'Эльбрус', 'Монблан', 'Массив Винсон', 'Косцюшко'],
			deserts:['Сахара', 'Ливийская', 'Нубийская', 'Гоби', 'Большой Бассейн', 'Калахари', 'Патагонская', 'Каракумы', 'Кызылкум', 'Сонора', 'Такла-Макан']
			
}

var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']