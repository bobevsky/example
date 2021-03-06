$(function(){
	var posts = [{
		"id":"1",
		"image":"1",
		"title":"Hello Kitty",
		"category":"Енергија",
		"description":"Едноставна и кратка групна игра, целта е да успеете некого да насмеете. Учесниците се делат во две групи, 'мачиња' и 'кучиња'. Кучињата се обидуваат да измамат насмевка од мачињата, или уште подобро, гласно смеење. Последниот што ќе остане е победник!",
		"time":"5-30 минути",
		"players":"2-40+",
		"steps": [
		{
			"step": "Чекор 1",
			"text" : "Со селотејп направете линија и поделете го просторот на два дела. \n Поделете ја групата на две спротивни страни. Едната страна се мачиња, другата кучиња. ",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text" : "На мачињата им е забрането да се насмеат. \n Кучињата треба да им кажат здраво на мачињата на секаков можен начин, со цел да ги насмеат. Кучињата не смеат да ја поминуваат линијата.",
			"stepImg": ""
		},
		{
			"step": "Чекор 3",
			"text" :"Кога едно маче ќе се насмее, автоматски станува куче и преминува на другата страна од просторот. Продолжете додека не остане последното маче, кое е победник.",
			"stepImg": ""
		}
		],
		"level":"Почетно",
		"materials": "/"
	},
	{
		"id":"2",
		"image":"2",
		"title":"Dance, Dance, Dance",
		"category":"Енергија",
		"description":"Во овој краток energizer, учесниците танцуваат во помали тимови. Периодично, музиката се менува а лидерот на танцот заедно со неа. Идејата да се создаде забавна енергија во групата.",
		"time":"5-30 минути",
		"players":"10-40+",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Oрганизирајте ја групата во тимови од 3-5 луѓе.",
			"stepImg": "1"
		},
		{
			"step": "Чекор 2",
			"text": "На почетокот објаснете дека во секоја група, едно лице започнува да танцува кога музиката стартува. Останатите од неговата група, го следат танцот. Кога песната ќе се смени, друг член од тимот станува новиот лидер. \n Менувајте ја песната на секои 30 секунди. Пуштете онолку песни колку што е доволно за секој член од групата да биде лидер барем еднаш.",
			"stepImg": "2"
		}
		],
		"level":"Почетно",
		"materials": "/"
	},
	{
		"id":"3",
		"image":"3",
		"title":"Bang",
		"category":"Енергија",
		"description":"Bang е групна игра која се игра во круг, каде што учесниците мора да реагираат брзо или во спротивно ќе се соочат со елиминација. Едно лице стои во средината на кругот како шериф, посочувајќи им на други игра",
		"time":"5-30 минути",
		"players":"10-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Групата стои во круг. Едно лице стои во средината како шериф.",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text": "Шерифот се врти брзо наоколу, потоа поентира кон некого од групата и извикува “bang!” \n Поентираниот член се крие што е можно побрзо. Двајцата кои стојат до поентираниот, мора веднаш да поентираат еден кон друг, извикувајќи си ги имињата. \n Личноста која последна ќе го извика името на останатиот, е надвор од игра. Откако ќе останат само двајца, стојат на средина од собата еден до друг, со свртени грбови. Шерифот кажува броеви по случаен избор. На секој непарен број, учесниците прават чекор подалеку еден од друг. \n На првиот парен број се подготвуваат, се вртат набрзина и прават  “bang!” еден кон друг. \n Најбрзиот е победник.",
			"stepImg": ""
		}
		],
		"level":"Почетно",
		"materials":"/"
	},
	{
		"id":"4",
		"image":"4",
		"title":"I love you honey",
		"category":"Енергија",
		"description":"Едноставна и лесна група игра, со цел да се насмеете еден од друг. Оваа игра генерира смеа, и им помага на групите да градат доверба и отвореност преку игра.",
		"time":"5-30 минути",
		"players":"10-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Групата седи или стои во круг. Во средината има една личност.",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text": "Личноста од средината, оди до една личност од кругот и и вели: \"Те сакам, нема да се насмееш?\" Избраната личност мора да одговори: \"Те сакам, но едноставно не можам да се насмеам.\" \n Aко избраната личност се насмее,  си ги заменуваат местата со личноста од средината. Повторете го циклусот 6-9 пати, се додека смеата во групата не го достигне својот врв.",
			"stepImg": "3"
		}
		],
		"level":"Почетно",
		"materials":"/"
	},
	{
		"id":"5",
		"image":"5",
		"title":"Human Machine",
		"category":"Енергија",
		"description":"Оваа група им овозможува на учесниците да се двжат и да работат заедно на начин кој генерира енергија и соработка.\n Еден по еден, членовите од групата стануваат дел од машината, секој од нив прави различно движење и звук, додека целата група не започне да работи заедно како едно.",
		"time":"5-30 минути",
		"players":"10-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Застанете во голем круг. Објаснете и на групата дека нивна задача е да изградат човечка машина. Секој поединец ќе стане еден подвижен дел од машината.",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text": "Една личност влегува во кругот и започнува да прави повторувачки звук по избор, додека мавта со едната рака. По 5 секунди, друга личност влегува во круг и се поврзува со првата личност, исто така правејќи свој звук и движење.\n Продолжете со изградба на машината, додека не се поврзат сите, и секој не направи свое движење и звук.",
			"stepImg": ""
		}
		],
		"level":"Почетно",
		"materials":"/"
	},
	{
		"id":"6",
		"image":"6",
		"title":"Love your neighbour",
		"category":"Енергија",
		"description":"Во оваа забавна и активна групна игра, учесниците седат во круг, со едно лице во средината. Лицето во средината прашува различни прашања кои ги принудуваат луѓето брзо да станат и да трчаат  за да најдат друго место. Едно лице секогаш останува во средината без седиште. Играта е брза и многу физичка и брзо генерира смеа. Ефикасна е за зајакнување на енергијата.",
		"time":"5-30 минути",
		"players":"10-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Сите седат во круг на столици. Треба да има доволно столици за целата група, минус една. За почеток, едно лице стои во средината. Тој или таа го прашува некој кој седи во кругот: \"Дали го сакаш својот сосед?\"",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text": "Лицето може да одговори со да или не.\n Ако  одговори ДА, значи дека двeтe седишта на лева и десна страна мора да си ги сменат местата. Целта на лицето во средината е секогаш да добие место. Кога двајцата ќе се префрлат, тој се обидува брзо да седне на една од нивните столици. Едно лице секогаш завршува без седиште.\n Ако одговори НЕ, мора да го продолжи својот одговор со \"Но, јас ги сакам луѓето ...\" и додадете карактеристика што ќе важи за членовите на групата. На пример, \"Не, но ги сакам луѓето со долга коса\" или \"Не, но ги сакам луѓето што зборуваат француски\". Тогаш секој со таа карактеристика мора да стане и да најде ново седиште.\n Секогаш некој останува во средината и процесот се повторува.",
			"stepImg": "4"
		}
		],
		"level":"Почетно",
		"materials":"/"
	},
	{
		"id":"7",
		"image":"7",
		"title":"Тhe shouting game",
		"category":"Енергија",
		"description":"Оваа едноставна групна игра се игра во круг. Учесниците постојано избираат една друга личност за да  ја погледнат, надевајќи се дека тоа лице нема да гледа во нив. Секогаш кога се прави контакт со очите помеѓу двајца учесници, и двајцата мора да викаат гласно и да се исчезнат назад. Потоа се елиминираат. Играта генерира смеа и ја зголемува енергијата во една група.",
		"time":"5-30 минути",
		"players":"10-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Групата стои рамо до рамо во круг. Секој мора да биде во можност да ги види очите на сите други.\n Објаснете дека ќе давате две наредби постојано, \"глава доле\" и \"глава горе\". Кога ќе кажете \"глава доле\", сите гледаат во нивните нозе.",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text": "Кога ќе кажете \"глава горе\", сите гледаат нагоре и веднаш погледнуваат директно во главата на друга личност во кругот.\n Постојат две можни последици: кога некој гледа нагоре во некој што гледа во некој друг, ништо не се случува; но кога некое лице гледа во оној што е во потрага по нив, мора и двајцата да вриснат многу силно. \n Тие двајца потоа се \"надвор\" и стојат надвор од кругот за да ги набљудуваат останатите. Откако \"врискачите\" го напуштаат кругот, кругот се затвора и се повторува процесот сè додека не останат само две лица. Последните двајца треба да го направат тоа уште еднаш, иако исходот е неминовен заклучок.",
			"stepImg": ""
		}
		],
		"level":"Почетно",
		"materials":"/"
	},
	{
		"id":"8",
		"image":"8",
		"title":"What are you doing",
		"category":"Енергија",
		"description":"Ова е едноставна драма игра во која учесниците меѓусебно се прашуваат: \"Што правиш?\" а потоа одглумуваат различни одговори. Иако е едноставна, ја зафаќа имагинацијата и ги предизвикува учесниците надвор од нивната комфорт зона.",
		"time":"5-30 минути",
		"players":"10-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Групата стои во круг.",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text": "Едно лице влегува во кругот и започнува некакво дејство (на пример, четкање на коса или пржење на јајце). Тие продолжуваат додека друг член на групата не влезе во круг и не праша: \"Што правиш?\" Првата личност реагира опишувајќи било каква  друга акција освен таа што веќе ја прави. На пример, ако се преправа дека ја четка косата, може да каже нешто како \"играм хокеј\". Второто лице тогаш мора да почне да игра хокеј.\n Продолжете додека повеќето или сите членови имаат шанса да стигнат до средината. Охрабрете ги учесниците да бидат креативни со активностите.",
			"stepImg": ""
		}
		],
		"level":"Почетно",
		"materials":""
	},
	{
		"id":"9",
		"image":"9",
		"title":"Mazunga",
		"category":"Енергија",
		"description":"Овој брз и гласен energizer е многу ефикасен за зголемување на енергијата на групата за многу краток временски период. Групата стои во кругот и започнува да вели \"Maaaah ...\", звук кој се испраќа околу кругот гласно. Станува погласно и погласно додека патува околу кругот сè додека не се заобиколи и заврши со громогласен, колективен \"ZUNGA!\"",
		"time":"5-30 минути",
		"players":"10-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Групата стои во круг.",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text": "Едно лице започнува со тоа што ги испружува рацете директно во центарот на кругот, малку виткајќи ги колена и извикувајќи продолжен \"Maaaaaaaahh ....!\" Тој го продолжува звукот како личноста до него го копира ова, и следното лице го копира ова, итн.\n Секој продолжува да вика \"Maaaaaaaahh ...!\" Додека кругот не заврши и не се врати кај лицето кое започнало. Ова лице потоа ги крева рацете во воздух и го завршува извикот со екстра силна \"aaZUNGA!\". Овој финален звук и движење треба да се направи истовремено од целата група, создавајќи чувство дека подот се буди. Често групите не можат да го синхронизираат завршетокот во првиот обид за да може да биде добро да се обиде неколку пати.",
			"stepImg": ""
		}
		],
		"level":"Почетно",
		"materials":"/"
	},
	{
		"id":"10",
		"image":"10",
		"title":"Sync Claps",
		"category":"Енергија",
		"description":"Вежбата во овој круг е едноставна, но предизвикувачка и многу ефективна за генерирање на фокус и усогласување во група. Учесниците стојат во круг и кратко ракоплескаат Групата се обидува да го поместува ракоплесот околу кругот побрзо и побрзо со колку што е можно поголема синхронизација. Вежбата е уште попредизвикувачка кога се воведува \"двојно ракоплескање\" и мора да се смени насоката.",
		"time":"5-30 минути",
		"players":"10-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Групата стои во круг.",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text": "Едно лице започнува (лице А). Тие се свртуваат кон личноста до нив (лице Б) и двата ракоплескаат во исто време, додека прават контакт со очите, што е можно посинхронизирано. Лицето Б потоа се претвора во лице Ц и истовремено ракоплескаат. Вака се продолжува низ целиот круг. Групата треба да се обиде да го носи ракоплесот низ кругот се побрзо и побрзо со со колку што е можно посинхронизирани ракоплеси.",
			"stepImg": ""
		},
		{
			"step": "Чекор 3",
			"text": "Кога групата ќе го совлада чекорот погоре, воведете двоен ракоплес. Кога еден пар ракоплеска два пати, ракоплесот се менува обратно. Ова претставува предизвик, бидејќи паровите мора невербално да се согласат дали да ракоплеснат еднаш или два пати. Групата мора да биде високо фокусирана и внимателна за да се движи ракоплесот непречено околу кругот во овој чекор.",
			"stepImg": ""
		}
		],
		"level":"Средно",
		"materials":"/"
	},
	{
		"id":"11",
		"image":"11",
		"title":"Shake Down",
		"category":"Енергија",
		"description":"Во овој краток и физички energizer, групата го растресува своето тело еден дел по еден, во исто време. Почнувајќи со осум тресења од десната рака, потоа осум тресења од левата страна, осум тресења на десната нога, потоа осум тресења на левата нога. Се продолжува во круг од 4 тресења на секој дел, а потоа два, потоа еден, завршувајќи со големо расположение. Добар energizer кога времето е ограничено и главната цел е да се раздвижат луѓето.",
		"time":"5-30 минути",
		"players":"10-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Групата стои во круг. Секој треба да ја рашири раката на едната страна од себе.",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text": "Групата го извршува \"растресувањето надолу\" заедно, броејќи гласно заедно како што се движат.\n Прво, 8 тресења на десната рака, 8 тресење на левата рака, 8 тресења на десната нога и 8 тресења на левата нога. Секој пат, броејќи \"1 - 2 - 3 - 4 - 5 - 6 - 7 - 8!\" \n Следно, 4 тресење на секоја страна. Потоа по 2 тресење на секоја страна. Потоа 1 тресење на секоја.\n Растресувањето  завршува со гласно расположение.",
			"stepImg": ""
		}
		],
		"level":"Почетно",
		"materials":"/"
	},
	{
		"image": 12,
		"title": "Тhe 5 Whys",
		"category": "Иновации",
		"description": "Овој едноставен и моќен метод е корисен за откривање на јадрото на проблемот или предизвикот. Како што сугерира насловот, групата дефинира проблеми, а потоа го поставува прашањето 'зошто' пет пати, често користејќи го даденото објаснување како почетна точка за креативно решавање на проблеми.",
		"time": "30-60 минути",
		"players": "2-10",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Работете како група за да креирате изјава за проблем. Ова помага да се собере групата заедно и да се фокусира околу специфичниот предизвик. Напишете го на врвот на хартијата / таблата / флипчартoт. Изјавата за проблемот треба да биде сопствена изјава, формулирана што е можно поконцизно. \nПример: \"Ние трошиме премногу пари во нашата канцеларија\". /\"Клиентите се незадоволни од квалитетот на нашиот најнов производ\".",
			"stepImg": "5"
		},
		{
			"step": "Чекор 2",
			"text": "Работете како група за да креирате изјава за проблем. Ова помага да се собере групата заедно и да се фокусира околу специфичниот предизвик. Напишете го на врвот на хартијата / таблата / флипчарт. Изјавата за проблемот треба да биде единствена изјава, формулирана како концизно можно.\nна пр. \"Ние трошиме премногу пари во нашата германска канцеларија\". / \"Клиентите се незадоволни од квалитетот на нашиот најнов производ\"",
			"stepImg": "6"
		},
		{
			"step": "Чекор 3",
			"text": "Прашајте ја групата: Зошто го имаме овој проблем? Разговарајте за одговорот. Обидете се со уште некоја изјава за проблем.",
			"stepImg": "6"
		},
		{
			"step": "Чекор 4",
			"text": "Прашајте ја групата повторно: Зошто го имаме овој проблем? Повторно, дискутирајте за одговорот.",
			"stepImg": ""
		},
		{
			"step": "Чекор 5",
			"text": "Ако групата се чувствува како да ја идентификувалa основната причина за проблемот, тогаш може да престанете да прашувате зошто. Ако не, тогаш продолжете со циклусот.",
			"stepImg": "7"
		},
		{
			"step": "Чекор 6",
			"text": "Откако ќе ја имате изјавата за проблемот од корен, прашајте ја групата како би сакале да продолжите да ја решите. Можете да користите една од методите за генерирање на идеи во алатникот за да започнете да креирате нови идеи за решавање на проблемот.",
			"stepImg": ""
		}
		],
		"materials": "Пенкала \n,Бела табла или флипчарт, листови",
		"level": "Почетно",
		"id": 12
	},
	{
		"image": 13,
		"title": "Diffusion Curve Reflection",
		"category": "Иновации",
		"description": "Kривата на дифузија е активност на размислување и дискусија врз основа на теоријата на дифузија на иновации. Користејќи ги основните принципи на кривата на дифузијата, активноста има за цел учесниците да размислуваат за прашањето: во кои области од мојот живот сум јас: иноватор, early adopter, рано мнозинство, доцно мнозинство или заостанувaм?",
		"time": "5-30 минути",
		"players": "2-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Користејќи лента на подот, пресоздајте модел на дифузна крива. Направете ја колку што е можно поголема. Јасно означете ги различните категории во рамките на кривата на дифузија: иноватори; early adopters; рано мнозинство; доцнo мнозинство; заостанување.\nДифузијата на иновациите е теорија која се обидува да објасни како, зошто и според која стапка на нови идеи и технологија се шири меѓу нас. Постои точка во која иновацијата достигнува критична маса. Категориите се: иноватори, early adopters, рано мнозинство, доцна мнозинство и оние кои заостануваат.",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text": "Замолете ги учесниците да поминат неколку минути за да размислат за следните прашања:\nВо кој дел од мојата работа / живот сум или сум бил иноватор?\nВо кој дел од мојата работа / живот сум или сум бил early adopter?\nВо кој дел од мојата работа / живот сум или сум бил раномнозинство?\nВо кој дел од мојата работа / живот сум или сум бил доцно мнозинство?\nВо кој дел од мојата работа / живот заостанувам или сум заостанувал?",
			"stepImg": "8"
		},
		{
			"step": "Чекор 3",
			"text": "По неколку минути рефлексија учесниците се групираат во парови и заедно одат низ кривата на дифузија. Парот може да се движи низ кривата по желба, но мора да поминат низ секоја категорија. Во секоја категорија, двојката накратко ги дели нивните индивидуални одговори за таа категорија.",
			"stepImg": "3"
		}
		],
		"materials": "Селотејп",
		"level": "Средно",
		"id": 13
	},
	{
		"image": 14,
		"title": "Future Trends",
		"category": "Иновации",
		"description": "Оваа алатка им помага на малите и големите групи да ги идентификуваат клучните трансформативни трендови во текот на следните три години, да ги истражат нивните последици и да почнат да гледаат како можат да се исполнат за да создадат можности за бизнис. До крајот на работилницата, учесниците креираат листа на најрелевантни трендови; и разработка на три најважни трендови, вклучувајќи идеи околу тоа како нивната организација би можела да дејствува за да ги исполни.",
		"time": "60-120 минути",
		"players": "2-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Претставете ја целта на работилницата. Објаснете дека во блиска иднина ќе разговараме за трансформативните трендови и ќе разгледаме како нашата организација може да дејствува за да ги исполни тие трендови.\nЗапочнете со Stinky Fish вежбата од 20 минути, за поддршка на групата за безбедно споделување на грижите за иднината и нејзините предизвици. Целта е да се нормализира неизвесноста за иднината и да се отвори простор за разговор за тоа.\nКонтекстот за Stinky Fish вежбата може да биде: \"Сподели една грижа / страв за дигиталната иднина и како тоа ќе влијае на тебе лично или професионално\".",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text": "Сега групата заеднички ќе ги прикаже најрелевантните трендови кои ја менуваат нивната индустрија во текот на следните 3 години.\nОвој чекор има четири круга од 5 минути. Секој круг се фокусира на различна категорија: бизнис, корисничко однесување, барања за таленти и технологија. Задачата е да се размислува на колку што е можно повеќе релевантни трендови во секоја категорија.\nДајте им на учесниците стикери и маркери. Потребно е да напишат еден тренд на еден стикер, и да го претстават пред групата пред да го закачат на ѕид, соодветно во некоја од 4те категории.\nДајте им 5 минути по категорија. Вкупно 20 минути.\nОбјаснете дека следниот чекор е брзо да се даде приоритет на трендовите во кои ќе има најголемо влијание. Треба да трае околу 5 минути.\nКористете ја алатката Dotmocracy. Совршено е за да им се помогне на големите групи да направат брзи приоритизации. Користејќи лепливи точки или маркери, на секој учесник му доставуваме 8 точки (гласови) за да ги дистрибуирате низ трендовите што ги објавиле. Тие треба да го засноваат своето гласање за тоа кои трендови се чувствуваат \"ќе имаат најголемо влијание врз нивниот бизнис во текот на следните 3 години\"",
			"stepImg": ""
		},
		{
			"step": "Чекор 3",
			"text": "Целта на овој чекор е групите заеднички да ги истражуваат најважните трендови и да генерираат идеи околу деловните можности што би можеле да ги отворат.\nПоделете ја групата во помали групи од 2-4 луѓе. Секоја нова група ќе работи со еден тренд, ги истражува своите можности, последици, потенцијални ризици и замислува: Како ќе изгледа нашата компанија за три години целосно ги искористиме можностите на овој тренд? Кои чекори треба да ги преземеме денес за да почнеме да се движиме на тој начин?\nНа секоја група дајте и темплејт со прашања и 15-20 минути за да го завршите. Пред да почнат да работат, потсетете ги учесниците дека ова е истражувачка вежба. Тие треба да работат од она што го знаат и чувствуваат, и да го комплетираат образецот прилично брзо. Откако ќе ги пополнат шаблоните, групите повторно да продолжат со презентирање еден на друг.",
			"stepImg": ""
		},
		{
			"step": "Чекор 4",
			"text": "Зборувајте накратко за \"Што направивме денес денес\". Потоа поканете го секој учесник на \"одјавување\" со еден увид од денот што им дава позитивно чувство за иднината.\nОбјаснете ги следните чекори на групата. Што ќе правите со трендовите и сознанијата? Како ќе работите со нив како индивидуи и компании?",
			"stepImg": ""
		}
		],
		"materials": "Пенкала\nБела табла или флипчарт\nМаркери\nСелотејп",
		"level": "Средно",
		"id": 14
	},
	{
		"image": 15,
		"title": "Story Building",
		"category": "Иновации",
		"description": "Кратка вежба за да се донесе \"градењето приказна\" во живот: клучен концепт во мрежните дигитални комуникации.",
		"time": "30-60 минути",
		"players": "2-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Објаснете ја целта на работилницата: практично да се истражи идејата за премин од раскажување приказни до градење приказни, суштински концепт во мрежниот дигитален свет.\nДенеска ќе градиме неколку приказни заедно со помош на постоечки кориснички содржини користејќи бесплатна веб-услуга наречена Storify.",
			"stepImg": ""
		},
		{
			"step": "Чекор 2",
			"text": "Разговарајте со групата за видовите на приказни кои би биле интересни и соодветни за градење. Тие можат да бидат релевантни за работилницата, програмата или компанијата; или можат да бидат поврзани со лична страст.\nЦелта не е да се создаде квалитетно парче содржина, туку да се експериментира и да се обиде да направи разновидна алатка.",
			"stepImg": ""
		},
		{
			"step": "Чекор 3",
			"text": "Потребно е сите да се пријават на Storify. Тие можат да ги користат постоечките Фејсбук и Твитер профили, или да креираат нов на Storify.\nДајте им основни упатства за да започнат:\nИзградете ја својата приказна. Влечете елементи од социјалните медиуми, веб-страниците за вести и блоговите, за да бидете интересни и сеопфатни колку што можете.\nБидете разиграни и се забавувајте се. Споделете ја вашата приказна со остатокот од групата пред следната работилница.",
			"stepImg": ""
		}
		],
		"materials": "Лаптоп\nТаблет\nСмартфон",
		"level": "Почетно",
		"id": 15
	},
	{
		"image": 16,
		"title": "Тake a Stand",
		"category": "Иновации",
		"description": "Ова е практичен, динамичен и разноврсен метод за групи, да истражуваат идеи и прашања заедно. Нешто како физички прашалник; учесниците одговараат на прашања со одење околу просторот и ставајќи се на замислена линија. Ова обезбедува почетна точка за размислување и дискусија, и го зајакнува тимскиот дух.",
		"time": "60-120 минути",
		"players": "2-40",
		"steps": [
		{
			"step": "Чекор 1",
			"text": "Одлучете за целта и фокусот на сесијата. Можете да го направите ова со или без помош од групата.\nНапишете најмалку пет прашања кои центрираат околу една тема. Учесниците ќе се постават по линија во зависност од нивниот одговор на прашања или колку се согласуваат со изјавата. На пример, ако фокусот е на тоа колку добро тимот работи заедно, можеби ќе прашате:\n\"Колку добро комуницираме како тим? 0 воопшто не комуницирате, 10 е совршено отворена и јасна комуникација.\"\n\"Како се чувствувам за мојата улога во тимот? 0 е многу негативно. 10 е многу позитивно.\"\n\"Дали ние произведуваме квалитетна работа? 0 воопшто не. 10 е апсолутно да\".",
			"stepImg": "6"
		},
		{
			"step": "Чекор 2",
			"text": "Поставете ја просторијата, така што има доволно простор за сите да застанат н замислена линија. Објаснете го концептот на сесијата во групата, означувајќи една страна од собата како \"0\", а другата страна како \"10\".",
			"stepImg": ""
		},
		{
			"step": "Чекор 3",
			"text": "Прашајте го првото прашање.\nДавање на учесниците неколку секунди за да се организираат по должината на линијата.\nНаправете да дискутираат за нивниот одговор на прашањето со некој во близина. Зошто се во таа ситуација? Како се чувствуваат во врска со тоа? Што треба да се промени?",
			"stepImg": "6"
		},
		{
			"step": "Чекор 4",
			"text": "Одвојте време за целата група да слушне од луѓе на различни точки од линијата. Идеално е колку што имате време, но барем еден од секоја 0, секоја 10 и еден некаде од средината.",
			"stepImg": ""
		},
		{
			"step": "Чекор 5",
			"text": "Пред да ја затворите сесијата побарајте од групата да ги дефинира и запише сите клучни акции што се појавија преку дискусија. Треба да се назначи лице за секоја акција и краен рок за исполнување на истата.",
			"stepImg": "9"
		}
		],
		"materials": "/",
		"level": "Средно",
		"id": 16
	}];

	posts.forEach( function(game, index) {
		$('.games-cont').append(`<div class="col-md-3">
									<form action="game.html" class="igra">
										<img src="images/${game.image}.png" class="game-img">
										<h2 class="title">${game.title}</h2>
										<p class="category">${game.category}</p>
										<p class="description">${game.description}</p>
									</form>
								 </div>
								`);
	});
	
	//na klik na sekoja od igrite prati gi parametrite vo url
	$(document).on('click', '.igra', function(){
		var title = $(this).find('.title').text();
		var category = $(this).find('.category').text();
		window.location.href = `game.html?title=${title}&category=${category}`;

	});

	
});