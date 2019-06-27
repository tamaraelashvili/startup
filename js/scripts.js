
     $(document).ready(function(){
		$(".cdev").circlos();
		});
   

	
$(document).ready(function () {
  $('div.arrow').click(function() {
  $('html, body').animate({
    scrollTop: $("div.footer").offset().top
  }, 1000)
}), 
  $('.bottom-btn').click(function (){
    $('html, body').animate({
      scrollTop: $(".header-image").offset().top
    }, 1000)
  })

});				



$(document).ready(function() {
    checkDisplay();
  
  $(window).on('resize scroll', function() {
    checkDisplay();
  });
});

function checkDisplay(){
  $('.prg-count').each(function() {
      var $this = $(this);
      if ($this.isOnScreen()) {
        var countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 4000,
          easing: 'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
      }
    });
}

$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});


  function slide(){

var li=$('ul#latest-news-slider li.active');

if(li.next().length>0 )
{
		li.removeClass('active', 3000, "easeInBack");
		li.next().addClass('active', 3000, "easeInBack");

}else if(li.prev().length>0){
	 li.removeClass('active', 3000, "easeInBack");
	 $('ul#latest-news-slider li').first('li').addClass('active', 3000, "easeInBack");
}else
{
		return;
}
}

$('.next').click(function(){

var li=$('ul#latest-news-slider li.active');

if(li.next().length>0 )
{
		li.removeClass('active', 100, "easeInBack");
		li.next().addClass('active', 100, "easeInBack");

}else {
	 li.removeClass('active', 100, "easeInBack");
	 $('ul#latest-news-slider li').first('li').addClass('active', 100, "easeInBack");
}
});

$('.prev').click(function(){

var li=$('ul#latest-news-slider li.active');

if(li.prev().length>0 && li.prev().is("li"))
{
		li.removeClass('active', 100, "easeInBack");
		li.prev().addClass('active', 100, "easeInBack");

}else {
	 
}
});

$('.owl-carousel').owlCarousel({
    margin:150,
    loop:true,
    autoWidth:true,
    items:4,
		nav: true,
		autoplay: true
})
