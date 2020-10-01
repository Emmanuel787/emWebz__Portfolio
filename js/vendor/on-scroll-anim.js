// var tl = new TimelineLite();


function onScrollAnim() {

  var docScroll = $(document).scrollTop(),

  heroSection = $(".el-hero-section").offset().top + 200;


  if (docScroll > heroSection) {
    TweenMax.to(".eb__b1", 1, { y: 0, opacity: 1});
    TweenMax.to(".eb__b2", 2, { y: 0, opacity: 1});
    TweenMax.to(".eb__b3", 4, { y: 0, opacity: 1});
    TweenMax.to(".eb__b4", 6, { y: 0, opacity: 1});
  } else{
    // TweenMax.to(".eb__b1", 1, { y: 70, opacity: 0});
    // TweenMax.to(".eb__b2", 2, { y: 70, opacity: 0});
    // TweenMax.to(".eb__b3", 3, { y: 70, opacity: 0});
    // TweenMax.to(".eb__b4", 4, { y: 70, opacity: 0});
  }
}
window.addEventListener("scroll", onScrollAnim);
