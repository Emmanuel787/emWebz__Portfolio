$(document).ready(function () {
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

});

