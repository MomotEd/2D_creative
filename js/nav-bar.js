;
function bind(func, context) {
	return func.call(context);
};

function CreateImg(){
	context = $('.current')[0];
	
	// creating image before nav text and start rotate it 
    var img = document.createElement('img');
    img.setAttribute('src','./images/compas.png');
	var firstchild = context.childNodes[0];
	context.insertBefore(img,firstchild);
	$('.nav').find('img').rotate({animateTo:360, duration:2000})
}

SetOpacity = function (){
	
	$('.nav').children().removeClass(); 
	$('.nav').find('img').remove();
	$(this).addClass("current");
	$(this).prev().addClass("half-step");
	$(this).next().addClass("half-step");
    $.scrollTo($(this).children("a").attr('href'), 800);
	CreateImg();

};

$(document).ready(function() {
	    $(".page nav span").click(function() {
	    	bind(SetOpacity, this);
    });
	setTimeout ("$('.logo').fadeIn('slow');", 1000);
	// set compas img on current nav item before we will see it
	CreateImg();
	setTimeout ("$('.nav').fadeIn('slow');", 1500);
	setTimeout ("$('.scroll-container').fadeIn('slow');", 2000);
});

window.onwheel = function(e) {		
	  e = e || window.event;
	  
	  var delta = e.deltaY || e.detail || e.wheelDelta;
	  
	  if (delta > 0){
		contextArr = $('.current').next();
		context = contextArr[0];
	  }
	  else {
		  contextArr = $('.current').prev();
		  context = contextArr[0];
	  }
	  
	  if (contextArr.text()!==''){
		bind(SetOpacity,context);}
	  else {
		let NavElements = $('.nav').children();
		for (let i=0; i < 1; i++){
			context = NavElements[i];
		};
		bind(SetOpacity,context);
		};  
};