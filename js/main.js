$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

   //aos
   
  AOS.init();


    $(window).scroll(function () {
        if (this.scrollY > 1400) $(".fill1").addClass("fill1_");
        else $(".fill1").removeClass("fill1_");
      });
      $(window).scroll(function () {
        if (this.scrollY > 1400) $(".fill2").addClass("fill2_");
        else $(".fill2").removeClass("fill2_");
      });
      $(window).scroll(function () {
        if (this.scrollY > 1400) $(".fill3").addClass("fill3_");
        else $(".fill3").removeClass("fill3_");
      });
      $(window).scroll(function () {
        if (this.scrollY > 1400) $(".fill4").addClass("fill4_");
        else $(".fill4").removeClass("fill4_");
      });
      $(window).scroll(function () {
        if (this.scrollY > 1400) $(".fill5").addClass("fill5_");
        else $(".fill5").removeClass("fill5_");
      });
      $(window).scroll(function () {
        if (this.scrollY > 1400) $(".fill6").addClass("fill6_");
        else $(".fill6").removeClass("fill6_");
      });
    
      




    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});