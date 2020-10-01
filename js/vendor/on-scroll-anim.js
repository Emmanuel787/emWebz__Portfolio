// var tl = new TimelineLite();


function onScrollAnim() {

  var docScroll = $(document).scrollTop(),

  heroSection = $(".el-hero-section").offset().top / 2;


  if (docScroll > heroSection) {
    // $('.eb__b1-inner').addClass('eb__b1-anim');
    // $('.eb__b2-inner').addClass('eb__b2-anim');
    // $('.eb__b3-inner').addClass('eb__b3-anim');
    // $('.eb__b4-inner').addClass('eb__b4-anim');
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
