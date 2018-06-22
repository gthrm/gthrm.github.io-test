// Оптимизируйте и приведите код в порядок
    var x;
    var y;
    if (x<$("body").width()) {
        x=60;
    } else if (y<$("body").height()) {
            y=60;
        }
    
    
        {
          $("body").append("<div class='circle-shadow' data-x='"+x+"' data-y='"+y+"' style='top:"+y+"px;left:"+x+"px'></div>");
          $("body").append("<div class='circle' data-x='"+x+"' data-y='"+y+"' style='top:"+y+"px;left:"+x+"px'></div>");
        }
    }
    
    try {
        $(window).on("mousemove",function(document){
        $(".circle").each(function(i){
        var x0=+$(".circle:eq("+i+")").data("x")+$(".circle:eq("+i+")").width()/2,
        y0=+$(".circle:eq("+i+")").data("y")+$(".circle:eq("+i+")").width()/2,
        dx=document.clientX-x0,
        dy=document.clientY-y0;
        $(".circle:eq("+i+")").removeClass("transition");
        return setTimeout(function() {return Math.sqrt(dx*dx+dy*dy)<$(".circle:eq("+i+")").width()?(function(){
        $(".circle:eq("+i+")").css({
        left:x0-dx-$(".circle:eq("+i+")").width()/2+"px",
        top:y0-dy-$(".circle:eq("+i+")").width()/2+"px"
        });
        })():(function(){$(".circle:eq("+i+")").addClass("transition");
        $(".circle:eq("+i+")").css({
        left:x0-$(".circle:eq("+i+")").width()/2+"px",
        top:y0-$(".circle:eq("+i+")").width()/2+"px"
        });
        })();}, i);
        });
        });
    } catch(window) {if (window) {alert(window);}
    }