$(function(){
  $('.one').click(function(){
    $('.fa-home').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-home').removeClass('fa-spin');
      next();
    });
  });
  $('.two').click(function(){
    $('.fa-laptop').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-laptop').removeClass('fa-spin');
      next();
    });
  });
  $('.three').click(function(){
    $('.fa-shopping-cart').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-shopping-cart').removeClass('fa-spin');
      next();
    });
  });
  $('.extra').click(function(){
    $('.fa-comments').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-comments').removeClass('fa-spin');
      next();
    });
  });
  $('.four').click(function(){
    $('.fa-book-reader').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-book-reader').removeClass('fa-spin');
      next();
    });
  });
  $('.five').click(function(){
    $('.fa-coffee').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-coffee').removeClass('fa-spin');
      next();
    });
  });
  $('.six').click(function(){
    $('.fa-hiking').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-hiking').removeClass('fa-spin');
      next();
    });
  });
  $('.seven').click(function(){
    $('.fa-instagram').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-instagram').removeClass('fa-spin');
      next();
    });
  });
  $('.eight').click(function(){
    $('.fa-twitter-square').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-twitter-square').removeClass('fa-spin');
      next();
    });
  });
  $('.nine').click(function(){
    $('.fa-youtube').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-youtube').removeClass('fa-spin');
      next();
    });
  });
  $('.ten').click(function(){
    $('.fa-newspaper').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-newspaper').removeClass('fa-spin');
      next();
    });
  });
  $('.eleven').click(function(){
    $('.fa-exclamation-triangle').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-exclamation-triangle').removeClass('fa-spin');
      next();
    });
  });
  $('.twelve').click(function(){
    $('.fa-envelop').addClass('fa-spin').delay(8000).queue(function(next){
      $('.fa-envelop').removeClass('fa-spin');
      next();
    });
  });
  $(function(){
  $('a[href^="#top"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
  $(function(){
  $('a[href^="#webjump"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
  $(function(){
  $('a[href^="#gjump"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
  $(function(){
  $('a[href^="#enjump"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
  $(function(){
  $('a[href^="#lijump"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
  $(function(){
  $('a[href^="#cajump"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
  $(function(){
  $('a[href^="#sijump"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
  $(function(){
  $('a[href^="#instajump"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
  $(function(){
  $('a[href^="#twijump"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
  $(function(){
  $('a[href^="#youjump"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
  $(function(){
  $('a[href^="#scjump"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
  $(function(){
  $('a[href^="#dajump"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
});
