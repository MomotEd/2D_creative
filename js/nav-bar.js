;
function bind(func, context) {
	return func.call(context);
};

SetOpacity = function (){
	$('.nav').children().removeClass();
	$(this).addClass("current");
	$(this).prev().addClass("half-step");
	$(this).next().addClass("half-step");
	if ($(this).text()=='РОМБ') {$.scrollTo('#section-intro', 800);}
	else if ($(this).text()=='ВИДЕО'){$.scrollTo('#section-video', 800);}
	else if ($(this).text()=='СОТРУДНИЧЕСТВО'){$.scrollTo('#section-about', 800);}
	else if ($(this).text()=='КОНТАКТЫ'){$.scrollTo('#section-contacts', 800);}
};

$(document).ready(function() {
	setTimeout ("$('.logo').fadeIn('slow');", 1000);
	setTimeout ("$('.nav').fadeIn('slow');", 1500);
	setTimeout ("$('.scroll-container').fadeIn('slow');", 2000);
});