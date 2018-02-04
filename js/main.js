$(document).ready(function() {
  $('#modality').on('shown.bs.modal', function () {

    $('#inputity').focus();
  });
  $('.product').click(function () {
    var srcf = $(this).find('.product__photo').attr('src');
    var srcn = $(this).find('.burg__name').text();
    $('#modality .pop__img').attr('src',srcf);
    $('#modality .pop__text').text(srcn);

  });

  $('a[href*=\\#]:not([href=\\#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.selector == '#razmer') return;
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });
  $('.fancybox').fancybox();
  if($(window).width() < 769) {
    $('.navbar-toggler').show();
    $('#navb1').addClass('collapse');
  } else {
    $('.navbar-toggler').hide();
  }
});
