// var tl = new TimelineLite();


function onScrollAnim() {

  var docScroll = $(document).scrollTop(),

  heroSection = $(".el-hero-section").offset().top + 5;


  if (docScroll > heroSection) {
    $('.eb__b1-inner').addClass('eb__b1-anim');
    $('.eb__b2-inner').addClass('eb__b2-anim');
    // TweenMax.to(".eb__b1", 1, { y: 0, opacity: 1});
    // TweenMax.to(".eb__b2", 2, { y: 0, opacity: 1});
    // TweenMax.to(".eb__b3", 4, { y: 0, opacity: 1});
    // TweenMax.to(".eb__b4", 6, { y: 0, opacity: 1});
  } else{
    // TweenMax.to(".eb__b1", 1, { y: 70, opacity: 0});
    // TweenMax.to(".eb__b2", 2, { y: 70, opacity: 0});
    // TweenMax.to(".eb__b3", 3, { y: 70, opacity: 0});
    // TweenMax.to(".eb__b4", 4, { y: 70, opacity: 0});
  }
}
window.addEventListener("scroll", onScrollAnim);

//Reverse same effect when hovering over projectz box
$('.eb__b1').mouseenter(function(){
  $('.eb__b1-inner').addClass('eb__b1-anim-reverse');
});
$('.eb__b1').mouseleave(function(){
  $('.eb__b1-inner').removeClass('eb__b1-anim-reverse');
});
