$(document).ready(function() {
  var scrollVal = 0, scrollOffset = 0, pagenum = 1;
  var spyarr = [];
  scrollOffsetBase = $(".noscroll").scrollTop() + $(".content[data-pageNum=1]").offset().top - $("nav").height();
  scrollOffset = scrollOffsetBase;
  function scOffset(pgnum) {
    scrollOffset = $(".noscroll").scrollTop() + $(".content[data-pageNum=" + pgnum + "]").offset().top - $("nav").height();
    $("span[data-pageNum=" + pgnum + "]").addClass("active");
    $("span[data-pageNum!=" + pgnum + "]").removeClass("active");
  }
  function first() {
    if (scrollVal >= $(window).innerHeight() * 0.6) {
      $(".noscrollContent").css({"overflow-x":"scroll","opacity":"1"});
      $(".noscroll").unbind('scroll',first);
    }
  }
  function base() {
    scrollVal = $(this).scrollTop();
    if (scrollVal >= $(window).innerHeight()) {
      $("nav").css({"position":"fixed","top":"0px"});
    }else{
      $("nav").css({"position":"absolute","top":"0px"});
    }
  }
  function spy() {
    if (scrollVal > scrollOffset + $(".content[data-pageNum=" + pagenum + "]").height() - $("nav").height() && scrollVal > scrollOffsetBase && pagenum < 4) {
      pagenum += 1;
      scOffset(pagenum);
    } else if (scrollVal < scrollOffset - $("nav").height() && scrollVal > scrollOffsetBase) {
      pagenum -= 1;
      scOffset(pagenum);
    } else if (scrollVal < scrollOffsetBase && pagenum != 1) {
      pagenum = 1;
      scOffset(pagenum);
    };
  }
  $("span[data-pageNum]").click(function() {
    $(".noscroll").unbind('scroll',spy);
    pagenum = parseInt($(this).attr("data-pageNum"));
    scOffset(pagenum);
    $(".noscroll").animate({scrollTop:scrollOffset},300,function() {
      $(".noscroll").bind('scroll',spy);
    });
  });
  $(".link").click(function() {
    $(".signupbase").children(".signup").css("opacity","0").parent().delay(200).toggle(500,function() {
      $(this).children(".signup").css("opacity","1");
    })
  })
    var scrollVal = $(this).scrollTop();
  $(".noscroll").scroll(first);
  $(".noscroll").scroll(base);
  $(".noscroll").scroll(spy);
  $(".signupbase").hide();
  $(".btn.first").click(function() {
    $(".noscroll").animate({scrollTop:$(window).innerHeight()},1000,"swing")
  });
})