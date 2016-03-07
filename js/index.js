$(function(){
    var n = 1;
    var show =  $(".show");
    setInterval(function(){
        show.attr("src","img/img"+n+".png");
        n++;
        if(n>6){
            n=1;
        }
    },1500);
    $(document).delegate("#searchimg","click",function(){
        $("#searchimg").css("display","none");
        $(".search").css("margin","0 5px");
        $(".searchin").fadeIn(400);

    });
    $(document).delegate(".content,.header,.btn","click",function(){
        $("#searchimg").css("display","block");
        $(".search").css("margin","8px 5px");
        $(".searchin").css("display","none");
    });
    $(window).scroll(function(){
        if($(document).scrollTop()>0){
            //$(".backTop").css("display","block");
           $(".backTop").fadeIn(400);
        }else{
            $(".backTop").stop().fadeOut(200);
        }
        if($(document).scrollTop() < 200){
            $(".nav").css("background-color","rgba(0,0,0,.5)");
        }
        if($(document).scrollTop()>=200){
            $(".nav").css("background-color","#333");
        }
    });
    var linearTop = function(){
        $("html,body").animate({
            scrollTop: "0px"
        }, 500);
        console.log("开始返回顶部");
    };

    /**
     * ①top=0的时候不允许点击事件的执行
     *②滑动过程中不允许点击事件执行
     */
    var topYes =0;
    $(document).delegate(".backTop","click",function(){
        console.log($(document).scrollTop());
        if($(document).scrollTop()!=0 && topYes==0){
            linearTop();
            topYes=1;
        }
        setTimeout(function(){
            topYes=0
        },1000)
    });

    $(document).delegate("#login","click",function(){
        $("#denglu").css("display","block");
        //②弹出登录/注册界面
        $("#dengyemian").slideDown(300);
    });
    $(document).delegate(".tuichu span","click",function(){
        $("#denglu").css("display","none");
        $("#dengyemian").css("display","none");
        //slideLogin.stop().fadeOut(100);
    });
    $(document).delegate("#zhucein","click",function(){
        $("#denglu").css("display","block");
        //②弹出登录/注册界面
        $("#zhuyemian").slideDown(300);
    });
    $(document).delegate(".tuichu span","click",function(){
        $("#denglu").css("display","none");
        $("#zhuyemian").css("display","none");
    });
    var m=0;
    $(document).delegate(".qiehuan","click",function(){
        if(m==0){
            $("#dengyemian").stop().fadeOut(400);
            $("#zhuyemian").fadeIn(400);
            m++;
        }else if(m==1){
            $("#dengyemian").fadeIn(400);
            $("#zhuyemian").stop().fadeOut(400);
            m--;
        }

    });
    $(document).delegate(".dingwei","mouseover",function(){
        $(this).children(".hideimg1").fadeIn(200);
        $(this).children(".hideimg2").fadeIn(200);
    });
    $(document).delegate(".dingwei","mouseout",function(){
        $(this).children(".hideimg1").stop().fadeOut(200);
        $(this).children(".hideimg2").stop().fadeOut(200);
    });

    $(document).delegate(".imgitem1","mouseover",function(){
        $(this).children(".hidediv").css("display","block");
        $(this).children("img").css({"height":"69.5%",margin:"-0.5% 3% 3% 3%",opacity:"1"});
        $(this).children("span").css("color","#00A398");
    });
    $(document).delegate(".imgitem1","mouseout",function(){
        $(this).children(".hidediv").css("display","none");
        $(this).children("img").css({"height":"80%",margin:"3%",opacity:"1"});
        $(this).children("span").css("color","#3e3e3e");
    });

});