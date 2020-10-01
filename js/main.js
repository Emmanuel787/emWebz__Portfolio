$(window).scrollTop(0);

//startup loader:start
// $(window).on('load', function () {

// });
//startup loader:end

////////////////////////////////////////////////@2020

// reveal on scroll:start
new WOW().init();
// reveal on scroll:end

////////////////////////////////////////////////@2020

//rellax #2:start
var rellax = new Rellax(".rellax", {
  center: true,
});
//rellax #2:end

////////////////////////////////////////////////@2020

/*
one page smooth scroll easing:start
*/
// HTML CODE
// <section id="sectionThree" class="section-three">
//       <a data-easing="easeInQuint" href="#top"><p>BACK UP</p></a>
//     </section>

// Instantiate Scrolls
var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

if (document.querySelector("[data-easing]")) {
  var linear = new SmoothScroll('[data-easing="linear"]', { easing: "linear" });

  var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {
    easing: "easeInQuad",
  });
  var easeInCubic = new SmoothScroll('[data-easing="easeInCubic"]', {
    easing: "easeInCubic",
  });
  var easeInQuart = new SmoothScroll('[data-easing="easeInQuart"]', {
    easing: "easeInQuart",
  });
  var easeInQuint = new SmoothScroll('[data-easing="easeInQuint"]', {
    easing: "easeInQuint",
  });

  var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {
    easing: "easeInOutQuad",
  });
  var easeInOutCubic = new SmoothScroll('[data-easing="easeInOutCubic"]', {
    easing: "easeInOutCubic",
  });
  var easeInOutQuart = new SmoothScroll('[data-easing="easeInOutQuart"]', {
    easing: "easeInOutQuart",
  });
  var easeInOutQuint = new SmoothScroll('[data-easing="easeInOutQuint"]', {
    easing: "easeInOutQuint",
  });

  var easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {
    easing: "easeOutQuad",
  });
  var easeOutCubic = new SmoothScroll('[data-easing="easeOutCubic"]', {
    easing: "easeOutCubic",
  });
  var easeOutQuart = new SmoothScroll('[data-easing="easeOutQuart"]', {
    easing: "easeOutQuart",
  });
  var easeOutQuint = new SmoothScroll('[data-easing="easeOutQuint"]', {
    easing: "easeOutQuint",
  });
}

/*
one page smooth scroll easing:start
*/

////////////////////////////////////////////////@2020

/*
if inside div do this:start
*/

/*
if inside div do this:end
*/

////////////////////////////////////////////////@2020

/*
Jquery breakpoints:start
*/
// Jquery breakpoints
var isBreakPoint = function (bp) {
  var bps = [320, 480, 768, 1024],
    w = $(window).width(),
    min, max;
  for (var i = 0, l = bps.length; i < l; i++) {
    if (bps[i] === bp) {
      min = bps[i - 1] || 0;
      max = bps[i];
      break;
    }
  }
  return w > min && w <= max;
};

if (isBreakPoint(768)) {
  $('.ehs-right-box').removeClass('erb').addClass('rellax');
}
if (isBreakPoint(480)) {
  $('.ehs-right-box').removeClass('erb').addClass('rellax');
  rellax.destroy();
}
/*
Jquery breakpoints:end
*/

////////////////////////////////////////////////@2020

/*
on scroll do this:start
*/
// $(function () {
//   var backToTop = $(".emf-bottom-box");
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll >= 3500) {
//       backToTop.fadeIn();
//     } else {
//       backToTop.fadeOut();
//     }
//   });
// });
/*
ons scroll do this:end
*/

////////////////////////////////////////////////@2020

/*
if IE=doThisHere():start
*/
function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  // If IE, return version number.
  if (Idx > 0)
    return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;
  else return 0; //It is not IE
}
//usage
if (GetIEVersion() > 0) {
  // code for IE goes here
}
/*
if !E=doThisHere():end
*/

////////////////////////////////////////////////@2020



const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

$(".emh-mobile-menu-btn").on("click", function () {
  $("body").addClass("mobile-menu-body-anim");
  // $('.el-main-header').fadeOut();
  $(".hidden-mobile-menu").addClass("mobile-menu-anim");

  tl.to(".hmm-li", { y: "0%", duration: 0.7, delay: 2, stagger: 0.15 });


  $("body").removeClass("mobile-menu-body-anim-reverse");
  $(".hidden-mobile-menu").removeClass("mobile-menu-anim-reverse");
});

$(".emh-mobile-menu-btn-reverse, .page-reverse, .home-reverse").on("click", function () {
  $("body").addClass("mobile-menu-body-anim-reverse");
  $(".hidden-mobile-menu").addClass("mobile-menu-anim-reverse");


  $("body").removeClass("mobile-menu-body-anim");
  $(".hidden-mobile-menu").removeClass("mobile-menu-anim");
});


