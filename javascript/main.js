 const responsive = {
  0:{
    items:1
  },
  320:{
    items:1
  },
  560:{
    items:2
  },
  960:{
    items:3
  }
 }

$(document).ready(function (){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // click event on toggle menu
    $toggleCollapse.click(function (){
        $nav.toggleClass('collapse');

  })

  // owl-carousel for blog
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
    
  });

    // click to scroll top
  $('.move-up span').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
  })


  $('.invisible-content').hide();
  $(document).on('click','.post-btn',function(){
    var MoreLessButton=$('.invisible-content').is(':visible')?'Read More':'Read Less';
    $(this).text(MoreLessButton);
    $(this).parent('.post-content').find('.invisible-content').toggle();
    $(this).parent('.post-content').find('.visible-content').toggle();
  });

// aos instance
  AOS.init();



});

