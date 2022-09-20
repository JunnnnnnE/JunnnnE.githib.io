$(document).ready(function(){
    $(".menulist img:eq(0)").mouseover(function(){
        $(this).attr("src", "image/subImage/premiumTea_hover.png");
    }).mouseout(function(){
        $(this).attr("src", "image/subImage/premiumTea.png");
    });
    $(".menulist img:eq(1)").mouseover(function(){
        $(this).attr("src", "image/subImage/lovelyTea_hover.png");
    }).mouseout(function(){
        $(this).attr("src", "image/subImage/lovelyTea.png");
    });
    $(".menulist img:eq(2)").mouseover(function(){
        $(this).attr("src", "image/subImage/secretTea_hover.png");
    }).mouseout(function(){
        $(this).attr("src", "image/subImage/secretTea.png");
    });
    $(".menulist img:eq(3)").mouseover(function(){
        $(this).attr("src", "image/subImage/masterBlend_hover.png");
    }).mouseout(function(){
        $(this).attr("src", "image/subImage/masterBlend.png");
    });
    $(".menulist img:eq(4)").mouseover(function(){
        $(this).attr("src", "image/subImage/premiumTea90_hover.png");
    }).mouseout(function(){
        $(this).attr("src", "image/subImage/premiumTea90.png");
    });
    
    $(".submenu").hide();
    $(".sub_wrap").hide();
    
    $("#product").on("mouseenter", function(){
        $(".submenu").stop().fadeIn();
        $(".sub_wrap").fadeIn();
        $("#top_menu a").css({"color" : "#333333"}); 
        $(this).css({"color" : "#6C801A", "font-weight" : "bold"});        
    });
    $("#top_menu").on("mouseleave", function(){
         $(this).children("a").next("ul").stop().fadeOut();
        $(".sub_wrap").fadeOut();
        $("#top_menu a").css({"color" : "#ffffff"}); 
        $("#product").css({"color" : "", "font-weight" : "normal"});
    });    
    
    $(".bnr_title").on("mouseenter", function(){    
        $(this).css({"color" : "#6C801A", "font-weight" : "bold"});    
    }); 
//    $(".bnr_title").on("mouseleave", function(){
//        $("#product").css({"color" : "#333333", "font-weight" : "normal"});
//    }); 
});