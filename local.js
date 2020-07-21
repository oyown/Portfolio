$('document').ready(function () {
  window.onload = function () {
    setTimeout(function () {
      $(".pre-loader").fadeOut(600, function () { $(".pre-loader").remove(); });
    }, 750)
  }


  // read url
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
  };


  //lightslider
  if ($("ul.lightSlider").length > 0) {
    $("ul.lightSlider").lightSlider({
      item: 1,
      loop: true,
      gallery: true,
      controls: false,
      thumbMargin: 15,
      enableDrag: false,
    })
  }

  //is-tooltip
  if ($(".has-tooltip").length > 0) {
    var tooltipValue = $(".has-tooltip").attr("data-value");
    $(".has-tooltip").append("<div class='is-tooltip'>"+tooltipValue+"</div>");
  }

  //project scroll animation
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    $(".project-details").css("opacity", 1 - scrollTop / 500);
    // console.log($(".project-details .project-overview"));
    $(".project-details .fixed-content-wrapper").css("transform", "translateY(-" + scrollTop / 5 + "px)");
  });

  // // REMOVE THIS
  // $(".ayn-project-body p").attr("contenteditable", "true");

});
