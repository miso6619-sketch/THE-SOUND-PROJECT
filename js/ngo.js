function initMenu() {
  //console.log("initMenu 실행됨");
  const isSubPage = location.pathname.includes("/page/");

  const paths = {
    home: isSubPage ? "../index.html" : "index.html",
    headsets: isSubPage ? "./headsets.html" : "page/headsets.html",
    speakers: isSubPage ? "./speakers.html" : "page/speakers.html",
    about: isSubPage ? "./aboutBrand.html" : "page/aboutBrand.html",
    qna: isSubPage ? "./qna.html" : "page/qna.html",
  };

  $("[data-link]").each(function () {
    const key = $(this).data("link");
    $(this).attr("href", paths[key]);
  });


  $(".menu-open").off("click").on("click", function () {
    //console.log("메뉴 열기 클릭");
    $("#header .menu-gnb-area").addClass("active");
  });

  $(".menu-btn-close, .menu-gnb-overlay").off("click").on("click", function () {
    //console.log("메뉴 닫기 클릭");
    $("#header .menu-gnb-area").removeClass("active");
  });
}