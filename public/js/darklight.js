$(document).ready(function(){
  const body = $("#themeToggle");

  function checkUpdate($) {

    function checkTheme() {
      if (body.hasClass("theme--dark")) {
        // console.log("lights off");
        $(".logo").attr("src", "assets/logolight.svg");
        $(".light").attr("src", "assets/moon.svg");
        $(".darkLightToggle").html("Light Mode").css("color", "white");
        $(".1_html").attr("src", "assets/1_html_light.png");
        $(".1_css").attr("src", "assets/1_css_light.png");
        $(".1_sass").attr("src", "assets/1_sass_light.png");
        $(".1_js").attr("src", "assets/1_js_light.png");
        $(".1_react").attr("src", "assets/1_react_light.png");
        $(".1_xd").attr("src", "assets/1_xd_light.png");
        $(".1_ai").attr("src", "assets/1_ai_light.png");
        $(".1_ps").attr("src", "assets/1_ps_light.png");
        $(".1_ae").attr("src", "assets/1_ae_light.png");
        $(".1_lr").attr("src", "assets/1_lr_light.png");
        $(".1_id").attr("src", "assets/1_id_light.png");
      } else {
        // console.log("lights on");
        $(".logo").attr("src", "assets/logodark.svg");
        $(".light").attr("src", "assets/light.png");
        $(".darkLightToggle").html("Dark Mode").css("color", "#333333");
        $(".1_html").attr("src", "assets/1_html_dark.png");
        $(".1_css").attr("src", "assets/1_css_dark.png");
        $(".1_sass").attr("src", "assets/1_sass_dark.png");
        $(".1_js").attr("src", "assets/1_js_dark.png");
        $(".1_react").attr("src", "assets/1_react_dark.png");
        $(".1_xd").attr("src", "assets/1_xd_dark.png");
        $(".1_ai").attr("src", "assets/1_ai_dark.png");
        $(".1_ps").attr("src", "assets/1_ps_dark.png");
        $(".1_ae").attr("src", "assets/1_ae_dark.png");
        $(".1_lr").attr("src", "assets/1_lr_dark.png");
        $(".1_id").attr("src", "assets/1_id_dark.png");
      }
    }


    window.setInterval(checkTheme, 50);
  }

  jQuery(document).ready(function ($) {
    checkUpdate($);
  });


});