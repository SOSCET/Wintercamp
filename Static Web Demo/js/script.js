$(document).ready(function() {
  $("span[data-pageNum]").click(function() {
    var pgnum = $(this).attr("data-pageNum");
    $(".noscrollContent").css({"overflow-x":"scroll"}).animate({scrollLeft:pgnum * $(window).innerWidth()},300,function() { $("span[data-pageNum=" + pgnum + "]").addClass("active"); $("span[data-pageNum!=" + pgnum + "]").removeClass("active"); });
  });
  $(".noscroll").scroll(function () {
    var scrollVal = $(this).scrollTop();
    console.log(scrollVal)
  });
  $(".btn").click(function(){
    $(".noscroll").animate({scrollTop:$(window).innerHeight()},1000,"swing")
  });
})