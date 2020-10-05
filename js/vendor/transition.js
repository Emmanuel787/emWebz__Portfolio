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

            $(function () {
              $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 1) {
                  rellax.refresh();
                }
              });
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

            //divide////////////////////////////////////////////////////////////////////
            //projectz animations
            // p1
            $('.pob-left-box').on('mouseenter', function () {
              $('.pob-left-box').addClass('plb-anim');
              $('.pob-left-box').removeClass('plb-anim-reverse');

              $('.pob-right-box').addClass('prb-anim');
              $('.pob-right-box').removeClass('prb-anim-reverse');
            });

            $('.pob-left-box').on('mouseleave', function () {
              $('.pob-left-box').addClass('plb-anim-reverse');
              $('.pob-left-box').removeClass('plb-anim');

              $('.pob-right-box').addClass('prb-anim-reverse');
              $('.pob-right-box').removeClass('prb-anim');
            });
            //p2
            $('.ptb-right-box').on('mouseenter', function () {
              $('.ptb-left-box').addClass('plb-anim-2');
              $('.ptb-left-box').removeClass('plb-anim-reverse-2');

              $('.ptb-right-box').addClass('prb-anim-2');
              $('.ptb-right-box').removeClass('prb-anim-reverse-2');
            });

            $('.ptb-right-box').on('mouseleave', function () {
              $('.ptb-left-box').addClass('plb-anim-reverse-2');
              $('.ptb-left-box').removeClass('plb-anim-2');

              $('.ptb-right-box').addClass('prb-anim-reverse-2');
              $('.ptb-right-box').removeClass('prb-anim-2');
            });
            //p3
            $('.p-th-b-left-box').on('mouseenter', function () {
              $('.p-th-b-left-box').addClass('plb-anim-3');
              $('.p-th-b-left-box').removeClass('plb-anim-reverse-3');

              $('.p-th-b-right-box').addClass('prb-anim-3');
              $('.p-th-b-right-box').removeClass('prb-anim-reverse-3');
            });

            $('.p-th-b-left-box').on('mouseleave', function () {
              $('.p-th-b-left-box').addClass('plb-anim-reverse-3');
              $('.p-th-b-left-box').removeClass('plb-anim-3');

              $('.p-th-b-right-box').addClass('prb-anim-reverse-3');
              $('.p-th-b-right-box').removeClass('prb-anim-3');
            });
            //p4
            $('.pfb-right-box').on('mouseenter', function () {
              $('.pfb-left-box').addClass('plb-anim-4');
              $('.pfb-left-box').removeClass('plb-anim-reverse-4');

              $('.pfb-right-box').addClass('prb-anim-4');
              $('.pfb-right-box').removeClass('prb-anim-reverse-4');
            });

            $('.pfb-right-box').on('mouseleave', function () {
              $('.pfb-left-box').addClass('plb-anim-reverse-4');
              $('.pfb-left-box').removeClass('plb-anim-4');

              $('.pfb-right-box').addClass('prb-anim-reverse-4');
              $('.pfb-right-box').removeClass('prb-anim-4');
            });

          },


          async once(data) {
            contentAnimation();


          },
        },
      ],
    });
  });
});


