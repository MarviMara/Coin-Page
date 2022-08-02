$(document).ready(function(){
  
  $('.your-class').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 600,
          dots: false,
          infinite: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    
    ]
  });


  $(".navigation li").mouseenter(function(){
    $(".nav-box").addClass("active-nav");
  });

  $(".navigation li").mouseleave(function(){
    $(".nav-box").removeClass("active-nav");
  });


  $(".phone-navigation").click(function(){
    $(".phone-nav").removeClass("phone-menu-out");
    $(".phone-nav").addClass("phone-menu");
  });

  $(".icon-close").click(function(){
    $(".phone-nav").removeClass("phone-menu");
    $(".phone-nav").addClass("phone-menu-out");
  });




  $(".live-chat-button").click(function(){
    $(".live-chat-box").addClass("zoom-in");
    $(".live-fade").addClass("chat-fade");
  });

  $(".close-live-chat").click(function(){
    $(".live-chat-box").removeClass("zoom-in");
    $(".live-fade").removeClass("chat-fade");
  });

  $(".chat-menu i.red").click(function(){
    $(".chat-drop").toggleClass("up-fade");
  });




  // LIVE INFO 

  $(".box-forex").click(function(){
    $(".box-idicies").removeClass("clicked-table-box");
    $(".box-forex").addClass("clicked-table-box");
    $(".live-indicies").removeClass("shown");
    $(".live-forex").addClass("shown");
    $(".live-metals").removeClass("shown");
    $(".box-metals").removeClass("clicked-table-box");
    $(".box-crypto").removeClass("clicked-table-box");
    $(".live-crypto").removeClass("shown");
    $(".live-energy").removeClass("shown");
    $(".live-shares").removeClass("shown");
    $(".box-energy").removeClass("clicked-table-box");
    $(".box-shares").removeClass("clicked-table-box");
    
    $(".live-forex").removeClass("hide");
    $(".live-indicies").addClass("hide");
    $(".live-metals").addClass("hide");
    $(".live-crypto").addClass("hide");
    $(".live-energy").addClass("hide");
    $(".live-shares").addClass("hide");
  });

  $(".box-idicies").click(function(){
    $(".box-forex").removeClass("clicked-table-box");
    $(".box-idicies").addClass("clicked-table-box");
    $(".live-forex").removeClass("shown");
    $(".live-indicies").addClass("shown");
    $(".live-metals").removeClass("shown");
    $(".box-metals").removeClass("clicked-table-box");
    $(".box-crypto").removeClass("clicked-table-box");
    $(".live-crypto").removeClass("shown");
    $(".live-energy").removeClass("shown");
    $(".box-energy").removeClass("clicked-table-box");
    $(".box-shares").removeClass("clicked-table-box");
    $(".live-shares").removeClass("shown");



    $(".live-indicies").removeClass("hide");
    $(".live-forex").addClass("hide");
    $(".live-metals").addClass("hide");
    $(".live-crypto").addClass("hide");
    $(".live-energy").addClass("hide");
    $(".live-shares").addClass("hide");
  });

  $(".box-metals").click(function(){

    $(".box-metals").addClass("clicked-table-box");
    $(".box-forex").removeClass("clicked-table-box");
    $(".box-idicies").removeClass("clicked-table-box");
    $(".live-forex").removeClass("shown");
    $(".live-indicies").removeClass("shown");
    $(".live-metals").addClass("shown");
    $(".box-crypto").removeClass("clicked-table-box");
    $(".live-crypto").removeClass("shown");
    $(".live-energy").removeClass("shown");
    $(".box-energy").removeClass("clicked-table-box");
    $(".box-shares").removeClass("clicked-table-box");
    $(".live-shares").removeClass("shown");



    $(".live-metals").removeClass("hide");
    $(".live-forex").addClass("hide");
    $(".live-indicies").addClass("hide");
    $(".live-crypto").addClass("hide");
    $(".live-energy").addClass("hide");
    $(".live-shares").addClass("hide");
  });

  $(".box-crypto").click(function(){
    $(".box-crypto").addClass("clicked-table-box");

    $(".box-metals").removeClass("clicked-table-box");
    $(".box-forex").removeClass("clicked-table-box");
    $(".box-idicies").removeClass("clicked-table-box");
    $(".live-forex").removeClass("shown");
    $(".live-indicies").removeClass("shown");
    $(".live-metals").removeClass("shown");
    $(".live-crypto").addClass("shown");

    $(".live-energy").removeClass("shown");
    $(".box-energy").removeClass("clicked-table-box");
    $(".box-shares").removeClass("clicked-table-box");
    $(".live-shares").removeClass("shown");



    $(".live-crypto").removeClass("hide");
    $(".live-forex").addClass("hide");
    $(".live-indicies").addClass("hide");
    $(".live-metals").addClass("hide");
    $(".live-energy").addClass("hide");
    $(".live-shares").addClass("hide");

  });

  $(".box-energy").click(function(){
    $(".box-energy").addClass("clicked-table-box");
    $(".box-crypto").removeClass("clicked-table-box");
    $(".box-metals").removeClass("clicked-table-box");
    $(".box-forex").removeClass("clicked-table-box");
    $(".box-idicies").removeClass("clicked-table-box");
    $(".live-forex").removeClass("shown");
    $(".live-indicies").removeClass("shown");
    $(".live-metals").removeClass("shown");
    $(".live-crypto").removeClass("shown");
    $(".live-energy").addClass("shown");

    $(".box-shares").removeClass("clicked-table-box");
    $(".live-shares").removeClass("shown");


    $(".live-energy").removeClass("hide");
    $(".live-forex").addClass("hide");
    $(".live-indicies").addClass("hide");
    $(".live-metals").addClass("hide");
    $(".live-crypto").addClass("hide");
    $(".live-shares").addClass("hide");

  });


  $(".box-shares").click(function(){
    $(".box-shares").addClass("clicked-table-box");
    $(".box-energy").removeClass("clicked-table-box");
    $(".box-crypto").removeClass("clicked-table-box");
    $(".box-metals").removeClass("clicked-table-box");
    $(".box-forex").removeClass("clicked-table-box");
    $(".box-idicies").removeClass("clicked-table-box");
    $(".live-forex").removeClass("shown");
    $(".live-indicies").removeClass("shown");
    $(".live-metals").removeClass("shown");
    $(".live-crypto").removeClass("shown");
    $(".live-energy").removeClass("shown");
    $(".live-shares").addClass("shown");
    
    $(".live-shares").removeClass("hide");
    $(".live-forex").addClass("hide");
    $(".live-indicies").addClass("hide");
    $(".live-metals").addClass("hide");
    $(".live-crypto").addClass("hide");
    $(".live-energy").addClass("hide");
  });




  








  $(".menu-1").click(function(){
    $(".menu-5 i").removeClass("rotate-icon");
    $(".menu-2 i").removeClass("rotate-icon");
    $(".menu-3 i").removeClass("rotate-icon");
    $(".menu-4 i").removeClass("rotate-icon");
    $(".menu-6 i").removeClass("rotate-icon");
    $(".menu-1 i").toggleClass("rotate-icon");
    


    $(".second-menu").removeClass("phone-menu-items-slide ");
    $(".third-menu").removeClass("phone-menu-items-slide ");
    $(".fourth-menu").removeClass("phone-menu-items-slide ");
    $(".fifth-menu").removeClass("phone-menu-items-slide ");
    $(".sixth-menu").removeClass("phone-menu-items-slide ");
    $(".first-menu").toggleClass("phone-menu-items-slide ");
  });
  

  $(".menu-2").click(function(){
    $(".menu-1 i").removeClass("rotate-icon");
    $(".menu-5 i").removeClass("rotate-icon");
    $(".menu-3 i").removeClass("rotate-icon");
    $(".menu-4 i").removeClass("rotate-icon");
    $(".menu-6 i").removeClass("rotate-icon");
    $(".menu-2 i").toggleClass("rotate-icon");



    $(".first-menu").removeClass("phone-menu-items-slide ");
    $(".third-menu").removeClass("phone-menu-items-slide ");
    $(".fourth-menu").removeClass("phone-menu-items-slide ");
    $(".fifth-menu").removeClass("phone-menu-items-slide ");
    $(".sixth-menu").removeClass("phone-menu-items-slide ");
    $(".second-menu").toggleClass("phone-menu-items-slide ");
  });


  $(".menu-3").click(function(){
    $(".menu-1 i").removeClass("rotate-icon");
    $(".menu-2 i").removeClass("rotate-icon");
    $(".menu-5 i").removeClass("rotate-icon");
    $(".menu-4 i").removeClass("rotate-icon");
    $(".menu-6 i").removeClass("rotate-icon");
    $(".menu-3 i").toggleClass("rotate-icon");



    $(".first-menu").removeClass("phone-menu-items-slide ");
    $(".second-menu").removeClass("phone-menu-items-slide ");
    $(".fourth-menu").removeClass("phone-menu-items-slide ");
    $(".fifth-menu").removeClass("phone-menu-items-slide ");
    $(".sixth-menu").removeClass("phone-menu-items-slide ");
    $(".third-menu").toggleClass("phone-menu-items-slide ");
  });

  $(".menu-4").click(function(){
    $(".menu-1 i").removeClass("rotate-icon");
    $(".menu-2 i").removeClass("rotate-icon");
    $(".menu-3 i").removeClass("rotate-icon");
    $(".menu-5 i").removeClass("rotate-icon");
    $(".menu-6 i").removeClass("rotate-icon");

    $(".menu-4 i").toggleClass("rotate-icon");




    $(".first-menu").removeClass("phone-menu-items-slide ");
    $(".second-menu").removeClass("phone-menu-items-slide ");
    $(".third-menu").removeClass("phone-menu-items-slide ");
    $(".fifth-menu").removeClass("phone-menu-items-slide ");
    $(".sixth-menu").removeClass("phone-menu-items-slide ");
    $(".fourth-menu").toggleClass("phone-menu-items-slide ");
  });


  $(".menu-5").click(function(){
    $(".menu-1 i").removeClass("rotate-icon");
    $(".menu-2 i").removeClass("rotate-icon");
    $(".menu-3 i").removeClass("rotate-icon");
    $(".menu-4 i").removeClass("rotate-icon");
    $(".menu-6 i").removeClass("rotate-icon");
    
    $(".menu-5 i").toggleClass("rotate-icon");



    $(".first-menu").removeClass("phone-menu-items-slide ");
    $(".second-menu").removeClass("phone-menu-items-slide ");
    $(".third-menu").removeClass("phone-menu-items-slide ");
    $(".fourth-menu").removeClass("phone-menu-items-slide ");
    $(".sixth-menu").removeClass("phone-menu-items-slide ");
    $(".fifth-menu").toggleClass("phone-menu-items-slide ");
  });

  $(".menu-6").click(function(){
    $(".menu-1 i").removeClass("rotate-icon");
    $(".menu-2 i").removeClass("rotate-icon");
    $(".menu-3 i").removeClass("rotate-icon");
    $(".menu-4 i").removeClass("rotate-icon");
    $(".menu-5 i").removeClass("rotate-icon");

    $(".menu-6 i").toggleClass("rotate-icon");



    $(".first-menu").removeClass("phone-menu-items-slide ");
    $(".second-menu").removeClass("phone-menu-items-slide ");
    $(".third-menu").removeClass("phone-menu-items-slide ");
    $(".fourth-menu").removeClass("phone-menu-items-slide ");
    $(".fifth-menu").removeClass("phone-menu-items-slide ");
    $(".sixth-menu").toggleClass("phone-menu-items-slide ");
  });






window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav-scrolled").classList.add('scrolled')
    document.getElementById("logo-scrolled").classList.add('logo-scrolled')
    $(".navigation li a").addClass("list-scrolled");
    $(".links a").addClass("links-scrolled");
    $(".form-buttons a").addClass("links-scrolled");
    $(".sign-in-button a").addClass("links-scrolled");
    $(".nav-buttons a").addClass("buttons-scrolled");
    $(".nav-box").addClass("box-scroll");
    $(".nav-buttons span").addClass("list-scrolled");
    $(".phone-navigation i").addClass("list-scrolled");
  } 
  else if (document.body.scrollTop < 110 || document.documentElement.scrollTop < 110 ) {
    document.getElementById("nav-scrolled").classList.remove('scrolled');
    document.getElementById("logo-scrolled").classList.remove('logo-scrolled')
    $(".navigation li a").removeClass("list-scrolled");
    $(".links a").removeClass("links-scrolled");
    $(".nav-buttons a").removeClass("buttons-scrolled");
    $(".nav-box").removeClass("box-scroll");
    $(".nav-buttons span").removeClass("list-scrolled");
    $(".phone-navigation i").removeClass("list-scrolled");

  }



  
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    $(".register").addClass("register-scroll");
    $(".button-start").addClass("button-start-scroll");
  } 
  else if (document.body.scrollTop < 400 || document.documentElement.scrollTop < 400 ) {
    $(".register").removeClass("register-scroll");
    $(".button-start").removeClass("button-start-scroll");
  }
  
}




});




