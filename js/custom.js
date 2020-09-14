// Show and hide menu
  $(window).scroll(function () {
    if ($(window).scrollTop() < 80) {
      $('.navbar').css({
        'margin-top':  '-100px',
        'opacity': '0'
      });
      $('.navbar-default').css({
        'background-color':  'rgba(59, 59, 59, 0)',
      });
    } else {
      $('.navbar').css({
        'margin-top':  '0px',
        'opacity': '1'
      });
      $('.navbar-default').css({
        'background-color':  'rgba(59, 59, 59, 0.7)',
        'border-color': '#444'
      });
      $('.navbar-brand img').css({
        'height':  '35px',
        'padding-top': '0'
      });
      $('.navbar-nav > li > a').css({
        'padding-top': '15px'
      });
    }
  });

// Add smooth scrolling

$('.nav-item, .scroll-to-top')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Active menu item on click.

$('.navbar-nav li a').click(function () {
  $('.navbar-nav li a').parent().removeClass('active');

  $(this).parent().addClass('active');
});

// Highlight menu item on scroll

$(window).scroll(function () {
  $('section').each(function () {
    const id = $(this).attr('id');
    const outerHeight = $(this).outerHeight();
    const offsetTop = $(this).offset().top - 70;

    if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetTop + outerHeight) {
      $('.navbar-nav li a[href="#' + id + '"]').parent().addClass('active');
    } else {
      $('.navbar-nav li a[href="#' + id + '"]').parent().removeClass('active');
    }
  })
});

// Add auto padding to header

setInterval(() => {
  const windowHeight = $(window).height();
  const containerHeight = $('.header-container').height();
  const padTop = windowHeight - containerHeight;

  $('.header-container').css({
    'padding-top': Math.round(padTop / 2) + 'px',
    'padding-bottom': Math.round(padTop / 2) + 'px'
  })
  
}, 10);

// Add bx slider to screens

$('.bxslider').bxSlider({
  slideWidth: 292.5,
  auto: true,
  minSlides: 1,
  maxSlides: 3,
  slideMargin: 50
});

// Add Counter up to counter

$('.counter-number').counterUp({
  delay: 10,
  time: 2000
});

// Add Animation / Initialize Wow

AOS.init({
  duration: 1000,
  easing: 'ease-in-sine',
  delay: 100,
  once: true
});
