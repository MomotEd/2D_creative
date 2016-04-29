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

window.onwheel = function(e) {		
	  e = e || window.event;
	  
	  var delta = e.deltaY || e.detail || e.wheelDelta;
	  
	  if (delta > 0){
		context = $('.current').next();
	  }
	  else {
		  context = $('.current').prev();
	  }
	  
	  console.log(context.text());
	  if (context.text()!==''){
		bind(SetOpacity,context);}
	  else {
		let NavElements = $('.nav').children();
		for (let i=0; i < 1; i++){
			context = NavElements[i];
			console.log(context)
		};
		bind(SetOpacity,context);
		};
	  
	  
};