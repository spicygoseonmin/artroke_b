window.addEventListener("load", function () {
  // 로그인 상태에 따른 UI 업데이트
  const loginText = document.getElementById("loginText");
  const loginIcon = document.getElementById("loginIcon");
  const userInfoNickName = document.getElementById("userInfoNickName");
  const userInfoId = document.getElementById("userInfoId");
  const userInfoEmail = document.getElementById("userInfoEmail");
  const logOut = document.getElementById("logOut");
  const iconContainer = document.getElementById("iconContainer");
  const userInfo = document.getElementById("userInfo");
  const userInfoSecond = document.getElementById("userInfoSecond");
  const notice = this.document.getElementById("notice");
  const noticeNone = this.document.getElementById("noticeNone");
  const myTeach = this.document.getElementById("myTeach");
  const teachList = this.document.getElementById("teachList");
  const searchShow = document.getElementById("searchShow");
  const searchDelete = document.getElementById("searchDelete");
  const searchXmark = this.document.getElementById("searchXmark");

  searchXmark.addEventListener("click", function () {
    // 현재 display 상태를 확인하고 토글
    if (searchDelete.style.display === "block") {
        searchDelete.style.display = "none";
        searchShow.style.display = "block";
    } else {
        searchShow.style.display = "block";
        searchDelete.style.display = "none";
    }
});


  searchShow.addEventListener("click", function () {
    // 현재 display 상태를 확인하고 토글
    if (searchDelete.style.display === "block") {
      searchDelete.style.display = "none";
    } else {
      searchDelete.style.display = "block";
      searchShow.style.display = "none";
    }
  });
  myTeach.addEventListener("click", function () {
    // 현재 display 상태를 체크하고 토글
    if (teachList.style.display === "block") {
      teachList.style.display = "none";
    } else {
      teachList.style.display = "block";
    }
  });

  notice.addEventListener("click", function () {
    // 현재 display 상태를 체크하고 토글
    if (noticeNone.style.display === "block") {
      noticeNone.style.display = "none";
    } else {
      noticeNone.style.display = "block";
    }
  });

  loginText.addEventListener("click", function () {
    window.location.href = "login.html";
  });
  // 로컬 스토리지에서 로그인된 사용자 정보 가져오기
  const userFind = JSON.parse(localStorage.getItem("userFind"));

  if (userFind) {
    // 로그인 정보가 있으면, "로그인" 텍스트를 숨기고 닉네임을 보이기
    loginText.style.display = "none";
    loginIcon.style.display = "none"; // 아이콘 숨기기

    // 닉네임 요소를 생성하거나 가져오기
    let loginNickName = document.getElementById("loginNickName");
    if (!loginNickName) {
      loginNickName = document.createElement("span");
      loginNickName.id = "loginNickName";
      loginNickName.style.display = "inline-block";
      loginText.parentNode.insertBefore(loginNickName, loginText);
    }
    loginNickName.textContent = userFind.usernickname;

    // 닉네임 클릭 시 아이콘 컨테이너 토글
    loginNickName.addEventListener("click", function (e) {
      e.stopPropagation(); // 이벤트 전파 방지 (다른 클릭 이벤트와 충돌 방지)
      if (iconContainer.style.display === "none" || iconContainer.style.display === "") {
        iconContainer.style.display = "block";
      } else {
        iconContainer.style.display = "none";
      }
    });

    // 사용자 정보 출력
    userInfoNickName.textContent = `${userFind.usernickname} 님 환영합니다!`;
    userInfoId.textContent = `UserId : ${userFind.userName}`;
    userInfoEmail.textContent = `UserEmail : ${userFind.userEmail}`;
  } else {
    // 로그인 정보가 없으면, "로그인" 텍스트를 보이고 닉네임과 아이콘 숨기기
    loginText.style.display = "inline-block";
    loginIcon.style.display = "none";
    const loginNickName = document.getElementById("loginNickName");
    if (loginNickName) loginNickName.style.display = "none";
  }

  // 로그아웃 기능
  logOut.addEventListener("click", function (e) {
    e.preventDefault(); // 기본 동작 방지
    e.stopPropagation(); // 클릭 이벤트 전파 방지 (다른 클릭 이벤트와 충돌 방지)

    // 로컬 스토리지에서 사용자 정보 삭제
    localStorage.removeItem("userFind");

    // 로그인 텍스트를 보이고 닉네임 숨기기
    loginText.style.display = "inline-block";
    loginIcon.style.display = "none";
    const loginNickName = document.getElementById("loginNickName");
    if (loginNickName) loginNickName.style.display = "none";
    userInfoNickName.textContent = ""; // 닉네임 초기화
    userInfoId.textContent = ""; // 아이디 초기화
    userInfoEmail.textContent = ""; // 이메일 초기화
    iconContainer.style.display = "none"; // 사용자 정보 컨테이너 숨기기
    alert("로그아웃이 완료되었습니다.");
  });

  // 반응형 적용 함수
  function applyResponsiveEffect() {
    if (window.innerWidth > 768) {
      const userInfoDelete = document.getElementById("userInfoDelete");
      const iconContainer = document.getElementById("iconContainer");
      userInfoDelete.addEventListener("click", function () {
        iconContainer.style.display = "none";
      });
      // 768px 이하일 때 userInfo와 userInfoSecond 숨기기
      userInfo.style.display = "none";
      userInfoSecond.style.display = "none";
    } else {
      // 768px 초과일 때 userInfo와 userInfoSecond 보이기
      userInfo.style.display = "block";
      userInfoSecond.style.display = "block";
    }
  }
  // 초기 로드 시 적용
  applyResponsiveEffect();

  // 창 크기 변경 시에도 적용
  window.addEventListener("resize", applyResponsiveEffect);
});
window.addEventListener("load", function () {
  const openCate = this.document.querySelector(".open-cate");
  const cateBox = this.document.querySelector(".cate-box");
  const cateBack = this.document.querySelector(".cate-background");
  openCate.addEventListener("click", function () {
    cateBox.classList.toggle("active");
    cateBack.classList.toggle("active");
  });
  cateBack.addEventListener("click", function () {
    cateBack.classList.remove("active");
    cateBox.classList.remove("active");
  });
  const headerLogo = this.document.querySelector(".logo");
  headerLogo.addEventListener("click", function () {
    window.location.href = "index.html";
  });
  const loginMove = this.document.getElementById("login-btn");
  loginMove.addEventListener("click", function () {
    window.location.href = "login.html";
  });
});
