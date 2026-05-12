/**
 * 메인 홈페이지의 문의·상담 화면 URL을 한 곳에서 지정합니다.
 * 링크는 기본적으로 같은 탭에서 열리므로(target 미사용), 브라우저 뒤로가기로 이 랜딩으로 돌아올 수 있습니다.
 */
(function () {
  var MAIN_CONTACT_URL = "https://bluedirectors.vercel.app/#/contact";

  function apply() {
    document.querySelectorAll("a[data-main-contact]").forEach(function (a) {
      a.setAttribute("href", MAIN_CONTACT_URL);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }
})();
