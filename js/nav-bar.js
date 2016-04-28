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

window.onscroll = function() {		
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var ScreenHeight = document.documentElement.clientHeight;
  var FirstMark  = ScreenHeight/2;
  var SecondMark = ScreenHeight+FirstMark;
  var ThirdMark  = ScreenHeight*3-FirstMark;
  var Marks = [FirstMark, SecondMark, ThirdMark];
  a = find(Marks, scrolled);
  if (a>1){
	  context = $('.current').next();
	  bind(SetOpacity,context);
    };
}

function find(array, value) {

  for (var i = 0; i < array.length; i++) {
	console.log(array[i] < value);
	console.log((value - array[i])< value);
    if (array[i] < value && (value - array[i])< value) return 1;
  }

  return -1;
}