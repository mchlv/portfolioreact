$(document).ready(function(){
  $(".darkLightToggle").click(function() {
    $(this).html("Light Mode");
  });

  $('.toggle-button-cover').click(function() {
    var clicks = $(this).data('clicks');
    if (clicks) {
      console.log("lights on");
      $(".logo").attr("src", "assets/logodark.svg");
      $(".light").attr("src", "assets/light.png");
      $(".darkLightToggle").html("Dark Mode").css("color", "#333333");

    } else {
      console.log("lights off");
      $(".logo").attr("src", "assets/logolight.svg");
      $(".light").attr("src", "assets/moon.svg");
      $(".darkLightToggle").html("Light Mode").css("color", "white");
    }
    $(this).data("clicks", !clicks);
  });
  
});