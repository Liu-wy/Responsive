/* // 改变浏览器窗口大小获取不同的图片
$(function(){
    function resize(){
        // 获取浏览器宽度
        var widowWidth = $(window).width();
        var small = widowWidth<768;
        // 根据small的值获取图片
        //遍历所有的轮播图片
        var pic = $(".carousel>item");
        pic.each(function(i,item){
            //把DOM对象转换为JQ对象
            $item = $(item);
            //获取图片地址
            var img = small?$item.data("image-sm"):$item.data("image-big");
            $item.html('<img src "' +img + '">')
        })
    }
    $(window).on("resize",resize).trigger("resize")
})
 */


// 改变浏览器窗口获取不同图片
$(function () {
  function resize() {
    // 获取浏览器宽度
    var windowWidth = $(window).width();

    var isSmallScreen = windowWidth < 768;
    // console.log(isSmallScreen);

    // 根据isSmallScreen的值来切换图片
    var ida = $('.carousel-inner > .item');
    console.log(ida);
    ida.each(function (i, item) {
      // 把DOM对象转换为jq对象
      $item = $(item);
      var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
    
      $item.html('<img src="' + imgSrc + '"/>');
    })

    //选项卡滚动条

    var $ulContainer = $(".ul-wrapper .tabL .nav-tabs");
    var width = 0;
   /*  var smWinsow = $(window).width();
    var smWidth = smWinsow < 600; */
    $ulContainer.children().each(function (index, element) {
      width += element.clientWidth;
    })
    if (width > $(window).width()) {
      $ulContainer.css("width", width).parent().css("overflow-x", "scroll")
    } else {
      $ulContainer.css("width", "auto").parent().css("overflow", "hidden")
    }
  }

  $(window).on('resize', resize).trigger('resize');
  //实现tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



  //实现新闻左侧绑定事件
  $(".newsTab .newsC a").on("click",function(){
    //获取当前要操作的元素
    $this = $(this);
    //自定义属性获取对应的title值
    var title = $this.data("title")
    //获取到的title值赋值给newsTitle
    $(".newsTitle").text(title)


  })


})



