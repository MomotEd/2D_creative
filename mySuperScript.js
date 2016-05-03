$(document).ready(function SetOpacity(){
	console.log($(this).text())
	 $('.navbar').children().css("opacity", "0.3");
	 this.style ="opacity : 1";
	 $(this).prev('li').css("opacity" , "0.7");
	 $(this).next('li').css("opacity" , "0.7");
	 if ($(this).text()=='РОМБ') {$.scrollTo('.main');}
	 else if ($(this).text()=='ВИДЕО'){$.scrollTo('.main');}
	 else if ($(this).text()=='СОТРУДНИЧЕСТВО'){$.scrollTo('.main');}
	 else {$.scrollTo('.main');}
});

function bind(func, context) {
  return func.call(context);
};

$(document).ready(function() {
	setTimeout ("$('#logo').fadeIn('slow');", 1000);
	setTimeout ("$('.menu').fadeIn('slow');", 1500);
	setTimeout ("$('.floor').fadeIn('slow');", 2000);
	});