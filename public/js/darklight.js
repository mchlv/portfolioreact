$(document).ready(function(){
  const body = $("#themeToggle");

  function checkUpdate($) {

    function checkTheme() {
      if (body.hasClass("theme--dark")) {
        console.log("lights off");
        $(".logo").attr("src", "assets/logolight.svg");
        $(".light").attr("src", "assets/moon.svg");
        $(".darkLightToggle").html("Light Mode").css("color", "white");
      } else {
        console.log("lights on");
        $(".logo").attr("src", "assets/logodark.svg");
        $(".light").attr("src", "assets/light.png");
        $(".darkLightToggle").html("Dark Mode").css("color", "#333333");
      }
    }

    window.setInterval(checkTheme, 50);
  }

  jQuery(document).ready(function ($) {
    checkUpdate($);
  });


});