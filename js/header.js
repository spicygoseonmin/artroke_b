window.addEventListener("load", function () {
    // 로그인 상태에 따른 UI 업데이트
    const loginText = document.getElementById("loginText");
    const loginIcon = document.getElementById("loginIcon");
    const userInfoNickName = document.getElementById("userInfoNickName");
    const userInfoId = document.getElementById("userInfoId");
    const userInfoEmail = document.getElementById("userInfoEmail");
    const logOut = document.getElementById("logOut");
    const iconContainer = document.getElementById("iconContainer");
  
    // 로컬 스토리지에서 로그인된 사용자 정보 가져오기
    const userFind = JSON.parse(localStorage.getItem("userFind"));
  
    if (userFind) {
      // 로그인 정보가 있으면, "로그인" 텍스트를 숨기고 아이콘을 보이기
      loginText.style.display = "none";
      loginIcon.style.display = "inline-block";
  
      // 사용자 정보 출력
      if (userFind.usernickname) {
        userInfoNickName.textContent = `${userFind.usernickname} 님 환영합니다!`;
      }
      if (userFind.userName) {
        userInfoId.textContent = `아이디: ${userFind.userName}`;
      }
      if (userFind.userEmail) {
        userInfoEmail.textContent = `이메일: ${userFind.userEmail}`;
      }
  
      // 아이콘 클릭 시 아무런 동작도 하지 않도록 설정
      loginIcon.addEventListener("click", function (e) {
        e.preventDefault(); // 기본 동작 방지
        return false; // 클릭 시 아무 동작도 하지 않음
      });
    } else {
      // 로그인 정보가 없으면, "로그인" 텍스트를 보이고 아이콘 숨기기
      loginText.style.display = "inline-block";
      loginIcon.style.display = "none";
    }
  
    // 로그아웃 기능
    logOut.addEventListener("click", function () {
      // 로컬 스토리지에서 사용자 정보 삭제
      localStorage.removeItem("userFind");
  
      // 로그인 텍스트를 보이고 아이콘 숨기기
      loginText.style.display = "inline-block";
      loginIcon.style.display = "none";
      userInfoNickName.textContent = ""; // 닉네임 초기화
      userInfoId.textContent = ""; // 아이디 초기화
      userInfoEmail.textContent = ""; // 이메일 초기화
      iconContainer.style.display = "none"; // 사용자 정보 컨테이너 숨기기
      alert("로그아웃이 완료되었습니다.");
    });
  
    // 카테고리 열고 닫기 기능
    const openCate = document.querySelector(".open-cate");
    const cateBox = document.querySelector(".cate-box");
    const cateBack = document.querySelector(".cate-background");
  
    openCate.addEventListener("click", function () {
      cateBox.classList.toggle("active");
      cateBack.classList.toggle("active");
    });
  
    cateBack.addEventListener("click", function () {
      cateBox.classList.remove("active");
      cateBack.classList.remove("active");
    });
  
    // 로고 클릭 시 메인 페이지로 이동
    const headerLogo = document.querySelector(".logo");
    headerLogo.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  
    // 로그인 버튼 클릭 시 로그인 페이지로 이동
    const loginMove = document.getElementById("login-btn");
    loginMove.addEventListener("click", function () {
      window.location.href = "login.html";
    });
  });
  
  window.addEventListener("load", function () {
    const iconContainer = document.getElementById("iconContainer");
  
    // 아이콘 클릭 시 컨테이너 토글
    loginIcon.addEventListener("click", function () {
      // 컨테이너가 보이지 않으면 보이게 하고, 보이면 숨김
      if (iconContainer.style.display === "none" || iconContainer.style.display === "") {
        iconContainer.style.display = "block";
      } else {
        iconContainer.style.display = "none";
      }
    });
  });
  
  window.addEventListener("load", function () {
    const noticeToggle = document.querySelector("#userInfoNotice > ul > li > i"); // 알림 토글 아이콘
    const noticeContent = document.getElementById("noticeNone"); // 알림 내용
    const teachToggle = document.querySelector("#userInfoNotice > ul:nth-child(2) > li > i"); // 나의 강좌 토글 아이콘
    const teachContent = document.getElementById("teachList"); // 나의 강좌 내용
    const userInfoDelete = document.getElementById("userInfoDelete");
    const iconContainer = document.getElementById("iconContainer");
  
    userInfoDelete.addEventListener("click", function () {
      iconContainer.style.display = "none";
    });
  
    // 알림 항목 클릭 시 내용 표시/숨기기
    noticeToggle.addEventListener("click", function () {
      if (noticeContent.style.display === "none" || noticeContent.style.display === "") {
        noticeContent.style.display = "block";
      } else {
        noticeContent.style.display = "none";
      }
    });
  
    // 나의 강좌 항목 클릭 시 내용 표시/숨기기
    teachToggle.addEventListener("click", function () {
      if (teachContent.style.display === "none" || teachContent.style.display === "") {
        teachContent.style.display = "block";
      } else {
        teachContent.style.display = "none";
      }
    });
  });
  