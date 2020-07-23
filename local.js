$('document').ready(function () {
  window.onload = function () {
    setTimeout(function () {
      $(".pre-loader").fadeOut(600, function () { $(".pre-loader").remove(); });
    }, 750)
    
    if($('.iframe-container').length>0){
      setTimeout(function () {
        $(".iframe-container").append("<iframe src='https://www.youtube.com/embed/6DyXzrEpFdE?modestbranding=1&showinfo=0&rel=0&color=white'width='720' height='405' frameborder='0'></iframe>");
      }, 600)
    }
  }

  //youtube video
  var iframeDiv = "<iframe src='https://www.youtube.com/embed/6DyXzrEpFdE?modestbranding=1&showinfo=0&rel=0&color=white'width='720' height='405' frameborder='0'></iframe>";

  //scrolled into view MIGHT NEED LATER
  // $(window).scroll(function(){
  //   var scrollTop     = $(window).scrollTop(),
  //   elementOffset = $('.iframe-container').offset().top,
  //   distance      = (elementOffset - scrollTop);
  //   if(distance <= 2000){
  //     $(".iframe-container").append(iframeDiv);
  //   }
  // });

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

  //scrolling fade in
  if ($(".ayn-project-body").length > 0) {
  ScrollReveal().reveal('.ayn-project-body section>*', { delay: 200 });
  }

  // REMOVE THIS
  // $(".ayn-project-body p").attr("contenteditable", "true");

});
