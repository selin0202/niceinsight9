$(function () {
  console.log('confirm')
  /* Include Files */
  $('.header-include').load('/include/header.html', function () {
    /*header fixed*/
    var headerH = $('header').height();
    $('.header-include').css({ 'height': headerH });
    /*로그인*/
    $('.member-login-overlay .btn-member-primary').click(function () {
      console.log(123)
      $('.user-alarm').show();
      $('.login-register-buttons').hide();
      $('.member-login-overlay').fadeOut();
    })
    /* Maga Navi Slide*/
    $(window).resize(function () {
      /* 디바이스 너비 767 이상일 때 (테블릿,pc) */
      if ($(window).innerWidth() > 767) {
        $('.triger').click(function () {
          $('.mega-navi').stop().slideToggle();
        })
        $('section').click(function () {
          $('.mega-navi').stop().slideUp();
        })
      }
      /* 디바이스 너비 767 이하일 때 (모바일) */
      else if ($(window).innerWidth() < 767) {
        /* mega-navi */
        $('.triger').click(function () {
          $('.mega-navi').stop().animate({ 'left': -3 }, 300)
          console.log('모바일 사이즈 triger를 클릭하셨습니다.')
          $('section, .btn-mega-navi-close').click(function () {
            // section이 display:none인 상태라 이벤트를 받을 수 없는 상태이다.
            $('.mega-navi').stop().animate({ 'left': -300 }, 300)
          })
        });
      }
    }).resize();
    /* Meber Register */
    $('.toggle-pw').click(function () {
      // Toggle Icon Shape
      $(this).toggleClass('bi-eye')
      //Toggle Input Type
      let inputType = $(this).parent().children('input').attr('type');  //속성을 가지고옴 get
      if (inputType == 'password') {
        $(this).parent().children('input').attr('type', 'text');
      }
      else {
        $(this).parent().children('input').attr('type', 'password');
      }
    });
    /* Header Login Modal */
    $('.btn-login, .login-member a').click(function () {
      $('.member-login-overlay').fadeIn();
    })
    $('.btn-modal-close').click(function () {
      $('.member-login-overlay').fadeOut();
    })
    /* Mega Navi 어코디언 */
    $('.mega-navi-item b').click(function () {
      $('.mega-navi-item-wrap').stop().slideUp();
      $(this).parent().children('.mega-navi-item-wrap').stop().slideDown();
      $('.mega-navi-item b').removeClass('active')
      $(this).addClass('active')
    })
  })
  $('.footer-include').load('/include/footer.html', function () {
    /* 비욘드 클래스 */
    $('.link-item-title').click(function () {
      $(this).toggleClass('active');
      $(this).next().stop().slideToggle();
    })
    /* 사업자정보 */
    $('.copyright-wrap address b').click(function () {
      $(this).toggleClass('active');
      $('.adress-info').stop().slideToggle();
    })
  })
  /* Focus class */
  $('.like').click(function () {
    $(this).toggleClass('active');
  })
  /* The Final Countdown */
  $("#early-bird-countdown")
    .countdown("2024/12/6", function (event) {
      $(this).html(
        event.strftime('<b>종료까지</b> %D일 <em>%H</em>:<em>%M</em>:<em>%S</em>남음')
      );
    });
  /* Category Detail Buttons */
  $('.btn-shortcut').click(function () {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
  })
  /* Take Course & Cart Check All Function */
  $('.cart-item .btn-clear').click(function () {
    $(this).parents('.cart-item').css('display', 'none');
  });
  $('.cart-header .btn-all-clear').click(function () {
    $('.cart-item').css('display', 'none');
  });
  $('.cart-header .cart-check-all').click(function () {
    $('.check-status .cart-check').prop('checked', this.checked);
  });
  /* Front Slider */
  $('.front-slider-items').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
  /* Focus Class Slider */
  $('.front-class-items').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      }
    ]
  });
  scrollFixed();
});
function scrollFixed() {
  $(window).on('scroll', function () {
    var scrTop = $(window).scrollTop();
    if (scrTop > 0) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
  })
}