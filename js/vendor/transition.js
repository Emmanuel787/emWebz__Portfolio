$(document).ready(function () {
  function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

  function pageTransition() {
    var tl = gsap.timeline();

    tl.to(".loading-screen", {
      duration: 1,
      height: "100vh",
      bottom: "0%",
      ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
      duration: 2,
      height: "100vh",
      bottom: "100%",
      ease: "Expo.easeInOut",
      delay: 0.3,
    });

    tl.set(".loading-screen", { bottom: "-100%" });
  }

  function contentAnimation() {
    var tl = gsap.timeline();
  }

  $(function () {
    barba.init({
      sync: false,

      transitions: [
        {
          //Before the transition, this goes
          async leave(data) {
            const done = this.async();

            pageTransition();
            await delay(1000);
            done();

            //divide////////////////////////////////////////////////////////////////////

            $(window).scrollTop(0);

            //divide////////////////////////////////////////////////////////////////////
            $('.eb__b1-inner').addClass('eb__b1-reinit-barba');
            $('.eb__b2-inner').addClass('eb__b2-reinit-barba');
            $('.eb__b3-inner').addClass('eb__b3-reinit-barba');
            $('.eb__b4-inner').addClass('eb__b4-reinit-barba');
          },

          //after the transition this will re-init...//
          async enter(data) {
            contentAnimation();

            //divide////////////////////////////////////////////////////////////////////

            $(window).scrollTop(0);

            //divide////////////////////////////////////////////////////////////////////

            const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

            //divide////////////////////////////////////////////////////////////////////

            var rellax = new Rellax(".rellax", {
              center: false,
            });

            //divide////////////////////////////////////////////////////////////////////

            $('.el-hero-section').addClass('ehs-bg-anim');

            $('.ehs-anim-box').addClass('ehs-anim');

            $('.svg-dark').delay(500).fadeOut();


            //divide////////////////////////////////////////////////////////////////////

            tl.to('.intro-two-title', { y: '0%', duration: 0.7, delay: 1, opacity: 1, stagger: 0.05 });

            tl.to('.intro-two-title', { y: '100%', duration: 1, delay: 0.2, opacity: 1, stagger: 0.05 });

            //divide////////////////////////////////////////////////////////////////////

            //intro-one:start
            tl.to('.intro-one', {
              y: '-100%',
              duration: 0.7,
              delay: 0.2
            }, '-=.9');

            //intro-one:end

            //intro-two:start
            tl.to('.intro-two', {
              y: '-100%',
              duration: 0.5,
              delay: 0.6,
            }, '-=.9');
            //intro-two:end

            //intro-three:start
            tl.to('.intro-three', {
              y: '-100%',
              duration: 0.5,
              delay: 0,
            }, '-=.9');
            //intro-three:end

            //divide////////////////////////////////////////////////////////////////////

            function bgChanger() {

              var docScrollBg = $(document).scrollTop(),

              //about.html
              sectionUno = $(".section-uno").offset().top - 300;
              sectionDos = $(".section-dos").offset().top - 300;
              sectionTres = $(".section-tres").offset().top - 300;
              //when rich top of boxex than fire

              //about.html
              if (docScrollBg >= sectionUno) {
                document.body.classList.add("bg-active");
              } else {
                document.body.classList.remove("bg-active");
              }

              if (docScrollBg >= sectionDos) {
                document.body.classList.add("bg-active-dos");
              } else {
                document.body.classList.remove("bg-active-dos");
              }

              if (docScrollBg >= sectionTres) {
                document.body.classList.add("bg-active-tres");
              } else {
                document.body.classList.remove("bg-active-tres");
              }
            }
            window.addEventListener("scroll", bgChanger);

            //divide////////////////////////////////////////////////////////////////////

            tl.to('.dsb-txt-appear', { y: '0%', duration: 0.7, delay: 3, stagger: 0.10 }, "-=1");

            //divide////////////////////////////////////////////////////////////////////

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

            //divide////////////////////////////////////////////////////////////////////
            $('.el-divider').addClass('ed-reinit-barba');

            $('.el-main-footer').addClass('ef-reinit-barba');
          },


          async once(data) {
            contentAnimation();

          },
        },
      ],
    });
  });
});


