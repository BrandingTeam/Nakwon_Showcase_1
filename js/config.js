/* ============================================================
   NAKWON SHOWCASE — 설정 파일
   Firebase 콘솔에서 복사한 값을 아래에 붙여넣으세요.
   (비워두면 "로컬 테스트 모드"로 동작합니다. 같은 브라우저의
    탭끼리만 연결되므로 실제 원격 송출에는 Firebase 설정이 필요합니다.)
   ============================================================ */
window.NAKWON_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",   // 예: https://프로젝트명-default-rtdb.asia-southeast1.firebasedatabase.app
    projectId: "",
    appId: ""
  },

  // 리허설/본방송을 분리하려면 주소 뒤에 ?room=rehearsal 처럼 붙이세요.
  defaultRoom: "main"
};
