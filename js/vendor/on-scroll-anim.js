// var tl = new TimelineLite();


function onScrollAnim() {

  var docScroll = $(document).scrollTop(),

  heroSection = $(".el-hero-section").offset().top + 250;


  if (docScroll > heroSection) {
    $('.el-main-header').css({
      "background":"#1f1f1fdb"
    });
  } else{
    $('.el-main-header').css({
      "background": ""
    });
  }
  if (docScroll > heroSection) {
    $('.el-main-header').css({
      "background":"#1f1f1fdb"
    });
  } else{
    $('.el-main-header').css({
      "background": ""
    });
  }

}

window.addEventListener("scroll", onScrollAnim);

//Reverse same effect when hovering over projectz box
// $('.eb__b1').mouseenter(function(){
//   $('.eb__b1-inner').addClass('eb__b1-anim-reverse');
// });
// $('.eb__b1').mouseleave(function(){
//   $('.eb__b1-inner').removeClass('eb__b1-anim-reverse');
// });
