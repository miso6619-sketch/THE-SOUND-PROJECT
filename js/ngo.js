function initMenu() {
  console.log("initMenu 실행됨");

  $(".menu-open").off("click").on("click", function () {
    console.log("메뉴 열기 클릭");
    $("#header .menu-gnb-area").addClass("active");
  });

  $(".menu-btn-close, .menu-gnb-overlay").off("click").on("click", function () {
    console.log("메뉴 닫기 클릭");
    $("#header .menu-gnb-area").removeClass("active");
  });
}