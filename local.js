$('document').ready(function () {
  window.onload = function () {
    $(".pre-loader").fadeOut(600, function () { $(".pre-loader").remove(); });
    
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

 //alter project template via url
 if(getUrlParameter("type")){
   var urlParam = getUrlParameter("type");
   $(".ayn-project-body").find('img.'+urlParam).addClass("is-showing");
 }


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

  //project header fade animation
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    $(".project-details").css("opacity", 1 - scrollTop / 500);
    // console.log($(".project-details .project-overview"));
    $(".project-details .fixed-content-wrapper").css("transform", "translateY(-" + scrollTop / 5 + "px)");
  });

  //project scroll to section on tab click
  $(".project-tabs .tab").click(function () {
    // $(this).parent().find(".active").removeClass("active");
    // $(this).addClass("active");
    var sectionTab = $(this).attr("data-section");
    var scrollEl = $(".ayn-project-body").find("section[data-section='" + sectionTab + "']")[0];
    $('body').animate({
      scrollTop: eval($(scrollEl).offset().top - 90)
    }, 1000);
  })

  // //project schow progress bar on scroll
  // if($(".project-tabs .tab").length>0){
  //   var totalHeight = 0;
  //     $('section[data-section]').each(function(){
  //        totalHeight += $(this).height();
  //     });
  //   $(window).scroll(function(){
      
  //     var el = $('section[data-section]')[0];
  //     var scrollTop = $(window).scrollTop(),
  //       elementOffset = $(el).offset().top,
  //       distance = (scrollTop - elementOffset);

  //       var scrollWidth = parseInt((distance*100)/totalHeight);

  //       if(scrollWidth>=0 && scrollWidth<=100){
  //         $(".project-tabs .progress-bar").css("width", scrollWidth+"%");
  //       }
  //   });
  // }

  //show active section on scroll
  var scrollItems = $(".ayn-project-body section[data-section]");
  if ($(".project-tabs .tab").length > 0) {
    $(window).scroll(function () {
      var fromTop = $(this).scrollTop(),
        distance = (fromTop - scrollItems.offset().top);

      if (distance>0) {
        var cur = scrollItems.map(function () {
          if ($(this).offset().top - 200 < fromTop)
            return this;
        });

        var scrolledEl = $(cur[cur.length - 1]).attr("data-section");
        var activeTab = $(".project-tabs .tab[data-section='" + scrolledEl + "']");

        activeTab.parent().find(".active").removeClass("active");
        activeTab.addClass("active");
      }
    });
  }

  //scrolling fade in
  if ($(".ayn-project-body").length > 0) {
  ScrollReveal().reveal('.ayn-project-body section>*');
  }

  // REMOVE THIS
  // $(".ayn-project-body p").attr("contenteditable", "true");

});
