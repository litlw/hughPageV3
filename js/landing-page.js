$(document).ready(function() {
  var button_text = "Wanna See?";


  $.fn.hide_DOM = function() {
    $(".p2").hide();
    $(document).hide_splash_elements();
  }
  $.fn.show_DOM = function() {
    $(".p1").fadeOut(300).hide();
    $(".p2").fadeIn(10);
  }


  $.fn.hide_splash_elements = function() {
    $('#splash-page-title-1').animate({
      left: "-2em"
    }, 0);
    $('#splash-page-title-2').animate({
      left: "-2em"
    }, 0);
  }
  $.fn.animate_splash_elements = function(){
    $('#splash-page-title-1').animate({
      left: "0px",
      opacity: 1
    }, 3200);
    $('#splash-page-title-2').delay(120).animate({
      left: "-4px",
      opacity: 1
    }, 3200);
  }

  $.fn.splash_elements = function(){
    $(document).animate_splash_elements();
  }


  $(document).delay(1200).hide_DOM();
  $(document).delay(3000).animate_splash_elements();

  $("#splash-page-button-enter").click(function(){
    $(document).show_DOM();
    $('html, body').animate({
         scrollTop: $('#header-top').offset().top,
         easing: "easeOut"
       }, 2000);
  });
    // // Stuff to do as soon as the DOM is ready
    // // $("html").delay(2000);css("overflow-y", "hidden");
    // var t = 3000;
    // var enterText = "Wanna See?";
    // // This function hides everything at the start.
    // $.fn.headHideAtStart = function() {
    //     $("#headT1").animate({
    //         opacity: 0,
    //         left: "-10em"
    //     }, 0);
    //     $("#headT2").animate({
    //         opacity: 0,
    //         left: "10em"
    //     }, 0);
    //     $(".p2").hide();
    // };
    // // This is how the head elements animate in.
    // $.fn.headShowAtStart = function() {
    //     $(this).animate({
    //         opacity: 1,
    //         left: "0px"
    //     }, {
    //         duration: 700
    //     });
    // };
    // // This hides everything when the button is clicked?
    // $.fn.hideTheEvidence = function() {
    //     $("#btnEnter").hide(0).delay(100);
    //     $(".demolish").animate({
    //         top: "-1em",
    //         opacity: 0
    //     }, 100).fadeOut(100);
    //     $("#headT1").delay(200).animate({
    //         opacity: 0,
    //         left: "2em"
    //     }, 600);
    //     $("#headT2").delay(200).animate({
    //         opacity: 0,
    //         left: "-2em"
    //     }, 600);
    // };
    // //infinite bouncing action!!
    //
    //
    // // vulgar, i know, but this is the larger function that occurs at the start to display shit.
    // $.fn.giveHead = function() {
    //     $("#headT1, #headT2").headShowAtStart();
    //     $("#hR1").delay(500).fadeIn(2000);
    //     $("#headT3").delay(700).fadeIn(800);
    //     $("#tagLine").delay(1200).fadeIn(4000);
    //     $("#btnEnter").append(enterText)
    //         .delay(2700).fadeIn(2000);
    //
    // };
    //
    // $.fn.btnCollapse = function() {
    //
    //     $(document).hideTheEvidence();
    //      $("#p0, #p1, #p2, #p3").delay(200).animate({
    //        top: 0,
    //        opacity: 1
    //      }, 3000);
    //      $("#myNavbarButton").show();
    //      $("html").css("overflow-y", "visible");
    // };
    //
    //
    // $.fn.mDown = function() {
    // $("#topButton").click(function(){
    //
    // });
    //
    //
    // };
    //
    // // THIS IS THE MAIN ROUTINE!!!!
    //
    // // THIS IS THE MAIN ROUTINE!!!!
    //
    // // THIS IS THE MAIN ROUTINE!!!!
    //
    // // THIS IS THE MAIN ROUTINE!!!!
    //
    //
    //
    //     $(document).headHideAtStart();
    //     $(document).giveHead();
    //     // THis part is gonna be really long. so get ready.
    //     $("#btnEnter").click(function() {
    //       $("#btnEnter").fadeOut(0);
    //         $(document).delay(1000).btnCollapse();
    //         $(document).delay(2000);
    //         $("#headed").fadeIn(2000);
    //       }
    //     $("#myNavbar3").click(function(){
    //       $('html, body').animate({
    //         scrollTop: $('#netSeries').offset().top,
    //         easing: "easeIn"
    //       }, 1000);
    //     });
    //     $("#myNavbar2").click(function(){
    //       $('html, body').animate({
    //         scrollTop: $('#seeTheDestruction').offset().top,
    //         easing: "easeIn"
    //       }, 1000);
    //     });
    //     $("#myNavbar4").click(function(){
    //       $('html, body').animate({
    //         scrollTop: $('#gallery').offset().top,
    //         easing: "easeIn"
    //       }, 1000);
    //     });
    //
    //
    // }
    //




});
