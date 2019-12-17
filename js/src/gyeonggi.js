// gyeonggi.js
(function($){
  const navBox   = $('.navBox');
  const navSub   = $('.navSub');
  const navBg    = $('.nav_bg');
  const navBar   = $('.nav_bar');
  const navList  = $('.navList');
  const navLi    = navList.children('li');

  let winW = $(window).outerWidth(true);

  const viewBrowser = function(winW){
    if (winW <= 480) {
    } else if (winW > 480 && winW <= 1280) {
    } else (winW > 1280 && winW <= 1920)
  };
  viewBrowser(winW);

  $(window).on('resize', function () {
    let nw = $(window).outerWidth();
    if (winW !== nw) { location.reload(); viewBrowser(winW); }
  });

  navBox.on('mouseenter', function(){
    if(winW < 1279){
      navList.hide();
      navBg.hide();
      navBar.hide();
    }else{
      navList.stop().slideDown();
      navBg.stop().slideDown();
      navBar.stop().slideDown();
    }
  });
  navBox.on('mouseleave', function(){
    navList.stop().slideUp();
    navBg.stop().slideUp();
    navBar.stop().slideUp();
  });







})(jQuery);