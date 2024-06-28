$(function(){
    // 메뉴
    $(".mainmenu li").mouseover(function(){
        $(".sub, .bg").stop().slideDown(200)
    })

    $(".mainmenu li").mouseout(function(){
        $(".sub, .bg").stop().slideUp(200)
    })


})

