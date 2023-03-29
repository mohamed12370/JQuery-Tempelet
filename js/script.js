// trigger nice scroll plugin
$(function () {
  $('html').niceScroll({
    cursorcolor: '#f7600e',
    cursorwidth: 10,
    cursorborder: '1px solid #f7600e',
    cursorborderradius: 0,
  });
});

// change header height
$('header').height($(window).height());

// scroll to features
$('header .arrow i ').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('.features').offset().top,
    },
    1000
  );
});

$('.hire').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('.our-team').offset().top,
    },
    1000
  );
});

// slider
const arrowLeft = $('.testim .fa-chevron-left');
const arrowRight = $('.testim .fa-chevron-right');

function checckClient() {
  $('.client:first').hasClass('active')
    ? arrowLeft.fadeOut()
    : arrowLeft.fadeIn();

  $('.client:last').hasClass('active')
    ? arrowRight.fadeOut()
    : arrowRight.fadeIn();
}
checckClient();

$(arrowRight).click(function () {
  $('.testim .active').fadeOut(500, function () {
    $(this)
      .removeClass('active')
      .next('.client')
      .addClass('active')
      .fadeIn(500);

    checckClient();
  });
});

$(arrowLeft).click(function () {
  $('.testim .active').fadeOut(500, function () {
    $(this)
      .removeClass('active')
      .prev('.client')
      .addClass('active')
      .fadeIn(500);

    checckClient();
  });
});
