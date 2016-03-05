$(document).ready(function() {
    
    


	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("slideInLeft", "slideOutLeft");
	$(".animation_3").animated("slideInRight", "slideOutRight");
	$(".animation_4").animated("zoomInDown", "fadeOutDown");
	


});

$(document).ready(function(){
  
  //fixed secondary nav
  
  var secondaryHead = $('nav'),
	secondaryHeadTopPosition = secondaryHead.offset().top;
  $(window).on('scroll', function(){
		if($(window).scrollTop() > secondaryHeadTopPosition ) {
			secondaryHead.addClass('fixed-nav');
      $(".logo").addClass("fixed-logo");
      $(".logo-title").addClass("fixed-logo");
      $(".logo-box").addClass("fixed-logo-box");
      $("nav ul").addClass("fixed-links");
		}
    else {
			secondaryHead.removeClass('fixed-nav');
      $(".logo").removeClass("fixed-logo");
      $(".logo-title").removeClass("fixed-logo");
      $(".logo-box").removeClass("fixed-logo-box");
      $("nav ul").removeClass("fixed-links");
		}
	});
  
  //header shrink
  
  var introSection = $('.intro-background'),
	introSectionHeight = introSection.height(),
		//change scaleSpeed if you want to change the speed of the scale effect
	scaleSpeed = 0.4;
		//change opacitySpeed if you want to change the speed of opacity reduction effect
	opacitySpeed = 1;
  
	$(window).on('scroll', function(){
		window.requestAnimationFrame(animateIntro);
	});
	//assign a scale transformation to the introSection element and reduce its opacity
	function animateIntro () {
		var scrollPercentage = ($(window).scrollTop()/introSectionHeight).toFixed(5),
			scaleValue = 1 - scrollPercentage*scaleSpeed;
		//check if the introSection is still visible
		if( $(window).scrollTop() < introSectionHeight) {
			introSection.css({
				'transform': 'scale(' + scaleValue + ') translateZ(0)',
				'opacity': 1 - scrollPercentage*opacitySpeed
			});
		}
	}
				  	$("nav ul a").mPageScroll2id();
});









/*
 * Noel Delgado | @pixelia_me
 */

var items = []
  , point = document.querySelector('svg').createSVGPoint();

function getCoordinates(e, svg) {
  point.x = e.clientX;
  point.y = e.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function changeColor(e) {
  document.body.className = e.currentTarget.className;
}

function Item(config) {
  Object.keys(config).forEach(function (item) {
    this[item] = config[item];
  }, this);
  this.el.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
  this.el.addEventListener('touchmove', this.touchMoveHandler.bind(this));
}

Item.prototype = {
  update: function update(c) {
    this.clip.setAttribute('cx', c.x);
    this.clip.setAttribute('cy', c.y);
  },
  mouseMoveHandler: function mouseMoveHandler(e) {
    this.update(getCoordinates(e, this.svg));
  },
  touchMoveHandler: function touchMoveHandler(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) return this.update(getCoordinates(touch, this.svg));
  }
};

[].slice.call(document.querySelectorAll('.item'), 0).forEach(function (item, index) {
  items.push(new Item({
    el: item,
    svg: item.querySelector('svg'),
    clip: document.querySelector('#clip-'+index+' circle'),
  }));
});

[].slice.call(document.querySelectorAll('button'), 0).forEach(function (button) {
  button.addEventListener('click', changeColor);
});

















