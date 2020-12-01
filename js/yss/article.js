layui.use(["jquery"], function () {
  var $ = layui.jquery;
  article.Init($);
});
var article = {};
article.Init = function ($) {
  var slider = 0;
  blogtype();
  $(".category-toggle").click(function (e) {
    e.stopPropagation();
    categroyIn();
  });
  $(".article-category").click(function () {
    categoryOut();
  });
  $(".blog-mask").click(function () {
    categoryOut();
  });
  $(".f-qq").on("click", function () {
    window.open(
      "http://connect.qq.com/widget/shareqq/index.html?url=" +
        $(this).attr("href") +
        "&sharesource=qzone&title=" +
        $(this).attr("title") +
        "&pics=" +
        $(this).attr("cover") +
        "&summary=" +
        $(this).attr("desc") +
        "&desc=你的分享简述" +
        $(this).attr("desc")
    );
  });
  $("body").delegate(".fa-times", "click", function () {
    $(".search-result").hide().empty();
    $("#searchtxt").val("");
    $(".search-icon i").removeClass("fa-times").addClass("fa-search");
  });
  function categroyIn() {
    $(".category-toggle").addClass("layui-hide");
    $(".article-category").unbind(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
    );
    $(".blog-mask").unbind(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
    );
    $(".blog-mask").removeClass("maskOut").addClass("maskIn");
    $(".blog-mask").removeClass("layui-hide").addClass("layui-show");
    $(".article-category").removeClass("categoryOut").addClass("categoryIn");
    $(".article-category").addClass("layui-show");
  }
  function categoryOut() {
    $(".blog-mask").on(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        $(".blog-mask").addClass("layui-hide");
      }
    );
    $(".article-category").on(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        $(".article-category").removeClass("layui-show");
        $(".category-toggle").removeClass("layui-hide");
      }
    );
    $(".blog-mask")
      .removeClass("maskIn")
      .addClass("maskOut")
      .removeClass("layui-show");
    $(".article-category").removeClass("categoryIn").addClass("categoryOut");
  }
  function blogtype() {
    $("#category li").hover(
      function () {
        $(this).addClass("current");
        var num = $(this).attr("data-index");
        $(".slider").css({ top: (parseInt(num) - 1) * 40 + "px" });
      },
      function () {
        $(this).removeClass("current");
        $(".slider").css({ top: slider });
      }
    );
    $(window).scroll(function (event) {
      var winPos = $(window).scrollTop();
      if (winPos > 750) $("#categoryandsearch").addClass("fixed");
      else $("#categoryandsearch").removeClass("fixed");
    });
  }
};
