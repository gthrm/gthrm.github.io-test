// Оптимизируйте и приведите код в порядок
        
for (
  let x=0;
  x < $("body").width();
  x += 60) {
    for (let y=0;
    y < $("body").height();
    y += 60) {
      $("body").append("<div class='circle-shadow' data-x='"+x+"' data-y='"+y+"' style='top:"+y+"px;left:"+x+"px'></div>");
      $("body").append("<div class='circle' data-x='"+x+"' data-y='"+y+"' style='top:"+y+"px;left:"+x+"px'></div>");
    }
  }
      $(window).on("mousemove", function(document) {
        $(".circle").each(function(i){
          let x0 =+ $(".circle:eq("+i+")").data("x")+$(".circle:eq("+i+")").width()/2;
          let y0 =+ $(".circle:eq("+i+")").data("y")+$(".circle:eq("+i+")").width()/2;
          let dx = document.clientX - x0;
          let dy = document.clientY - y0;
          $(".circle:eq(" + i + ")").removeClass("transition");
          (function() {
            let per = $(".circle:eq("+i+")").width();
            let sqrtPer = Math.sqrt(dx*dx+dy*dy);
            if (sqrtPer < per) {
              $(".circle:eq("+i+")").css({
                left:x0-dx-$(".circle:eq("+i+")").width()/2+"px",
                top:y0-dy-$(".circle:eq("+i+")").width()/2+"px"
                })
              } else {
              $(".circle:eq("+i+")").addClass("transition");
                $(".circle:eq("+i+")").css({
                  left:x0-$(".circle:eq("+i+")").width()/2+"px",
                  top:y0-$(".circle:eq("+i+")").width()/2+"px"
                  });
                };
          })();;
        });
      });