jQuery(document).ready(function(){
    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 300){
            $("#top").addClass("active");
        }else{
            $("#top").removeClass("active");
        }
    })

    // gnb 오버시 서브메뉴 다운드롭
    $('.navi').mouseenter(function(){
		$('.submenu').stop().slideDown();
        $('#top').stop().addClass("on");
    })
    $('#top').mouseleave(function(){
		$('.submenu').stop().slideUp();
        $('#top').stop().removeClass("on");
	});

    // 이용 후기 슬라이드
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth : true
      });

    // 스크롤 애니메이션
    
    var storyHeight450 = 450; 
    
    $(".cc_time").hide();
    $(".service_btn").hide();
    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= storyHeight450; 
    if(rollIt){ 
            $(".cc_time").show();
            $(".service_btn").show();
        }else{
            $(".cc_time").hide();
            $(".service_btn").hide();
        }
    });

    $(".cc_trust").hide();
    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= storyHeight450; 
    if(rollIt){ 
            $(".cc_trust").show();
        }else{
            $(".cc_trust").hide();
        }
    });

    $(".cc_much").hide();
    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= storyHeight450; 
    if(rollIt){ 
            $(".cc_much").show();
        }else{
            $(".cc_much").hide();
        }
    });

    var storyHeight1200 = 1200; 

    $(".upload").hide();
    $("#review .inner h1").hide();
    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= storyHeight1200; 
    if(rollIt){ 
            $(".upload").show();
            $("#review .inner h1").show();
        }else{
            $(".upload").hide();
            $("#review .inner h1").hide();
        }
    });

    var storyHeight1600 = 1600; 

    $(".apply").hide();
    $("#review .inner h1").hide();
    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= storyHeight1600; 
    if(rollIt){ 
            $(".apply").show();
             $("#review .inner h1").show();
        }else{
            $(".apply").hide();
            $("#review .inner h1").hide();
        }
    });
});