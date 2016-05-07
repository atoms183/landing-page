$(document).ready(function(){
    //Handle float stop on video play
    floatStop();    
    //Handle parallax animation loading
	var currentURL = document.URL
	if ($(window).width() > 769) {
	   return parallaxBrowser();
    }else if($(window).width() > 320){
		 return parallaxTablet();
	}else{
         return parallaxMobile();
    }
    
});

//Handle Browser
window.parallaxBrowser = function () {
	$(window).scroll(function(d,h) {
		slides = $('.slide').children();
		slides.each(function(i) {
			a = $(this).offset().top + $(this).height() - 200;
			b = $(window).scrollTop() + $(window).height();
			
			//Get target classes
			var myClass = $(this).attr("class");
			
			if (a < b) { 
				//Remove hide me
				$(this).removeClass("hideme");
				
				//Handle different animations
 			   	if(myClass.indexOf(" fid")!= -1)
				{
			   		$(this).addClass("animated fadeInDown");
				}
 			   	else if(myClass.indexOf(" fiu")!= -1)
				{
			   		$(this).addClass("animated fadeInUp");
				}
 			   	else if(myClass.indexOf(" fi")!= -1)
				{
			   		$(this).addClass("animated fadeIn");
				}
 			   	else if(myClass.indexOf(" bil")!= -1)
				{
			   		$(this).addClass("animated bounceInLeft");
				}
 			   	else if(myClass.indexOf(" bir")!= -1)
				{
			   		$(this).addClass("animated bounceInRight");
				}
 			   	else if(myClass.indexOf(" rb")!= -1)
				{
			   		$(this).addClass("animated rubberBand");
				}
 			   	else if(myClass.indexOf(" bi")!= -1)
				{
			   		$(this).addClass("animated bounceIn");
				}
			}
		});
	});		
};

//Handle Tablet
window.parallaxTablet = function () {
	$(window).scroll(function(d,h) {
		slides = $('.slide').children();
		slides.each(function(i) {
			a = $(this).offset().top + $(this).height() - 300;
			b = $(window).scrollTop() + $(window).height();
			
			//Get target classes
			var myClass = $(this).attr("class");
			
			if (a < b) { 
				//Remove hide me
				$(this).removeClass("hideme");
				
				//Handle different animations
 			   	if(myClass.indexOf(" fid")!= -1)
				{
			   		$(this).addClass("animated fadeInDown");
				}
 			   	else if(myClass.indexOf(" fiu")!= -1)
				{
			   		$(this).addClass("animated fadeInUp");
				}
 			   	else if(myClass.indexOf(" fi")!= -1)
				{
			   		$(this).addClass("animated fadeIn");
				}
 			   	else if(myClass.indexOf(" bil")!= -1)
				{
			   		$(this).addClass("animated bounceInLeft");
				}
 			   	else if(myClass.indexOf(" bir")!= -1)
				{
			   		$(this).addClass("animated bounceInRight");
				}
 			   	else if(myClass.indexOf(" rb")!= -1)
				{
			   		$(this).addClass("animated rubberBand");
				}
 			   	else if(myClass.indexOf(" bi")!= -1)
				{
			   		$(this).addClass("animated bounceIn");
				}
			}
		});
	});		
};

//Handle Mob
window.parallaxMobile = function () {
	$(window).scroll(function(d,h) {
		slides = $('.slide').children();
		slides.each(function(i) {			
			//Remove hide
            $(this).removeClass("hideme");
		});
	});		
};

// Freeze float effect
window.floatStop = function () {
    cloud = $('#cloud')
    $( '#videoPlay' ).click(function() {                
        cloud.removeClass("hover");
    });
     $( '#closeVideo' ).click(function() {        
        cloud.addClass("hover");
    });
};