$(document).ready(function(){
  $('.menu-introduce li').click(function(){
    $('.menu-introduce li').removeClass('active');
    $(this).addClass('active');
   	$("#description").click(function(){
      $(".description").show();
      $(".feature").hide();
      $(".dimension").hide();
    });
    $("#feature").click(function(){
      $(".description").hide();
      $(".feature").show();
      $(".dimension").hide();
    });
    $("#dimension").click(function(){
      $(".description").hide();
      $(".feature").hide();
      $(".dimension").show();
    });
  });
});
 