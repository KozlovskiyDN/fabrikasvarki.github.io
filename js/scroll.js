//window.onbeforeunload = function() {
//  return "Данные не сохранены. Точно перейти?";
//};

//// scroll ////////////////////////////////////////////////////////////////////

$(window).on("scroll resize load", scrollEffect);



function scrollEffect(e) {

var docScrollTop = document.documentElement.scrollTop,
	windHeight = window.innerHeight,
	bg = $(".scroll"),
	y = "", t=(docScrollTop/80)*50 ;
	y = "-"+ t+"px, -"+t+"px";
	//bg.backgroundPositionY = y;
	TweenLite.to(bg, 0.01, {css:{backgroundPositionY:y},delay:0.01});

};