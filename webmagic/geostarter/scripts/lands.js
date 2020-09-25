// 20.09.12   Zet
var lands = [
	{n:'Австралия', ct:'oc', st:'Канберра', s:7692024, nas:'22016 2012', vvp:926, idom:'.au', t_cod:'+61'},
    {n:'Австрия', ct:'eu', st:'Вена', s:83871 , nas:'8404 2011', vvp:330, idom:'.at, .eu', t_cod:'+43'},	
	{n:'Азербайджан', ct:'az', st:'Баку', s:86600 , nas:'9235 2011', vvp:94, idom:'.az', t_cod:'+994'},
	{n:'Албания', ct:'eu', st:'Тирана', s:28748 , nas:'2832 2011', vvp:23, idom:'.al', t_cod:'+355'},
	{n:'Алжир', ct:'af', st:'Алжир', s:2381740, nas:'34895 2009', vvp:255, idom:'.dz', t_cod:'+213'},
    {n:'Ангола', ct:'af', st:'Луанда', s:1246700, nas:'18498 2009', vvp:105, idom:'.ao', t_cod:'+244'},
	{n:'Андорра', ct:'eu', st:'Андорра-ла-Велья', s:468, nas:'91 2010', vvp:4.9, idom:'.ad', t_cod:'+376'},
	{n:'Антигуа и Барбуда', ct:'ca', st:'Сент-Джонс', s:442, nas:'87 2009', vvp:1.6, idom:'.ag', t_cod:'+1-268'},
	{n:'Аргентина', ct:'sa', st:'Буэнос-Айрес', s:2766890, nas:'40091 2010', vvp:725.6, idom:'.ar', t_cod:'+54'},
	{n:'Армения', ct:'az', st:'Ереван', s:29743, nas:'3263 2011', vvp:18, idom:'.am', t_cod:'+374'},
	{n:'Афганистан', ct:'az', st:'Кабул', s:647500, nas:'28150 2009', vvp:21, idom:'.af', t_cod:'+93'},
	{n:'Багамы', ct:'ca', st:'Нассау', s:13939, nas:'354 2010', vvp:9.1, idom:'.bs', t_cod:'+1-242'},
	{n:'Бангладеш', ct:'az', st:'Дакка', s:144000, nas:'142319 2011', vvp:286, idom:'.bd', t_cod:'+880'},
	{n:'Барбадос', ct:'ca', st:'Бриджтаун', s:431, nas:'285 2009', vvp:6.2, idom:'.bb', t_cod:'+1-246'},
	{n:'Бахрейн', ct:'az', st:'Манама', s:750, nas:'1235 2011', vvp:31.5, idom:'.bh', t_cod:'+973'},
	{n:'Беларуссия', ct:'eu', st:'Минск', s:207600, nas:'9465 2012', vvp:131, idom:'.by', t_cod:'+375'},
	{n:'Белиз', ct:'cam', st:'Бельмопан', s:22966, nas:'308 2009', vvp:2.5, idom:'.bz', t_cod:'+501'},
	{n:'Бельгия', ct:'eu', st:'Брюссель', s:30528, nas:'10431 2011', vvp:419, idom:'.be, .eu', t_cod:'+32'},
	{n:'Бенин', ct:'af', st:'Порто-Ново', s:112622, nas:'8935 2009', vvp:13, idom:'.bj', t_cod:'+229'},
	{n:'Болгария', ct:'eu', st:'София', s:110994, nas:'7364 2011', vvp:102, idom:'.bg', t_cod:'+359'},
	{n:'Боливия', ct:'sa', st:'Сукре', s:1098581, nas:'9180 2010', vvp:51.6, idom:'.bo', t_cod:'+591'},
	{n:'Босния и Герцеговина', ct:'eu', st:'Сараево', s:51197, nas:'4622 2009', vvp:32, idom:'.ba', t_cod:'+387'},
	{n:'Ботсвана', ct:'af', st:'Габороне', s:581730, nas:'1990 2009', vvp:30, idom:'.bw', t_cod:'+267'},
	{n:'Бразилия', ct:'sa', st:'Бразилиа', s:8514877, nas:'190732 2010', vvp:2324, idom:'.br', t_cod:'+55'},
	{n:'Бруней', ct:'az', st:'Бандар-Сери-Бегаван', s:5765, nas:'402 2011', vvp:21, idom:'.bn', t_cod:'+673'},
	{n:'Буркина-Фасо', ct:'af', st:'Уагадугу', s:273187, nas:'15746 2009', vvp:17.8, idom:'.bf', t_cod:'+226'},
	{n:'Бурунди', ct:'af', st:'Бужумбура', s:27830, nas:'8988 2009', vvp:3.1, idom:'.bi', t_cod:'+257'},
	{n:'Бутан', ct:'az', st:'Тхимпху', s:38394, nas:'696 2005', vvp:4.3, idom:'.bt', t_cod:'+975'},
	{n:'Вануату', ct:'oc', st:'Порт-Вила', s:12190, nas:'243 2009', vvp:1, idom:'.vu', t_cod:'+678'},
	{n:'Великобритания', ct:'eu', st:'Лондон', s:243809, nas:'62698 2011', vvp:2290, idom:'.uk, .eu', t_cod:'+44'},
	{n:'Венгрия', ct:'eu', st:'Будапешт', s:93030, nas:'10014 2011', vvp:198, idom:'.hu, .eu', t_cod:'+36'},
	{n:'Венесуела', ct:'sa', st:'Каракас', s:916445, nas:'29335 2011', vvp:378.9, idom:'.ve', t_cod:'+58'},
	{n:'Восточный Тимор', ct:'az', st:'Дили', s:15007, nas:'947 2008', vvp:0.4, idom:'.tl', t_cod:'+670'},
	{n:'Вьетнам', ct:'az', st:'Ханой', s:331210, nas:'90549 2011', vvp:303.8, idom:'.vn', t_cod:'+84'},
	{n:'Габон', ct:'af', st:'Либревиль', s:267667, nas:'1498 2008', vvp:24.9, idom:'.ga', t_cod:'+241'},
	{n:'Гаити', ct:'ca', st:'Порт-о-Пренс', s:27750, nas:'9035 2009', vvp:12.5, idom:'.ht', t_cod:'+509'},
	{n:'Гайана', ct:'sa', st:'Джорджтаун', s:214970, nas:'751 2009', vvp:5.8, idom:'.gy', t_cod:'+592'},
	{n:'Гамбия', ct:'af', st:'Банжул', s:10380, nas:'1517 2008', vvp:3.5, idom:'.gm', t_cod:'+220'},
	{n:'Гана', ct:'af', st:'Аккра', s:238540, nas:'24233 2009', vvp:75.9, idom:'.gh', t_cod:'+233'},
	{n:'Гватемала', ct:'cam', st:'Гватемала', s:108890, nas:'14099 2012', vvp:75.7, idom:'.gt', t_cod:'+502'},
	{n:'Гвинея', ct:'af', st:'Конакри', s:245857, nas:'9402 2008', vvp:11.6, idom:'.gn', t_cod:'+224'},
	{n:'Гвинея-Бисау', ct:'af', st:'Бисау', s:36120, nas:'1629 2012', vvp:2, idom:'.gw', t_cod:'+245'},
	{n:'Германия', ct:'eu', st:'Берлин', s:357021, nas:'81306 2011', vvp:3139, idom:'.de', t_cod:'+49'},
	{n:'Гондурас', ct:'cam', st:'Тегусигальпа', s:112090, nas:'8297 2012', vvp:36, idom:'.hn', t_cod:'+504'},
	{n:'Гонконг', ct:'az', st:'-', s:1104, nas:'7154 2012', vvp:356, idom:'.hk', t_cod:'+852'},
	{n:'Гренада', ct:'ca', st:'Сент-Джорджес', s:344, nas:'90 2005', vvp:1.5, idom:'.gd', t_cod:'+1-473'},
	{n:'Греция', ct:'eu', st:'Афины', s:131957, nas:'10787 2011', vvp:298, idom:'.gr, .eu', t_cod:'+30'},
	{n:'Грузия', ct:'az', st:'Тбилиси', s:69700, nas:'4497 2012', vvp:25, idom:'.ge', t_cod:'+995'},
	{n:'Дания', ct:'eu', st:'Копенгаген', s:43094, nas:'5564 2011', vvp:209, idom:'.dk', t_cod:'+45'},
	{n:'Джибути', ct:'af', st:'Джибути', s:23200, nas:'820 2009', vvp:2.3, idom:'.dj', t_cod:'+253'},
	{n:'Доминика', ct:'ca', st:'Розо', s:754, nas:'73 2008', vvp:990, idom:'.dm', t_cod:'+1-767'},
	{n:'Доминиканская респ.', ct:'ca', st:'Санто-Доминго', s:48730, nas:'9650 2009', vvp:95, idom:'.do', t_cod:'+1-809, 1-829'},
	{n:'Египет', ct:'af', st:'Каир', s:1001450, nas:'80898 2011', vvp:526, idom:'.eg', t_cod:'+20'},
	{n:'Замбия', ct:'af', st:'Лусака', s:752614, nas:'14310 2011', vvp:22, idom:'.zm', t_cod:'+260'},
	{n:'Зимбабве', ct:'af', st:'Хараре', s:390580, nas:'12160 2008', vvp:6.2, idom:'.zw', t_cod:'+263'},
	{n:'Израиль', ct:'az', st:'Иерусалим', s:20770, nas:'7836 2011', vvp:238, idom:'.il', t_cod:'+972'},
	{n:'Индия', ct:'az', st:'Нью-Дели', s:3287590, nas:'1205075 2012', vvp:4515, idom:'.in', t_cod:'+91'},
	{n:'Индонезия', ct:'az', st:'Джакарта', s:1919440, nas:'248216 2012', vvp:1139, idom:'.id', t_cod:'+61'},
	{n:'Иордания', ct:'az', st:'Амман', s:92300, nas:'6260 2012', vvp:35, idom:'.jo', t_cod:'+962'},
	{n:'Ирак', ct:'az', st:'Багдад', s:437072, nas:'31129 2012', vvp:129, idom:'.iq', t_cod:'+964'},
	{n:'Иран', ct:'az', st:'Тегеран', s:1648000, nas:'78869 2012', vvp:1003, idom:'.ir', t_cod:'+98'},
	{n:'Ирландия', ct:'eu', st:'Дублин', s:70273, nas:'4581 2011', vvp:184, idom:'.ie', t_cod:'+353'},
	{n:'Исландия', ct:'eu', st:'Рейкьявик', s:103125, nas:'318 2010', vvp:12.5, idom:'.is', t_cod:'+354'},
	{n:'Испания', ct:'eu', st:'Мадрид', s:504782, nas:'47043 2012', vvp:1432, idom:'.es', t_cod:'+34'},
	{n:'Италия', ct:'eu', st:'Рим', s:309547, nas:'61261 2012', vvp:1871, idom:'.it', t_cod:'+39'},
	{n:'Йемен', ct:'az', st:'Сана', s:527970, nas:'24800 2011', vvp:64, idom:'.ye', t_cod:'+967'},
	{n:'Кабо-Верде', ct:'af', st:'Прая', s:4033, nas:'524 2012', vvp:3, idom:'.cv', t_cod:'+238'},
	{n:'Казахстан', ct:'az', st:'Астана', s:2724902, nas:'17522 2012', vvp:220, idom:'.kz', t_cod:'+7'},
	{n:'Каймановы острова', ct:'ca', st:'Джорджтаун', s:264, nas:'53 2012', vvp:2.3, idom:'.ky', t_cod:'+1-345'},
	{n:'Камбоджа', ct:'az', st:'Пномпень', s:181040, nas:'14805 2009', vvp:30, idom:'.kh', t_cod:'+855'},
	{n:'Камерун', ct:'af', st:'Яунде', s:475442, nas:'20130 2012', vvp:48, idom:'.cm', t_cod:'+237'},
	{n:'Канада', ct:'na', st:'Оттава', s:9984670, nas:'34300 2012', vvp:1414, idom:'.ca', t_cod:'+1'},
	{n:'Катар', ct:'az', st:'Доха', s:11586, nas:'1952 2012', vvp:184, idom:'.qa', t_cod:'+974'},
	{n:'Кения', ct:'af', st:'Найроби', s:582650, nas:'43013 2012', vvp:72, idom:'.ke', t_cod:'+254'},
	{n:'Кипр', ct:'eu', st:'Никосия', s:9250, nas:'1138 2012', vvp:24, idom:'.cy', t_cod:'+357'},
	{n:'Киргизия', ct:'az', st:'Бишкек', s:198500, nas:'5544 2012', vvp:6, idom:'.kg', t_cod:'+996'},
	{n:'Кирибати', ct:'oc', st:'Южная Тарава', s:812, nas:'101 2011', vvp:0.6, idom:'.ki', t_cod:'+686'},
	{n:'Китай', ct:'az', st:'Пекин', s:9596960, nas:'1343240 2012', vvp:11440, idom:'.cn', t_cod:'+86'},
	{n:'Колумбия', ct:'sa', st:'Богота', s:1141748, nas:'45239 2012', vvp:478, idom:'.co', t_cod:'+57'},
	{n:'Коморы', ct:'af', st:'Морони', s:1862, nas:'737 2012', vvp:0.85, idom:'.km', t_cod:'+269'},
	{n:'Конго', ct:'af', st:'Браззавиль', s:342000 , nas:'4366 2012', vvp:18.5, idom:'.cg', t_cod:'+242'},
	{n:'Конго(Заир)', ct:'af', st:'Киншаса', s:2345410, nas:'73599 2012', vvp:25.6, idom:'.cd', t_cod:'+243'},
	{n:'Корея северная', ct:'az', st:'Пхеньян', s:120540, nas:'24457 2009', vvp:40, idom:'.kp', t_cod:'+850'},
	{n:'Корея южная', ct:'az', st:'Сеул', s:99392, nas:'48860 2012', vvp:1574, idom:'.kr', t_cod:'+82'},
	{n:'Коста-Рика', ct:'cam', st:'Сан-Хосе', s:51100, nas:'4636 2012', vvp:55.7, idom:'.cr', t_cod:'+506'},
	{n:'Кот-д’Ивуар', ct:'af', st:'Ямусукро', s:322460, nas:'21075 2009', vvp:35, idom:'.ci', t_cod:'+225'},
	{n:'Куба', ct:'ca', st:'Гавана', s:110860 , nas:'11075 2012', vvp:114, idom:'.cu', t_cod:'+53'},
	{n:'Кувейт', ct:'az', st:'Эль-Кувейт', s:17818, nas:'3566 2010', vvp:155, idom:'.kw', t_cod:'+965'},
	{n:'Лаос', ct:'az', st:'Вьентьян', s:236800, nas:'6586 2012', vvp:17.7, idom:'.la', t_cod:'+856'},
	{n:'Латвия', ct:'eu', st:'Рига', s:64589, nas:'2192 2012', vvp:35, idom:'.lv, .eu', t_cod:'+371'},
	{n:'Лесото', ct:'af', st:'Масеру', s:30355, nas:'1930 2012', vvp:3.9, idom:'.ls', t_cod:'+266'},
	{n:'Либерия', ct:'af', st:'Монровия', s:111369, nas:'3888 2012', vvp:1.8, idom:'.lr', t_cod:'+231'},
	{n:'Ливан', ct:'az', st:'Бейрут', s:10452, nas:'4140 2012', vvp:60, idom:'.lb', t_cod:'+961'},
	{n:'Ливия', ct:'af', st:'Триполи', s:1759540, nas:'6734 2012', vvp:38, idom:'.ly', t_cod:'+218'},
	{n:'Литва', ct:'eu', st:'Вильнюс', s:65200, nas:'3526 2012', vvp:62.4, idom:'.lt', t_cod:'+370'},
	{n:'Лихтенштейн', ct:'eu', st:'Вадуц', s:160, nas:'37 2011', vvp:5, idom:'.li', t_cod:'+423'},
	{n:'Люксембург', ct:'eu', st:'Люксембург', s:2586, nas:'502 2010', vvp:65, idom:'.lu, .eu', t_cod:'+352'},
	{n:'Маврикий', ct:'af', st:'Порт-Луи', s:2040, nas:'1313 2011', vvp:20, idom:'.mu', t_cod:'+230'},
	{n:'Мавритания', ct:'af', st:'Нуакшот', s:1030700, nas:'3359 2012', vvp:7, idom:'.mr', t_cod:'+222'},
	{n:'Мадагаскар', ct:'af', st:'Антананариву', s:587041, nas:'22586 2012', vvp:20.7, idom:'.mg', t_cod:'+261'},
	{n:'Македония', ct:'eu', st:'Скопье', s:25333, nas:'2082 2012', vvp:21.6, idom:'.mk', t_cod:'+389'},
	{n:'Малави', ct:'af', st:'Лилонгве', s:118494, nas:'15500 2010', vvp:12, idom:'.mw', t_cod:'+265'},
	{n:'Малайзия', ct:'az', st:'Куала-Лумпур', s:329758, nas:'29180 2012', vvp:453, idom:'.my', t_cod:'+60'},
	{n:'Мали', ct:'af', st:'Бамако', s:1240192, nas:'14534 2012', vvp:18, idom:'.ml', t_cod:'+223'},
	{n:'Мальдивы', ct:'az', st:'Мале', s:298, nas:'395 2011', vvp:2.9, idom:'.mv', t_cod:'+960'},
	{n:'Мальта', ct:'eu', st:'Валлетта', s:316, nas:'410 2012', vvp:11, idom:'.mt', t_cod:'+356'},
	{n:'Марокко', ct:'af', st:'Рабат', s:446550, nas:'32382 2012', vvp:165, idom:'.ma', t_cod:'+212'},
	{n:'Маршалловы острова', ct:'oc', st:'Маджуро', s:181, nas:'68 2012', vvp:0.13, idom:'.mh', t_cod:'+692'},
	{n:'Мексика', ct:'na', st:'Мехико', s:1972550, nas:'114975 2012', vvp:1683, idom:'.mx', t_cod:'+52'},
	{n:'Микронезия', ct:'oc', st:'Паликир', s:702, nas:'106 2008', vvp:0.24, idom:'.fm', t_cod:'+691'},
	{n:'Мозамбик', ct:'af', st:'Мапуту', s:801590, nas:'21397 2012', vvp:24.2, idom:'.mz', t_cod:'+258'},
	{n:'Молдавия', ct:'eu', st:'Кишинёв', s:33846, nas:'3656 2012', vvp:12, idom:'.md', t_cod:'+373'},
	{n:'Монако', ct:'eu', st:'Монако', s:2, nas:'31 2011', vvp:5.5, idom:'.mc', t_cod:'+377'},
	{n:'Монголия', ct:'az', st:'Улан-Батор', s:1564116, nas:'3180 2012', vvp:13, idom:'.mn', t_cod:'+976'},
	{n:'Мьянма', ct:'az', st:'Нейпьидо', s:678500, nas:'54585 2012', vvp:84, idom:'.mm', t_cod:'+95'},
	{n:'Намибия', ct:'af', st:'Виндхук', s:825418, nas:'2166 2012', vvp:16, idom:'.na', t_cod:'+264'},
	{n:'Науру', ct:'oc', st:'-', s:21, nas:'10 2012', vvp:0.06, idom:'.nr', t_cod:'+674'},
	{n:'Непал', ct:'az', st:'Катманду', s:140800, nas:'29891 2012', vvp:38, idom:'.np', t_cod:'+977'},
	{n:'Нигер', ct:'af', st:'Ниамей', s:1267000, nas:'17079 2012', vvp:11.8, idom:'.ne', t_cod:'+227'},
	{n:'Нигерия', ct:'af', st:'Абуджа', s:923768, nas:'152217 2010', vvp:207, idom:'.ng', t_cod:'+234'},
	{n:'Нидерланды', ct:'eu', st:'Амстердам', s:41526, nas:'16731 2012', vvp:713, idom:'.nl, .eu', t_cod:'+31'},
	{n:'Никарагуа', ct:'cam', st:'Манагуа', s:129494, nas:'5728 2012', vvp:19, idom:'.ni', t_cod:'+505'},
	{n:'Новая Зеландия', ct:'oc', st:'Веллингтон', s:268680, nas:'4328 2012', vvp:124, idom:'.nz', t_cod:'+64'},
	{n:'Норвегия', ct:'eu', st:'Осло', s:385186, nas:'4707 2012', vvp:269, idom:'.no', t_cod:'+47'},
	{n:'Об. Арабские Эмираты', ct:'az', st:'Абу-Даби', s:83600, nas:'5314 2012', vvp:262, idom:'.ae', t_cod:'+971'},
	{n:'Оман', ct:'az', st:'Маскат', s:309500, nas:'3090 2012', vvp:82.8, idom:'.om', t_cod:'+968'},
	{n:'Пакистан', ct:'az', st:'Исламабад', s:803940, nas:'190291 2012', vvp:495, idom:'.pk', t_cod:'+92'},
	{n:'Палау', ct:'az', st:'Нгерулмуд', s:458, nas:'21 2012', vvp:0.17, idom:'.pw', t_cod:'+680'},
	{n:'Палестина', ct:'az', st:'Рамалла', s:6020, nas:'4016 2007', vvp:0, idom:'.ps', t_cod:'+970'},
	{n:'Панама', ct:'cam', st:'Панама', s:75517, nas:'3510 2012', vvp:51, idom:'.pa', t_cod:'+507'},
	{n:'Папуа-Новая Гвинея', ct:'oc', st:'Порт-Морсби', s:462840, nas:'6310 2012', vvp:17, idom:'.pg', t_cod:'+675'},
	{n:'Парагвай', ct:'sa', st:'Асунсьон', s:406752, nas:'6541 2012', vvp:36, idom:'.py', t_cod:'+595'},
	{n:'Перу', ct:'sa', st:'Лима', s:1285216, nas:'29550 2012', vvp:306, idom:'.pe', t_cod:'+51'},
	{n:'Польша', ct:'eu', st:'Варшава', s:312679, nas:'38415 2012', vvp:781.5, idom:'.pl', t_cod:'+48'},
	{n:'Португалия', ct:'eu', st:'Лиссабон', s:92081, nas:'10781 2012', vvp:252, idom:'.pt', t_cod:'+351'},
	{n:'Пуэрто-Рико', ct:'ca', st:'Сан-Хуан', s:9104, nas:'3999 2012', vvp:65, idom:'.pr, .us', t_cod:'+1(787), +1(939)'},
	{n:'Россия', ct:'eu', st:'Москва', s:17098246, nas:'138082 2012', vvp:2414, idom:'.ru, .рф', t_cod:'+7'},
	{n:'Руанда', ct:'af', st:'Кигали', s:26338, nas:'11690 2012', vvp:14, idom:'.rw', t_cod:'+250'},
	{n:'Румыния', ct:'eu', st:'Бухарест', s:238391, nas:'21848 2012', vvp:270.6, idom:'.ro', t_cod:'+40'},
	{n:'Сальвадор', ct:'cam', st:'Сан-Сальвадор', s:21040, nas:'6091 2012', vvp:45, idom:'.sv', t_cod:'+503'},
	{n:'Самоа', ct:'oc', st:'Апиа', s:2935, nas:'194 2012', vvp:1, idom:'.ws', t_cod:'+685'},
	{n:'Сан-Марино', ct:'eu', st:'Сан-Марино', s:61, nas:'32 2012', vvp:1, idom:'.sm', t_cod:'+378 0549'},
	{n:'Сан-Томе и Принсипи', ct:'af', st:'Сан-Томе', s:1001, nas:'183 2012', vvp:0.38, idom:'.st', t_cod:'+239'},
	{n:'Саудовская Аравия', ct:'az', st:'Эр-Рияд', s:2218000, nas:'26535 2012', vvp:691, idom:'.sa', t_cod:'+966'},
	{n:'Свазиленд', ct:'af', st:'Мбабане', s:17363, nas:'1387 2012', vvp:6.3, idom:'.sz', t_cod:'+268'},
	{n:'Сейшелы', ct:'af', st:'Виктория', s:455, nas:'90 2012', vvp:2, idom:'.sc', t_cod:'+248'},
	{n:'Сенегал', ct:'af', st:'Дакар', s:196722, nas:'12970 2012', vvp:25.5, idom:'.sn', t_cod:'+221'},
	{n:'Сент-Винсент и Гренадины', ct:'ca', st:'Кингстаун', s:389, nas:'103 2012', vvp:1.3, idom:'.vc', t_cod:'+1-784'},
	{n:'Сент-Китс и Невис', ct:'ca', st:'Бастер', s:261, nas:'51 2012', vvp:0.9, idom:'.kn', t_cod:'+1-869'},
	{n:'Сент-Люсия', ct:'ca', st:'Кастри', s:617, nas:'162 2012', vvp:2, idom:'.lc', t_cod:'+1-758'},
	{n:'Сербия', ct:'eu', st:'Белград', s:88361, nas:'7277 2012', vvp:80, idom:'.rs', t_cod:'+381'},
	{n:'Сингапур', ct:'az', st:'Сингапур', s:714, nas:'5354 2012', vvp:319, idom:'.sg', t_cod:'+65'},
	{n:'Сирия', ct:'az', st:'Дамаск', s:185180, nas:'22530 2012', vvp:107, idom:'.sy', t_cod:'+963'},
	{n:'Словакия', ct:'eu', st:'Братислава', s:48845, nas:'5483 2012', vvp:129, idom:'.sk', t_cod:'+421'},
	{n:'Словения', ct:'eu', st:'Любляна', s:20253, nas:'1997 2012', vvp:59, idom:'.si', t_cod:'+386'},
	{n:'США', ct:'na', st:'Вашингтон', s:9518900, nas:'313847 2012', vvp:15290, idom:'.us', t_cod:'+1'},
	{n:'Соломоновы Острова', ct:'oc', st:'Хониара', s:28450, nas:'585 2012', vvp:1.7, idom:'.sb', t_cod:'+677'},
	{n:'Сомали', ct:'af', st:'Могадишо', s:637657, nas:'10086 2012', vvp:6, idom:'.so', t_cod:'+252'},
	{n:'Судан', ct:'af', st:'Хартум', s:1886068, nas:'34207 2011', vvp:90, idom:'.sd', t_cod:'+249'},
	{n:'Суринам', ct:'sa', st:'Парамарибо', s:163270, nas:'560 2012', vvp:5, idom:'.sr', t_cod:'+597'},
	{n:'Сьерра-Леоне', ct:'af', st:'Фритаун', s:71740, nas:'5486 2012', vvp:5, idom:'.sl', t_cod:'+232'},
	{n:'Таджикистан', ct:'az', st:'Душанбе', s:142000, nas:'7768 2012', vvp:16, idom:'.tj', t_cod:'+992'},
	{n:'Таиланд', ct:'az', st:'Бангкок', s:514000, nas:'67091 2012', vvp:610, idom:'.th', t_cod:'+66'},
	{n:'Танзания', ct:'af', st:'Дар-эс-Салам', s:945203, nas:'43602 2012', vvp:65, idom:'.tz', t_cod:'+255'},
	{n:'Того', ct:'af', st:'Ломе', s:56785, nas:'6961 2012', vvp:6.5, idom:'.tg', t_cod:'+228'},
	{n:'Тонга', ct:'oc', st:'Нукуалофа', s:748, nas:'106 2012', vvp:0.8, idom:'.to', t_cod:'+676'},
	{n:'Тринидад и Тобаго', ct:'ca', st:'Порт-оф-Спейн', s:5128, nas:'1226 2011', vvp:27, idom:'.tt', t_cod:'+1-868'},
	{n:'Тувалу', ct:'oc', st:'Фунафути', s:26, nas:'10.6 2012', vvp:0.04, idom:'.tv', t_cod:'+688'},
	{n:'Тунис', ct:'af', st:'Тунис', s:163610, nas:'10733 2012', vvp:102, idom:'.tn', t_cod:'+216'},
	{n:'Туркменистан', ct:'az', st:'Ашхабад', s:491200, nas:'5055 2012', vvp:44, idom:'.tm', t_cod:'+993'},
	{n:'Турция', ct:'az', st:'Анкара', s:783562, nas:'79749 2012', vvp:1087, idom:'.tr', t_cod:'+90'},
	{n:'Уганда', ct:'af', st:'Кампала', s:236040, nas:'35873 2012', vvp:47, idom:'.ug', t_cod:'+256'},
	{n:'Узбекистан', ct:'az', st:'Ташкент', s:448900, nas:'28394 2012', vvp:96, idom:'.uz', t_cod:'+998'},
	{n:'Украина', ct:'eu', st:'Киев', s:603628, nas:'44854 2012', vvp:333.7, idom:'.ua, .укр', t_cod:'+380'},
	{n:'Уругвай', ct:'sa', st:'Монтевидео', s:176220, nas:'3316 2012', vvp:51.6, idom:'.uy', t_cod:'+598'},
	{n:'Фиджи', ct:'oc', st:'Сува', s:18274, nas:'890 2012', vvp:4, idom:'.fj', t_cod:'+679'},
	{n:'Филиппины', ct:'az', st:'Манила', s:299764, nas:'103775 2012', vvp:395, idom:'.ph', t_cod:'+63'},
	{n:'Финляндия', ct:'eu', st:'Хельсинки', s:338424, nas:'5263 2012', vvp:198, idom:'.fi', t_cod:'+358'},
	{n:'Франция', ct:'eu', st:'Париж', s:551500, nas:'65631 2012', vvp:2246, idom:'.fr', t_cod:'+33'},
	{n:'Гвиана', ct:'sa', st:'Кайенна', s:91000, nas:'230 2010', vvp:0, idom:'.gf', t_cod:'+594'},
	{n:'Хорватия', ct:'eu', st:'Загреб', s:56594, nas:'4480 2012', vvp:81, idom:'.hr', t_cod:'+385'},
	{n:'ЦАР', ct:'af', st:'Банги', s:622984, nas:'5057 2012', vvp:3.7, idom:'.cf', t_cod:'+236'},
	{n:'Чад', ct:'af', st:'Нджамена', s:1284000, nas:'10976 2012', vvp:20, idom:'.td', t_cod:'+235'},
	{n:'Черногория', ct:'eu', st:'Цетине', s:13812, nas:'657 2012', vvp:7, idom:'.me, .cs, .yu', t_cod:'+382'},
	{n:'Чехия', ct:'eu', st:'Прага', s:78866, nas:'10177 2012', vvp:289, idom:'.cz', t_cod:'+420'},
	{n:'Чили', ct:'sa', st:'Сантьяго', s:756950, nas:'17067 2012', vvp:303.5, idom:'.cl', t_cod:'+56'},
	{n:'Швейцария', ct:'eu', st:'Берн', s:41284, nas:'7656 2012', vvp:344, idom:'.ch', t_cod:'+41'},
	{n:'Швеция', ct:'eu', st:'Стокгольм', s:449964, nas:'9104 2012', vvp:387, idom:'.se', t_cod:'+46'},
	{n:'Шри-Ланка', ct:'az', st:'Коломбо', s:65610, nas:'21481 2012', vvp:118, idom:'.lk', t_cod:'+94'},
	{n:'Эквадор', ct:'sa', st:'Кито', s:283560, nas:'15224 2012', vvp:129, idom:'.ec', t_cod:'+593'},
	{n:'Экватор. Гвинея', ct:'af', st:'Малабо', s:28051, nas:'680 2011', vvp:26.5, idom:'.gq', t_cod:'+240'},
	{n:'Эритрея', ct:'af', st:'Асмэра', s:121100, nas:'6086 2012', vvp:4, idom:'.er', t_cod:'+291'},
	{n:'Эстония', ct:'eu', st:'Таллин', s:45226, nas:'1275 2012', vvp:27.7, idom:'.ee, .eu', t_cod:'+372'},
	{n:'Эфиопия', ct:'af', st:'Аддис-Абеба', s:1104300, nas:'93816 2012', vvp:96, idom:'.et', t_cod:'+251'},
	{n:'ЮАР', ct:'af', st:'Претория', s:1219912, nas:'48810 2012', vvp:562, idom:'.za', t_cod:'+27'},
	{n:'Южный Судан', ct:'af', st:'Джуба', s:619745, nas:'10625 2012', vvp:0, idom:'.ss', t_cod:'+211'},
	{n:'Ямайка', ct:'ca', st:'Кингстон', s:10991, nas:'2889 2012', vvp:25, idom:'.jm', t_cod:'+1-876'},
	{n:'Япония', ct:'az', st:'Токио', s:377944, nas:'127368 2012', vvp:4497, idom:'.jp', t_cod:'+81'}
	
]