function onScrollAnim() {

  var docScroll = $(document).scrollTop(),

  heroSection = $(".el-hero-section").offset().top + 400;


  if (docScroll > heroSection) {
    $(".el-main-header").css({
      "background": "#2a2a2aa6"
    });
  } else {
    $(".el-main-header").css({
      "background": ""
    });
  }

}
window.addEventListener("scroll", onScrollAnim);

