window.onload = function () {
    //右上角按钮
    $("#headBut").click(function () {
        
        // $("#ul1").toggle();
        
        $("#ul1").slideToggle(1000);
    })
    


    var rtTop = document.getElementById("rtTop");
    rtTop.onclick = function () {
        var scrT = document.body.scrollTop || document.documentElement.scrollTop;
        // scrT-=100
        document.body.scrollTop -= scrT
        document.documentElement.scrollTop -= scrT
    }

    // 产品推荐翻页
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
    });



}


